<template>
  <div class="bg-white shadow rounded-md p-6 mb-6">
    <h2 class="text-2xl font-semibold mb-4 text-center">Pending Registrations</h2>
    <div v-if="displayedRegistrations.length" class="text-xl text-left text-gray-900">
      <div v-for="(registration, index) in displayedRegistrations" :key="index" class="mb-4">
        <p class="pl-5 pb-2"><strong>Service Provider ID:</strong> {{ registration.sp_id }}</p>
        <p class="pl-5 pb-2"><strong>Business Owner Name:</strong> {{ registration.name }}</p>
        <p class="pl-5 pb-2"><strong>Business Email Address:</strong> {{ registration.email }}</p>
        <p class="pl-5 pb-2"><strong>Contact Number:</strong> {{ registration.phone_number }}</p>
      </div>
    </div>
    <div v-else class="text-xl text-left text-gray-900">
      <p>No pending registrations.</p>
    </div>
    
    <!-- View More Button -->
<div v-if="hasMore" class="text-center mt-4">
  <button @click="loadMore" class="inline-block mt-4 bg-custom-viewmore text-black font-medium rounded-md py-1.5 px-4 text-sm hover:bg-custom-pencil text-center">
    View More
  </button>
</div>

  </div>
</template>

<script>
import { supabase } from '@/supabase/supabase'

export default {
  name: 'PendingRegistration',
  data() {
    return {
      pendingRegistrations: [],
      displayedCount: 1, // Limit to show 1 registration initially
      displayedRegistrations: [],
    };
  },
  computed: {
    hasMore() {
      return this.pendingRegistrations.length > this.displayedCount;
    },
  },
  async created() {
    await this.fetchPendingRegistrations();
    this.updateDisplayedRegistrations();
  },
  methods: {
    async fetchPendingRegistrations() {
      try {
        const { data, error } = await supabase.rpc('get_pending_registrations');
        if (error) {
          console.error('Error fetching pending registrations:', error.message);
        } else {
          this.pendingRegistrations = data;
        }
      } catch (error) {
        console.error('Error calling Supabase function:', error);
      }
    },
    updateDisplayedRegistrations() {
      this.displayedRegistrations = this.pendingRegistrations.slice(0, this.displayedCount);
    },
    loadMore() {
      this.displayedCount += 1; // Show 1 more item each time
      this.updateDisplayedRegistrations();
    },
  },
};
</script>

<style scoped>

</style>
