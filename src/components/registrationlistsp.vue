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
              <th class="w-2/12 p-2 text-center">Contact No.</th>
              <th class="w-4/12 p-2 text-center">Email address</th>
              <th class="w-2/12 p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in paginatedUsers"
              :key="user.id"
              :class="{ 'bg-gray-50': user.id % 2 === 0 }"
            >
              <td class="w-2/12 p-2">{{ user.id }}</td>
              <td class="w-3/12 p-2">{{ user.estName }}</td>
              <td class="w-2/12 p-2">{{ user.contactNo }}</td>
              <td class="w-4/12 p-2">{{ user.email }}</td>
              <td class="w-2/12 p-4 flex space-x-4">
                <button class="bg-green-700 text-white font-medium py-2 px-2 rounded-md hover:bg-green-900 focus:outline-none"> Accept </button>
                <button class="bg-red-700 text-white font-medium py-2 px-2 rounded-md hover:bg-red-900 focus:outline-none"> Deny </button>
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
  export default {
    name: 'RegistrationList',
    components: {
    },
    data() {
      return {
        searchQuery: '',
        currentPage: 1,
        pageSize: 10,
        users: [
          { id: 1, estName: 'PetVet Central', contactNo: '09561431724', email: 'petvetcentral@gmail.com' },
          { id: 2, estName: 'Groomers on the Go', contactNo: '09772910283', email: 'groomersonthego@gmail.com' },
          { id: 3, estName: 'Fur Care Veterinary', contactNo: '09128541729', email: 'furcare1@gmail.com' },
          { id: 4, estName: 'Purrfect Furs Pet Grooming', contactNo: '09171234567', email: 'purrfectfur1@gmail.com' },
          { id: 5, estName: 'Causin Veterinary Clinic', contactNo: '09281234568', email: 'causinvet1@example.com' },
          { id: 6, estName: 'Care A Pet', contactNo: '09391234569', email: 'careapet1@example.com' },
          { id: 7, estName: 'Agripet Shop', contactNo: '09181234570', email: 'agripetshop@example.com' },
          { id: 8, estName: 'Petz Planet Pet Station', contactNo: '09291234571', email: 'petzplanet@example.com' },
          { id: 9, estName: 'Golden Pet', contactNo: '09171234567', email: 'goldenpet1@example.com' },
          { id: 10, estName: 'Pet Parent Grooming Services', contactNo: '09381234572', email: 'petparent1@example.com' },
          { id: 11, estName: 'Family Pets', contactNo: '09191234573', email: 'familypets@example.com' },
          { id: 12, estName: 'Pet Express', contactNo: '09201234574', email: 'petexpress@example.com' },
          { id: 13, estName: 'Grooming on Wheels', contactNo: '09371234575', email: 'groomingonwheels@example.com' },
          { id: 14, estName: 'Sassy Pets', contactNo: '09101234576', email: 'sassypets@example.com' },
          { id: 15, estName: 'Barks and Bubbles', contactNo: '09211234577', email: 'barksandbubbles@example.com' },
          { id: 16, estName: 'Furry Friends Salon', contactNo: '09361234578', email: 'furryfriendssalon@example.com' },
          { id: 17, estName: 'Neat and Tidy Pet Services', contactNo: '09111234579', email: 'neatandtidy1@example.com' },
          { id: 18, estName: 'Clean Pups Grooming Services', contactNo: '09221234580', email: 'cleanpups@gmail.com' },
          { id: 19, estName: 'Pets and Brush', contactNo: '09351234581', email: 'petsandbrush@example.com' }
        ]
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
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  