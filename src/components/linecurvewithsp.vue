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
    const fetchServiceProviders = async () => {
      const { data: providersData, error: providersError } = await supabase
        .rpc('get_service_providers');
      if (providersError) {
        console.error('Error fetching service providers:', providersError);
        return;
      }
      providers.value = providersData;
    };

    const fetchProviderCounts = async () => {
  // Fetch service provider data
  const { data: serviceProviders, error: spError } = await supabase
    .from('service_provider')
    .select('sp_id'); // Get service provider IDs (you can add more fields if needed)

  if (spError) {
    console.error('Error fetching service provider data:', spError);
    return;
  }

  // Fetch user data
  const { data: users, error: userError } = await supabase
    .from('user')
    .select('user_id, created_at') // Get user creation date and user_id
    .in('user_id', serviceProviders.map(sp => sp.sp_id));  // Filter users that match service provider sp_ids

  if (userError) {
    console.error('Error fetching user data:', userError);
    return;
  }

  // Initialize an array to hold counts for each month (12 months)
  const monthCounts = new Array(12).fill(0);

  // Iterate over each user and count service providers by month
  users.forEach(user => {
    const month = new Date(user.created_at).getMonth();  // Get the month (0-11)
    monthCounts[month]++;  // Increment the count for that month
  });

  // Set the monthlyCounts to the reactive variable for your chart
  monthlyCounts.value = monthCounts;
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
