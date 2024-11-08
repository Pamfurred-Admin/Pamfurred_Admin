\<template>
    <div class="bg-white rounded-lg p-5 flex justify-between items-center w-full">
        <div class="flex flex-col items-start">
        <p class="text-4xl font-medium text-custom-orange">{{ totalAppointments }}</p>
        <h3 class="mt-1">Total Appointments</h3>
      </div>
      <font-awesome-icon icon="calendar-day" size="3x" class="text-custom-yellow" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { supabase } from '@/supabase/supabase';

  export default {
    name: 'totalAppointments',
    setup() {
    const totalAppointments = ref(0); 
    const fetchTotalAppointments = async () => {
      const { data, error } = await supabase.rpc('get_total_appointments'); 

      if (error) {
        console.error('Error fetching total pet owners:', error);
      } else {
        totalAppointments.value = data; 
      }
    };

    onMounted(() => {
      fetchTotalAppointments();
    });

    return { totalAppointments };  
  }
}
  </script>
  