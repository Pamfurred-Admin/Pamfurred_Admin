<template>
    <div class="ps-20 pt-8 pe-20">
    <!--Search Bar and Search Button-->
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
        <!-- Add New User Button -->
        <div class="flex justify-end mb-4">
          <button
            class="bg-custom-red hover:bg-[#872F05] text-white px-6 py-2 rounded-md focus:outline-none"
            @click="addNewUser">Add New User</button>
        </div>
        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="min-w-full table-fixed">
            <thead class="bg-gray-100">
              <tr>
                <th class="w-2/12 p-2 text-center">User ID</th>
                <th class="w-3/12 p-2 text-center">Full name</th>
                <th class="w-2/12 p-2 text-center">Door No.</th>
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
                <td class="w-3/12 p-2">{{ user.fullName }}</td>
                <td class="w-2/12 p-2">{{ user.doorNo }}</td>
                <td class="w-4/12 p-2">{{ user.email }}</td>
                <td class="w-1/12 p-4 flex space-x-4">
                  <button class="text-custom-pencil">
                    <font-awesome-icon icon="pencil" />
                  </button>
                  <button class="text-custom-delete">
                    <font-awesome-icon icon="trash" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pagination -->
        <div class="flex justify-between items-center mt-4  pt-5 pb-20">
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
    name: 'PetownersList',
    data() {
      return {
        searchQuery: '',
        currentPage: 1,
        pageSize: 10,
        users: [
          { id: 1, fullName: 'Bob Niño Golosinda', doorNo: '01-0204', email: 'bobskie123@gmail.com' },
          { id: 2, fullName: 'Aillen Gonzaga', doorNo: '03-0206', email: 'gonzagamae@gmail.com' },
          { id: 3, fullName: 'Lynie Rose Gaa', doorNo: '05-0276', email: 'gaa_april@gmail.com' },
          { id: 4, fullName: 'Arny Ucab', doorNo: '01-0654', email: 'ucabjohn@gmail.com' },
          { id: 5, fullName: 'Angelito Guibone III', doorNo: '09-1004', email: 'guibone_mark@gmail.com' },
          { id: 6, fullName: 'Juan Dela Cruz', doorNo: '01-0705', email: 'juan.delacruz@example.com' },
          { id: 7, fullName: 'Ana Reyes', doorNo: '08-0345', email: 'ana.reyes@example.com' },
          { id: 8, fullName: 'Jose Garcia', doorNo: '02-0456', email: 'jose.garcia@example.com' },
          { id: 9, fullName: 'Teresa Mendoza', doorNo: '02-0090', email: 'teresa.mendoza@example.com' },
          { id: 10, fullName: 'Maria Santos', doorNo: '07-0456', email: 'maria.santos@example.com' },
          { id: 11, fullName: 'Carlos Ramirez', doorNo: '09-0346', email: 'carlos.ramirez@example.com' },
          { id: 12, fullName: 'Luz Gonzales', doorNo: '02-0456', email: 'luz.gonzales@example.com' },
          { id: 13, fullName: 'Andres Aquino', doorNo: '05-0326', email: 'andres.aquino@example.com' },
          { id: 14, fullName: 'Clara Rivera', doorNo: '06-0426', email: 'clara.rivera@example.com' },
          { id: 15, fullName: 'Rafael Torres', doorNo: '06-0359', email: 'rafael.torres@example.com' },
          { id: 16, fullName: 'Elisa Cruz', doorNo: '06-0123', email: 'elisa.cruz@example.com' },
          { id: 17, fullName: 'Miguel Lopez', doorNo: '06-0426', email: 'miguel.lopez@example.com' },
          { id: 18, fullName: 'Sofia Vargas', doorNo: '03-0457', email: 'sofia.vargas@example.com' },
          { id: 19, fullName: 'Roberto Hernandez', doorNo: '01-0906', email: 'roberto.hernandez@gmail.com' },
          { id: 20, fullName: 'Patricia Flores', doorNo: '02-0430', email: 'patricia.flores@example.com' },
        ]
      }
    },
    computed: {
      filteredUsers() {
        if (this.searchQuery) {
          return this.users.filter(user =>
            user.fullName.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        } else {
          return this.users
        }
      },
      totalEntries() {
        return this.filteredUsers.length
      },
      totalPages() {
        return Math.ceil(this.totalEntries / this.pageSize)
      },
      currentStart() {
        return (this.currentPage - 1) * this.pageSize + 1
      },
      currentEnd() {
        return Math.min(this.currentPage * this.pageSize, this.totalEntries)
      },
      paginatedUsers() {
        const start = (this.currentPage - 1) * this.pageSize
        const end = start + this.pageSize
        return this.filteredUsers.slice(start, end)
      }
    },
    methods: {
      search() {
        this.currentPage = 1 
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--
        }
      },
      addNewUser() {
        this.$router.push({ name: 'Add-Pet-Owners' });
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  