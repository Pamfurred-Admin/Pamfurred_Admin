<template>
  <div class="ps-20 pt-8 pe-20">
    <div class="flex items-center mb-4">
      <div class="relative w-full md:w-full">
        <font-awesome-icon icon="magnifying-glass" class="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500"/>
        <input
          type="text"
          placeholder="Search by name"
          v-model="searchQuery"
          class="border p-2 pl-12 rounded-full focus:outline-none focus:ring-1 focus:ring-custom-orange w-full"
        />
      </div>
      <button
        class="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md focus:outline-none"
        @click="search">Search
      </button>
    </div>
    <div class="flex justify-end mb-4">
      <button
        class="bg-custom-red hover:bg-[#872F05] text-white px-6 py-2 rounded-md focus:outline-none"
        @click="addNewServiceprovider">Add Service Provider</button>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full table-fixed">
        <thead class="bg-gray-100">
          <tr>
            <th class="w-2/12 p-2 text-center">Service Provider ID</th>
            <th class="w-3/12 p-2 text-center">Establishment Name</th>
            <th class="w-2/12 p-2 text-center">Contact No.</th>
            <th class="w-4/12 p-2 text-center">Email Address</th>
            <th class="w-2/12 p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in paginatedUsers"
            :key="user.id"
            :class="{ 'bg-gray-50': user.id % 2 === 0 }"
          >
            <td class="w-2/12 p-2">{{ user.sp_id }}</td>
            <td class="w-3/12 p-2">{{ user.estName }}</td>
            <td class="w-2/12 p-2">{{ user.contactNo }}</td>
            <td class="w-4/12 p-2">{{ user.email }}</td>
            <td class="w-1/12 p-4 flex space-x-4">
              <button class="text-custom-pencil" @click="goToUpdatePage(user)">
                <font-awesome-icon icon="pencil" />
              </button>
              <deletebutton :user="user" @delete="handleDelete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-between items-center mt-4 pt-5 pb-20">
      <p>
        Showing {{ currentStart }} to {{ currentEnd }} out of {{ totalEntries }} entries
      </p>
      <div class="flex space-x-2">
        <button
          :disabled="currentPage === 1"
          class="px-3 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-md focus:outline-none"
          @click="prevPage"
        >
          Previous
        </button>
        <span class="px-3 py-1 border bg-white">{{ currentPage }}</span>
        <button
          :disabled="currentPage === totalPages"
          class="px-3 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-md focus:outline-none"
          @click="nextPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import deletebutton from './deletebutton.vue';
import { supabase } from '@/supabase/supabase';

export default {
  name: 'ServiceProviderList',
  components: {
    deletebutton
  },
  data() {
    return {
      serviceProviderId: this.$route.params.id,
      searchQuery: '',
      currentPage: 1,
      pageSize: 10,
      users: [] 
    };
  },
  computed: {
    filteredUsers() {
      if (this.searchQuery) {
        return this.users.filter(user =>
          user.estName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.users;
      }
    },
    totalEntries() {
      return this.filteredUsers.length;
    },
    totalPages() {
      return Math.ceil(this.totalEntries / this.pageSize);
    },
    currentStart() {
      return (this.currentPage - 1) * this.pageSize + 1;
    },
    currentEnd() {
      return Math.min(this.currentPage * this.pageSize, this.totalEntries);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredUsers.slice(start, end);
    }
  },
  methods: {
    async fetchServiceProviders() {
      const { data, error } = await supabase.rpc('get_approved_serviceproviders');
      if (error) {
        console.error('Error fetching service provider details:', error);
      } else {
        this.users = data.map(user => ({
          sp_id: user.sp_id,
          user_id: user.user_id,
          estName: user.name,
          contactNo: user.phone_number,
          email: user.email
        }));
      }
    },
    search() {
      this.currentPage = 1;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    addNewServiceprovider() {
      this.$router.push({ name: 'AddServiceProvider' });
    },
    goToUpdatePage(user) {
      this.$router.push({
        name: 'UpdateServiceProvider/:userId',
        params: { id: user.id }
      }).catch(err => {
        console.error('Navigation Error:', err);
      });
    },
    async handleDelete(user) {
  if (!user.sp_id || !user.user_id) {
    console.error("Missing sp_id or user_id");
    this.errorMessage = "Missing required user data.";
    return;
  }

  try {
    const { error: serviceProvierError } = await supabase
      .from('service_provider')
      .delete()
      .eq('sp_id', user.sp_id);

      if (serviceProvierError) {
      if (serviceProvierError.code === '23503' && serviceProvierError.message.includes("serviceprovider_service_sp_id_fkey")) {
        this.errorMessage = "Cannot delete user because they have an active pet care service records.";
        alert(this.errorMessage);
      } else if (serviceProvierError.code === '23503' && serviceProvierError.message.includes("serviceprovider_package_sp_id_fkey")) {
        this.errorMessage = "Cannot delete user because they have active pet care service records.";
        alert(this.errorMessage);
      } else if (serviceProvierError.code === '23503' && serviceProvierError.message.includes("appointment")) {
        this.errorMessage = "Cannot delete user because they have active appointment records.";
        alert(this.errorMessage);
      } else if (serviceProvierError.message.includes("foreign key constraint")) {
        this.errorMessage = "Cannot delete user because they have active feedback records.";
        alert(this.errorMessage);
      } else {
        console.error("Error deleting from service_provider table:", serviceProvierError);
        this.errorMessage = "Failed to delete user.";
      }
      return;
    }

    const { error: userError } = await supabase
      .from('user')
      .delete()
      .eq('user_id', user.user_id);

    if (userError) {
      console.error("Error deleting from user table:", userError);
      this.errorMessage = "Failed to delete user.";
      return;
    }

    this.users = this.users.filter(u => u.user_id !== user.user_id);

    this.errorMessage = ''; 
    alert("User deleted successfully.");
    
    window.location.reload();  
  } catch (err) {
    console.error("Unexpected error during deletion:", err);
    this.errorMessage = "An unexpected error occurred during deletion.";
  }
}
  },
  mounted() {
    this.fetchServiceProviders();
  }
};
</script>
<style></style>