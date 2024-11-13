<template>
  <div class="ps-20 pt-8 pe-20">
    <div class="flex items-center mb-4">
      <div class="relative w-full md:w-full">
        <font-awesome-icon icon="magnifying-glass" class="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
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
        @click="addNewUser">Add New User</button>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full table-fixed">
        <thead class="bg-gray-100">
          <tr>
            <th class="w-2/12 p-2 text-center">Username</th>
            <th class="w-3/12 p-2 text-center">Full name</th>
            <th class="w-2/12 p-2 text-center">Address</th>
            <th class="w-4/12 p-2 text-center">Email address</th>
            <th class="w-2/12 p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in paginatedUsers"
            :key="user.user_id"
            :class="{ 'bg-gray-50': user.user_id % 2 === 0 }"
          >
            <td class="w-2/12 p-2">{{ user.username }}</td>
            <td class="w-3/12 p-2">{{ user.first_name }} {{ user.last_name }}</td>
            <td class="w-2/12 p-2">
              {{ user.floor_unit_room }},
              {{ user.street }}, {{ user.barangay }}, {{ user.city }}
            </td>
            <td class="w-4/12 p-2">{{ user.email }}</td>
            <td class="w-1/12 p-4 flex space-x-4">
              <button class="text-custom-pencil" @click="goToUpdatePage(user.user_id)">
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
import { supabase } from '@/supabase/supabase';
import deletebutton from './deletebutton.vue';

export default {
  name: 'PetownersList',
  components: {
    deletebutton
  },
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      pageSize: 10,
      users: [],
      errorMessage: ''
    };
  },
  computed: {
    filteredUsers() {
      return this.searchQuery
        ? this.users.filter(user =>
            user.first_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            user.last_name.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        : this.users;
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
      return this.filteredUsers.slice(start, start + this.pageSize);
    }
  },
  methods: {
  async fetchUsersWithPetOwners() {
    console.log("Fetching users with pet owners...");
    const { data, error } = await supabase
      .rpc('get_pet_owner_details'); 

    if (error) {
      console.error("Error fetching users with pet owners:", error);
      this.errorMessage = "Failed to fetch users. Please try again later.";
    } else {
      console.log("Fetched data:", data); 
      this.users = data.map(user => ({
        user_id: user.user_id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        floor_unit_room: user.floor_unit_room,
        street: user.street,
        barangay: user.barangay,
        city: user.city,
        email: user.email
      })) || [];
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
    addNewUser() {
      this.$router.push({ name: 'AddPetOwners' });
    },
    goToUpdatePage(user_id) {
      this.$router.push({
        name: 'UpdatePetOwners',
        query: { id: user_id }
      });
    },
    handleDelete(user) {
      this.users = this.users.filter(u => u.user_id !== user.user_id);
    }
  },
  mounted() {
    this.fetchUsersWithPetOwners();
  }
};
</script>
<style></style>