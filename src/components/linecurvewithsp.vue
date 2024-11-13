<template>
  <div class="pt-10 flex-1 bg-white rounded-lg shadow-md p-4 h-96">
    <canvas ref="lineChartRef" class="w-full h-full"></canvas>
  </div>
  <div class="w-64 bg-white rounded-lg shadow-md p-5 h-96">
    <h3 class="text-xl font-semibold mb-4">Service Providers</h3>
    <ul class="space-y-4">
      <li 
        class="flex items-start hover:bg-gray-300 rounded-md p-1" 
        v-for="provider in providers.slice(0, 4)" :key="provider.sp_id"
      >
        <img :src="provider.image" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
        <div class="text-left whitespace-nowrap">
          <p class="text-gray-900 font-semibold truncate" style="max-width: 140px;">{{ provider.name }}</p>
          <p class="text-gray-500 text-sm">Daily Pet Limit: {{ provider.number_of_pets }}</p>
        </div>
      </li>
    </ul>
    <router-link to="/serviceprovider" 
      class="inline-block mt-4 bg-custom-viewmore text-black font-medium rounded-md py-1.5 px-4 text-sm hover:bg-custom-pencil text-center">
      View more
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { supabase } from '@/supabase/supabase';
import Chart from 'chart.js/auto';

export default {
  name: 'LinecurvewithSP',
  setup() {
    const chartInstance = ref(null);
    const lineChartRef = ref(null);
    
    const providers = ref([]);
    const monthlyCounts = ref([]);

    // Fetch service provider data and service provider counts
    const fetchServiceProviders = async () => {
      const { data: providersData, error: providersError } = await supabase
        .rpc('get_service_providers');
      if (providersError) {
        console.error('Error fetching service providers:', providersError);
        return;
      }
      providers.value = providersData;
    };

    // Fetch counts of service providers for each month
    const fetchProviderCounts = async () => {
      const { data: countsData, error: countsError } = await supabase
        .rpc('get_service_provider_counts'); // Update with your actual function name if different
      if (countsError) {
        console.error('Error fetching provider counts:', countsError);
        return;
      }
      monthlyCounts.value = countsData; // Assuming countsData is an array of counts
    };

    // Render the chart
    const renderChart = () => {
      const ctx = lineChartRef.value?.getContext('2d');
      if (!ctx) {
        console.error("Canvas context not found");
        return;
      }
  
      chartInstance.value?.destroy();

      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#D14C01');
      gradient.addColorStop(0.6, '#C1C1C1');
      gradient.addColorStop(1, '#C1C1C1');

      // Make sure monthlyCounts has the data before rendering the chart
      chartInstance.value = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Service Provider Counts',
              data: monthlyCounts.value.length > 0 ? monthlyCounts.value : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // fallback if no data
              borderColor: '#D97706',
              borderWidth: 2,
              backgroundColor: gradient,
              fill: true,
              pointBackgroundColor: '#D97706',
              pointBorderColor: '#D97706',
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month',
                font: { size: 16, weight: 'bold' },
                color: 'black',
                padding: { top: 20, bottom: 20 },
              },
            },
            y: {
              title: {
                display: true,
                text: 'Count',
                font: { size: 16, weight: 'bold' },
                color: 'black',
                padding: { top: 10, bottom: 15 },
              },
              beginAtZero: true,
            },
          },
        },
      });
    };

    onMounted(async () => {
      await fetchServiceProviders();
      await fetchProviderCounts(); // Fetch the provider counts
      await nextTick();
      renderChart(); // Render chart after data is fetched
    });

    onBeforeUnmount(() => {
      if (chartInstance.value) {
        chartInstance.value.destroy();
        chartInstance.value = null;
      }
    });

    return { lineChartRef, providers };
  },
};
</script>

<style scoped>
</style>