<template>
  <div class="w-64 bg-white shadow h-screen flex flex-col justify-between">
    <div>
      <div class="p-5 border-b border-gray-200 shadow-md">
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
    </div>
    <div class="p-5">
      <button @click="handleLogout" class="w-full py-2 px-6 flex items-center text-custom-logout">Log out</button>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'SideBar',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isActiveRoute = (path) => route.path === path;

    const handleLogout = () => {
      localStorage.removeItem('token');
      router.push('/login');
    };

    return {
      isActiveRoute,
      handleLogout,
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
</style>
