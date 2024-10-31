<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-6 bg-transparent">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
              First Name
            </label>
            <input
              v-model="form.firstName"
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
              Last Name
            </label>
            <input
              v-model="form.lastName"
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email Address
            </label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              placeholder="Enter Email Address"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="doorNo">
              Door No.
            </label>
            <input
              v-model="form.doorNo"
              type="text"
              id="doorNo"
              placeholder="Enter Door No."
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="street">
              Street
            </label>
            <input
              v-model="form.street"
              type="text"
              id="street"
              placeholder="Enter Street"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="barangay">
              Barangay
            </label>
            <input
              v-model="form.barangay"
              type="text"
              id="barangay"
              placeholder="Enter Barangay"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
              City
            </label>
            <input
              v-model="form.city"
              type="text"
              id="city"
              placeholder="Enter City"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input
              v-model="form.username"
              type="text"
              id="username"
              placeholder="Enter Username"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              v-model="form.password"
              type="password"
              id="password"
              placeholder="Enter Password"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="latitude">
              User Latitude
            </label>
            <input
              v-model="form.latitude"
              type="text"
              id="latitude"
              placeholder="Enter Latitude"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="longitude">
              User Longitude
            </label>
            <input
              v-model="form.longitude"
              type="text"
              id="longitude"
              placeholder="Enter Longitude"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          <div class="mt-6">
            <button
              type="submit"
              class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add New User
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddSP',
    data() {
      return {
        form: {
          firstName: "",
          lastName: "",
          email: "",
          doorNo: "",
          street: "",
          barangay: "",
          city: "",
          username: "",
          password: "",
          latitude: "",
          longitude: "",
        },
      };
    },
    methods: {
      handleSubmit() {
        console.log("Form Submitted", this.form);
        // Add your form submission logic here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styling can go here if needed */
  </style>