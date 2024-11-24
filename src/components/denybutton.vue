<template>
    <button
      @click="denyAction"
      class="bg-red-700 text-white font-medium py-2 px-2 rounded-md hover:bg-red-900 focus:outline-none">
      Deny
    </button>
    <div v-if="showDeleteModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-md text-center z-20">
          <p class="text-lg font-semibold">Are you sure you want to accept this provider?</p>
          <div class="flex justify-center mt-6">
            <button @click="closeDeleteModal" class="px-4 py-2 bg-gray-300 rounded-md mr-4">Cancel</button>
            <button @click="confirmAccept" class="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900">Confirm</button>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'DenyButton',
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    methods: {
      denyAction() {
        // Emit an event with the user data to notify the parent
        this.$emit('deny', this.user);
      },
    },
  };
  </script>
  
  <style></style>
  