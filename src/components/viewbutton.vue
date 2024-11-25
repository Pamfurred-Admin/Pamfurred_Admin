<template>
  <button
    class="bg-blue-700 text-white font-medium py-2 px-2 rounded-md hover:bg-blue-900 focus:outline-none"
    @click="toggleView"
  >View</button>

  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
    <div class="bg-white p-8 rounded-md shadow-lg w-1/3">
      <h2 class="text-xl font-semibold mb-4">Provider Details</h2>
      <div v-if="user" class="space-y-4 text-left">
        <p><strong>Business Owner First Name:</strong> {{ user.first_name }}</p>
        <p><strong>Business Owner Last Name:</strong> {{ user.last_name }}</p>
        <p><strong>Establishment Name:</strong> {{ provider.name }}</p>
        <p><strong>Business Email:</strong> {{ provider.email }}</p>
        <p><strong>Phone Number:</strong> {{ user.phone_number }}</p>
        <p><strong>Approval Status:</strong> {{ provider.approval_status }}</p>
        <div>
          <strong>Business Permit:</strong>
          <div class="flex items-center">
            <button @click="downloadBusinessPermit" class="text-blue-600 hover:text-blue-800">Download Permit</button>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-red-500">
        <p>Loading user details...</p>
      </div>
      <div class="mt-4">
        <button @click="toggleView" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/supabase/supabase'

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
      user: null // Data to hold the user details
    };
  },
  methods: {
    toggleView() {
      this.isVisible = !this.isVisible; // Toggle modal visibility
      if (this.isVisible) {
        this.fetchUserDetails(); // Fetch user details when modal is opened
      }
    },
    async fetchUserDetails() {
      try {
        const { data, error } = await supabase
          .rpc('get_pending_users') // Call the stored function
          .single();

        if (error) {
          console.error("Error fetching user details:", error);
        } else {
          this.user = data; // Assign the fetched data to user
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    downloadBusinessPermit() {
      // Assuming `sp_business_permit` is a full URL or path to a public file
      const fileUrl = this.provider.sp_business_permit;

      if (fileUrl) {
        // Create an anchor element to download the file
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = ''; // Optional: Leave blank to use the original filename
        link.target = '_blank'; // Opens in a new tab for safety
        link.click(); // Programmatically trigger the download
      } else {
        console.error('No valid file URL found.');
      }
    }
  }
};
</script>

<style scoped>
</style>
