<template>
  <div class="w-64 bg-white rounded-lg shadow-md p-5 h-96">
    <h3 class="text-xl font-semibold mb-3">Pet Owners</h3>
    <ul class="space-y-3">
      <li class="flex items-start hover:bg-gray-300 rounded-md px-2" 
          v-for="(owner, index) in petOwners" :key="index">
        <div class="text-left whitespace-nowrap">
          <p class="text-gray-900 font-semibold truncate">{{ owner.full_name }}</p>
          <p class="text-gray-500 text-sm">{{ owner.username }}</p> 
        </div>
      </li>
    </ul>
    <router-link to="/petowners" 
        class="inline-block mt-2 bg-custom-viewmore text-black font-medium rounded-md py-1.5 px-4 text-sm hover:bg-custom-pencil text-center">
      View more
    </router-link>
  </div>
  <div class="pt-10 flex-1 bg-white rounded-lg shadow-md p-4 h-96">
    <canvas ref="barChartRef" class="w-full h-full"></canvas>
  </div>
</template>

<script>
import { supabase } from '@/supabase/supabase';
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'BargraphwithPO',
  setup() {
    const chartInstance = ref(null);
    const barChartRef = ref([]);
    const petOwners = ref([]);
    const fetchPetOwners = async () => {
      const { data, error } = await supabase.rpc('get_pet_owners'); 

      if (error) {
        console.error("Error fetching pet owners:", error);
      } else {

        petOwners.value = data.map(owner => ({
          full_name: owner.full_name, 
          username: owner.username, 
        })).slice(0, 5);
      }
    };

    const renderChart = () => {
      const ctx = barChartRef.value?.getContext('2d');

      if (!ctx) {
        console.error("Canvas context not found");
        return;
      }

      chartInstance.value?.destroy();

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
                font: { size: 16, weight: 'bold' },
                color: 'black',
                padding: { top: 20, bottom: 10 },
              },
            },
            y: {
              title: {
                display: true,
                text: 'Count',
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
      await fetchPetOwners();
      await nextTick();
      renderChart();
    });

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

<style scoped>
</style>
