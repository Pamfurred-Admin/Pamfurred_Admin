<template>
    <div class="w-64 bg-gray-50 rounded-lg shadow-md p-5 h-96">
      <h3 class="text-xl font-semibold mb-3">Pet Owners</h3>
      <ul class="space-y-3">
        <li class="flex items-start" v-for="(owner, index) in petOwners" :key="index">
        <div class="text-left whitespace-nowrap">
          <p class="text-gray-900 font-semibold truncate">{{ owner.name }}</p>
          <p class="text-gray-500 text-sm">{{ owner.time }} hrs</p>
        </div>
        </li>
      </ul>
      <router-link to="/petowners" class="inline-block mt-2 bg-custom-viewmore text-black font-medium rounded-md py-1.5 px-4 text-sm hover:bg-custom-pencil text-center">
        View more
      </router-link>
    </div>
    <!-- Chart Area -->
    <div class="pt-10 flex-1 bg-white rounded-lg shadow-md p-4 h-96">
      <canvas ref="barChartRef" class="w-full h-full"></canvas>
    </div>
  </template>
<script>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'BargraphwithPO',
  setup() {
    const chartInstance = ref(null);
    const barChartRef = ref(null);

    // Sample data for pet owners
    const petOwners = ref([
      { name: 'Bob Niño Golosinda', time: 4 },
      { name: 'Aillen Gonzaga', time: 2 },
      { name: 'Lynie Rose Gaa', time: 2 },
      { name: 'Arny Ucab', time: 3 },
      { name: 'Angelito Guibone', time: 5 },
    ]);

    const renderChart = async () => {
      await nextTick(); // Wait for DOM update
      const ctx = barChartRef.value?.getContext('2d');
      
      if (!ctx) {
        console.error("Canvas context not found");
        return;
      }

      if (chartInstance.value) {
        chartInstance.value.destroy();
      }

      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#D14C01');
      gradient.addColorStop(1, '#6B2701');

      chartInstance.value = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Count',
            data: [800, 400, 600, 1500, 300, 1000, 800, 500, 1000, 700, 800, 900],
            backgroundColor: gradient,
            hoverBackgroundColor: '#A03E06',
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
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
                padding: { top: 20, bottom: 10 },
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
                padding: { top: 10, bottom: 20 },
              },
              beginAtZero: true,
            },
          },
        },
      });
    }; 

    onMounted(renderChart);
    onBeforeUnmount(() => {
      if (chartInstance.value) {
        chartInstance.value.destroy();
        chartInstance.value = null;
      }
    });

    return { barChartRef, petOwners };
  },
};
</script>
<style></style>
  