<template>
  <div class="p-5 pt-2 pb-10 bg-white rounded-lg shadow-md w-full mx-auto">
    <div class="relative h-72 bg-white p-4 w-full">
      <div class="flex justify-between items-center mb-5">
        <h2 class="text-2xl font-semibold">Revenue Overview</h2>
        <select class="rounded-md p-3 outline-none">
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
      <canvas ref="revenueChartRef" class="w-full h-full"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'RevenueOverview',
  setup() {
    const chartInstance = ref(null);
    const revenueChartRef = ref(null);

    const renderChart = () => {
      const ctx = revenueChartRef.value?.getContext('2d');

      if (!ctx) {
        console.error("Canvas context not found");
        return;
      }

      // Destroy the previous chart instance if it exists
      chartInstance.value?.destroy();

      // Instantiate the chart
      chartInstance.value = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Revenue',
              data: [0, 250, 500, 750, 1000, 750, 750, 750, 750, 1000, 1250, 1300],
              borderColor: '#D14C01',
              borderWidth: 2,
              backgroundColor: 'rgba(209, 76, 1, 0.2)', // Optional: Fill under the line
              fill: true,
              pointBackgroundColor: '#D14C01',
              pointBorderColor: '#D14C01',
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
                text: 'Revenue',
                font: { size: 16, weight: 'bold' },
                color: 'black',
                padding: { top: 10, bottom: 20 },
              },
              beginAtZero: true,
            },
          },
        },
      });
    };

    onMounted(async () => {
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

    return { revenueChartRef };
  },
};
</script>

<style scoped>
</style>
