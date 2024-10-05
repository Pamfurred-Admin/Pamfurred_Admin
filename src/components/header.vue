<template>
    <header class="flex justify-between items-center p-4 bg-white shadow-md">
      <div class="flex items-center">
        <h1 class="text-lg font-bold">{{ currentPage }}</h1>
      </div>
      <div class="flex items-center">
        <input type="search" placeholder="Search for something" class="p-2 border rounded-md" />
        <font-awesome-icon icon="user" class="ml-4 text-gray-600" />
      </div>
    </header>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'HeadeR',
    components: {
      FontAwesomeIcon
    },
    setup() {
      const route = useRoute();
  
      const pageNames = {
        '/dashboard': 'Dashboard',
        '/serviceprovider': 'Service Providers',
        '/petowners': 'Pet Owners',
        '/settings': 'Settings'
      };

      const currentPage = computed(() => pageNames[route.path] || '');
  
      return {
        currentPage
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  