<template>
  <div class="w-64 bg-white shadow h-screen">
    <div class="p-5 border-gray shadow-lg">
      <img src="@/assets/img/PamfurredLogo.png" alt="Pamfurred Logo" class="h-10" />
    </div>
    <nav class="mt-5">
      <ul>
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          class="flex items-center py-2 px-6 text-gray-600 hover:bg-orange-100"
          :class="{ 'text-custom-orange': isActiveRoute(item.path) }"
        >
          <i :class="item.icon"></i>
          <span class="ml-4">{{ item.name }}</span>
        </router-link>
      </ul>
    </nav>
    <div class="absolute bottom-0 w-full">
      <button class="py-3 bg-red-500 text-white hover:bg-red-600">Log out</button>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'SideBar',
  setup() {
    const route = useRoute();
    const isActiveRoute = (path) => route.path === path;

    return {
      isActiveRoute,
      menuItems: [
        { name: 'Dashboard', path: '/', icon: 'fas fa-users' },
        { name: 'Service Providers', path: '/serviceprovider', icon: 'fas fa-users' },
        { name: 'Pet Owners', path: '/petowners', icon: 'fas fa-user' },
        { name: 'Settings', path: '/settings', icon: 'fas fa-cog' }
      ]
    };
  }
};
</script>

<style scoped>
/* Add any specific styles for your sidebar here */
</style>
