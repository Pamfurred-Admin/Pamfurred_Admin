<template>
    <header class="flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-bottom" style="height: 80px;">
      <div class="flex items-center">
        <h1 class="text-2xl font-bold m-0 p-0 ml-6">{{ pageTitle }}</h1>
      </div>
      <div class="flex items-center">
        <div class="searchBar">
          <font-awesome-icon icon="magnifying-glass" class="icon"/>
          <input type="search" placeholder="Search for something" class="searchInput"/>
        </div>
      <img src="@/assets/img/Profile.jpg" alt="Profile Logo" class="profile-logo ml-4 rounded-full" />
      </div>
    </header>      
  </template>
  
  <script> 
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'HeadeR',
    setup() {
      const route = useRoute();
  
      const pageNames = {
        '/dashboard': 'Dashboard',
        '/serviceprovider': 'Service Providers',
        '/petowners': 'Pet Owners',
        '/settings': 'Settings',
        '/addpetowners': 'Add Pet Owners',
        '/addserviceprovider': 'Add Service Provider',
        '/updatepetowners': 'Update Pet Owners',
        '/updateserviceprovider': 'Update Service Provider',
        '/serviceproviderregistrations': 'Pending Registrations',
      };
  
      const pageTitle = computed(() => pageNames[route.path] || '');
  
      return {
        pageTitle
      };
    }
  };
  </script>
  
  <style>
  </style>
  