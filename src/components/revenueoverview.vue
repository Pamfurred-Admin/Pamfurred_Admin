<template>
    <div class="p-5 pt-2 pb-10 bg-white rounded-lg shadow-md w-full mx-auto">
      <div class="relative h-72 bg-white  p-4 w-full">
        <div class="flex justify-between items-center mb-5">
          <h2 class="text-2xl font-semibold">Revenue Overview</h2>
          <select class="rounded-md p-3 outline-none">
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </div>
        
        <canvas id="revenueChart" class="w-full h-full"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'RevenueOverview',
    setup() {
      onMounted(() => {
        const ctx = document.getElementById('revenueChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Revenue',
                data: [0, 250, 500, 750, 1000, 750, 750, 750, 750, 1000, 1250, 1300],
                borderColor: '#D14C01',
                borderWidth: 2,
                fill: false,
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
                text: 'Revenue',
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
      });
    },
  };
  </script>
  
  
  <style scoped>
  </style>
  