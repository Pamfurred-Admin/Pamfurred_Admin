<template>
  <!-- Chart Area -->
  <div class="pt-10 flex-1 bg-white rounded-lg shadow-md p-4 h-96">
    <canvas ref="lineChartRef" class="w-full h-full"></canvas>
  </div>
  <!-- Sidebar Area for Service Providers -->
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
          <!-- Removed the time display -->
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
import { supabase } from '@/supabase/supabase'; // Ensure you've imported your Supabase client
import Chart from 'chart.js/auto';

export default {
  name: 'LinecurvewithSP',
  setup() {
    const chartInstance = ref(null);
    const lineChartRef = ref(null);
    
    // Update the ref to hold service providers
    const providers = ref([]);

    // Fetch service providers from the database
    const fetchServiceProviders = async () => {
      const { data, error } = await supabase
        .rpc('get_service_providers'); // Call the stored function
      if (error) {
        console.error('Error fetching service providers:', error);
        return;
      }
      // Populate the providers array with fetched data
      providers.value = data;
    };

    const renderChart = () => {
      const ctx = lineChartRef.value?.getContext('2d');
      if (!ctx) {
        console.error("Canvas context not found");
        return;
      }

      // Destroy the previous chart instance if it exists
      chartInstance.value?.destroy();

      // Create gradient for the line fill
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#D14C01');
      gradient.addColorStop(0.6, '#C1C1C1');
      gradient.addColorStop(1, '#C1C1C1');

      // Instantiate the chart
      chartInstance.value = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Count',
              data: [800, 100, 950, 200, 900, 1050, 200, 950, 1050, 1200, 500, 900],
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
      await fetchServiceProviders(); // Fetch providers when the component mounts
      await nextTick();
      renderChart();
    });

    onBeforeUnmount(() => {
      // Destroy the chart instance on component unmount
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
