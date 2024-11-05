<template>
  <div class="bg-white rounded-lg p-5 flex justify-between items-center w-full">
    <div class="flex flex-col items-start">
      <p class="text-4xl font-medium text-custom-orange">{{ totalPetowners }}</p>
      <h3 class="mt-1">Total Pet Owners</h3>
    </div>
    <font-awesome-icon icon="user" size="3x" class="text-custom-yellow" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase/supabase';  // Adjust the import path as necessary

export default {
  name: 'TotalPetowners',
  setup() {
    const totalPetowners = ref(0);  // Initialize totalPetowners as a reactive reference

    const fetchTotalPetOwners = async () => {
      const { data, error } = await supabase.rpc('get_total_pet_owners');  // Call the Supabase function

      if (error) {
        console.error('Error fetching total pet owners:', error);
      } else {
        totalPetowners.value = data;  // Set the fetched count to the reactive variable
      }
    };

    onMounted(() => {
      fetchTotalPetOwners();  // Fetch the total number of pet owners when the component mounts
    });

    return { totalPetowners };  // Return the reactive variable for use in the template
  }
}
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
