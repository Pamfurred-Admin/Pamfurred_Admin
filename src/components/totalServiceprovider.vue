<template>
  <div class="bg-white rounded-lg p-5 flex justify-between items-center w-full">
    <div class="flex flex-col items-start">
      <p class="text-4xl font-medium text-custom-orange">{{ totalServiceProvider }}</p>
      <h3 class="mt-1">Total Service Providers</h3>
    </div>
    <font-awesome-icon icon="hand-holding-heart" size="3x" class="text-custom-yellow" />
  </div>
</template>

<script>
import { supabase } from '@/supabase/supabase'; // Import your Supabase instance

export default {
  name: 'TotalServiceProvider',
  data() {
    return {
      totalServiceProvider: 0, // Initialize with 0 or a placeholder
    };
  },
  async created() {
    await this.fetchTotalServiceProviders(); // Fetch the data when the component is created
  },
  methods: {
    async fetchTotalServiceProviders() {
      const { data, error } = await supabase.rpc('get_total_service_providers');
      
      if (error) {
        console.error('Error fetching total service providers:', error);
      } else {
        this.totalServiceProvider = data;
      }
    }
  }
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
