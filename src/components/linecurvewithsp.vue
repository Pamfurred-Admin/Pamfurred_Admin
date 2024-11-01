<template>
    <div class="p-6 bg-gray-100 rounded-lg shadow-md w-full mx-auto flex gap-4">
      <!-- Chart Area -->
      <div class="flex-1 bg-white rounded-lg shadow-inner p-4 h-96">
        <!-- Title and Year Selector -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-blue-900">Revenue Overview</h2>
          <select class="rounded-md p-2 outline-none">
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </div>
        <!-- Chart Canvas -->
        <canvas id="revenueChart2" class="w-full h-full"></canvas>
      </div>
      <!-- Sidebar Area for Service Providers -->
      <div class="w-64 bg-gray-50 rounded-lg shadow-md p-4 h-96">
        <h3 class="text-lg font-semibold text-blue-900 mb-4">Service Providers</h3>
        <ul class="space-y-4">
          <li class="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
            <div>
              <p class="text-gray-900 font-semibold">Paws and Claws</p>
              <p class="text-gray-500 text-sm">2 hrs</p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
            <div>
              <p class="text-gray-900 font-semibold">Groomers on Wheels</p>
              <p class="text-gray-500 text-sm">3 hrs</p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
            <div>
              <p class="text-gray-900 font-semibold">Furcare Vet Services</p>
              <p class="text-gray-500 text-sm">3 hrs</p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Provider Logo" class="w-10 h-10 rounded-full mr-3">
            <div>
              <p class="text-gray-900 font-semibold">Purrfect Fur Spa</p>
              <p class="text-gray-500 text-sm">2 hrs</p>
            </div>
          </li>
        </ul>
        <button class="mt-4 w-full bg-orange-500 text-white rounded-md py-2 hover:bg-orange-600">View more</button>
      </div>
    </div>
  </template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'ChartWithServiceProvider',
  setup() {
    const chartInstance = ref(null);

    const renderChart = () => {
      const ctx = document.getElementById('revenueChart2').getContext('2d');
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
              data: [800, 1100, 950, 1200, 900, 1050, 1000, 950, 1050, 1100, 1150, 900],
              borderColor: '#D97706',
              borderWidth: 2,
              backgroundColor: 'rgba(217, 119, 6, 0.3)', // Gradient color for fill
              fill: true,
              pointBackgroundColor: '#D97706',
              pointBorderColor: '#D97706',
              tension: 0.4, // Smooth the line curve
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
                color: 'black', // Set text color to black
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
                color: 'black', // Set text color to black
                padding: { top: 10, bottom: 20 },
              },
              beginAtZero: true,
            },
          },
        },
      });
    };

    onMounted(() => {
      renderChart();
    });

    onBeforeUnmount(() => {
      if (chartInstance.value) {
        chartInstance.value.destroy();
      }
    });

    return {};
  },
};
</script>

<style></style>