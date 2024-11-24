<template>
    <button
      class="bg-blue-700 text-white font-medium py-2 px-2 rounded-md hover:bg-blue-900 focus:outline-none"
      @click="toggleView"
    >View</button>
  
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div class="bg-white p-8 rounded-md shadow-lg w-1/3">
        <h2 class="text-xl font-semibold mb-4">Provider Details</h2>
        <div class="space-y-4 text-left">
        <p><strong>Business Owner First Name:</strong> {{ provider.first_name }}</p>
        <p><strong>Business Owner Last Name:</strong> {{ provider.last_name }}</p>
        <p><strong>Establishment Name:</strong> {{ provider.name }}</p>
        <p><strong>Business Email:</strong> {{ provider.email }}</p>
        <p><strong>Phone Number:</strong> {{ provider.phone_number }}</p>
        <p><strong>Approval Status:</strong> {{ provider.approval_status }}</p>
          <div>
            <strong>Business Permit:</strong>
            <div class="flex items-center">
              <button @click="downloadBusinessPermit" class="text-blue-600 hover:text-blue-800">Download Permit</button>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button @click="toggleView" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ViewButton',
    props: {
      provider: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        isVisible: false,  // Initially the modal is hidden
      };
    },
    methods: {
      toggleView() {
        this.isVisible = !this.isVisible;  // Toggle the visibility of the details view
      },
      downloadBusinessPermit() {
        // Logic to download or display the business permit
        console.log('Downloading business permit...');
      }
    }
  };
  </script>
  
  <style>
  </style>
  