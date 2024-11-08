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
    <div class="overflow-x-auto">
      <table class="min-w-full table-fixed">
        <thead class="bg-gray-100">
          <tr>
            <th class="w-2/12 p-2 text-center">User ID</th>
            <th class="w-3/12 p-2 text-center">Establishment name</th>
            <th class="w-2/12 p-2 text-center">Approval Status</th>
            <th class="w-4/12 p-2 text-center">Email address</th>
            <th class="w-2/12 p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in paginatedUsers"
            :key="user.sp_id"
            :class="{ 'bg-gray-50': user.sp_id % 2 === 0 }"
          >
            <td class="w-2/12 p-2">{{ user.sp_id }}</td>
            <td class="w-3/12 p-2">{{ user.name }}</td>
            <td class="w-2/12 p-2">{{ user.approval_status }}</td>
            <td class="w-4/12 p-2">{{ user.email }}</td>
            <td class="w-2/12 p-4 flex space-x-4">
              <button @click="approveProvider(user.sp_id)" class="bg-green-700 text-white font-medium py-2 px-2 rounded-md hover:bg-green-900 focus:outline-none"> Accept </button>
              <button @click="declineProvider(user.sp_id)" class="bg-red-700 text-white font-medium py-2 px-2 rounded-md hover:bg-red-900 focus:outline-none"> Deny </button>
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

export default {
  name: 'RegistrationList',
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      pageSize: 10,
      users: [],
    };
  },
  computed: {
    filteredUsers() {
      if (this.searchQuery) {
        return this.users.filter(user =>
          user.establishment_name.toLowerCase().includes(this.searchQuery.toLowerCase())
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
    },
  },
  methods: {
    async fetchProviders() {
      const { data, error } = await supabase
        .from('service_provider')
        .select('*')
        .eq('approval_status', 'pending');

      if (error) {
        console.error('Error fetching providers:', error);
      } else {
        this.users = data;
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
    async approveProvider(sp_id) {
      const { error } = await supabase
        .from('service_provider')
        .update({ approval_status: 'approved' })
        .eq('sp_id', sp_id);

      if (error) {
        console.error('Error approving provider:', error);
      } else {
        this.users = this.users.filter(user => user.sp_id !== sp_id);
      }
    },
    async declineProvider(sp_id) {
      const { error } = await supabase
        .from('service_provider')
        .update({ approval_status: 'declined' })
        .eq('sp_id', sp_id);

      if (error) {
        console.error('Error declining provider:', error);
      } else {
        this.users = this.users.filter(user => user.sp_id !== sp_id);
      }
    },
  },
  mounted() {
    this.fetchProviders();
  },
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
