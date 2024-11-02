<template>
  <!-- Chart Area -->
  <div class="pt-10 flex-1 bg-white rounded-lg shadow-md p-4 h-96">
    <!-- Chart Canvas -->
    <canvas ref="revenueChartRef" class="w-full h-full"></canvas>
  </div>
  <!-- Sidebar Area for Service Providers -->
  <div class="w-64 bg-gray-50 rounded-lg shadow-md p-5 h-96">
    <h3 class="text-xl font-semibold mb-6">Service Providers</h3>
    <ul class="space-y-4">
      <li class="flex items-start">
        <img src="https://via.placeholder.com/40" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
        <div class="text-left whitespace-nowrap">
          <p class="text-gray-900 font-semibold truncate" style="max-width: 140px;">Paws and Claws</p>
          <p class="text-gray-500 text-sm">2 hrs</p>
        </div>
      </li>
      <li class="flex items-start">
        <img src="https://via.placeholder.com/40" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
        <div class="text-left whitespace-nowrap">
          <p class="text-gray-900 font-semibold truncate" style="max-width: 140px;">Groomers on the Go</p>
          <p class="text-gray-500 text-sm">3 hrs</p>
        </div>
      </li>
      <li class="flex items-start">
        <img src="https://via.placeholder.com/40" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
        <div class="text-left whitespace-nowrap">
          <p class="text-gray-900 font-semibold truncate" style="max-width: 140px;">Fur Care Veterinary</p>
          <p class="text-gray-500 text-sm">3 hrs</p>
        </div>
      </li>
      <li class="flex items-start">
        <img src="https://via.placeholder.com/40" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
        <div class="text-left whitespace-nowrap">
          <p class="text-gray-900 font-semibold truncate" style="max-width: 140px;">Purrfect Furs Pet Grooming</p>
          <p class="text-gray-500 text-sm">2 hrs</p>
        </div>
      </li>
    </ul>
    <router-link to="/serviceprovider" class="inline-block mt-5 bg-custom-viewmore text-black font-medium rounded-md py-1.5 px-4 text-sm hover:bg-custom-pencil text-center">
      View more</router-link>
  </div>
</template>

  
  <script>
  import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'LinecurvewithSP',
    setup() {
      const chartInstance = ref(null);
      const revenueChartRef = ref(null);
  
      const renderChart = () => {
        const ctx = revenueChartRef.value?.getContext('2d');
        console.log("Canvas context:", ctx); // Debugging statement
        if (!ctx) {
          console.error("Canvas context not found");
          return;
        }
  
        if (chartInstance.value) {
          chartInstance.value.destroy();
        }
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
                backgroundColor: 'rgba(217, 119, 6, 0.3)',
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
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Month',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                  color: 'black',
                  padding: { top: 20, bottom: 20 },
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Count',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
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
        await nextTick(); // Ensures DOM is fully updated
        renderChart();
      });
  
      onBeforeUnmount(() => {
        if (chartInstance.value) {
          chartInstance.value.destroy();
        }
      });
  
      return {
        revenueChartRef,
      };
    },
  };
  </script>
  
  <style></style>
  