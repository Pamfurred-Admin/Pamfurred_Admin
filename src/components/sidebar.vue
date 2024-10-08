<template>
  <aside class="w-64 bg-white shadow h-screen flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-md" style="height: 80px;">
        <img src="@/assets/img/PamfurredLogo.png" alt="Pamfurred Logo" class="h-10" />
      </div>   
      <nav class="mt-5">
        <ul>
          <router-link
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            class="flex items-center py-2 px-6 text-gray-600 justify-start text-left"
            :class="{ 'text-custom-orange': isActiveRoute(item.path) }"
          >
            <font-awesome-icon :icon="item.icon" class="sidetext" />
            <span class="menu-item-text">{{ item.name }}</span>
          </router-link>
        </ul>
      </nav>
    </div>
    <div class="p-5 border-t border-gray-400">
      <button @click="handleLogout" class="w-full py-2 px-10 flex items-center text-custom-logout">
        <font-awesome-icon icon="sign-out-alt" class="mr-4" />
        Log out
      </button>
    </div>
  </aside>
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
      router.push('/');
    };

    return {
      isActiveRoute,
      handleLogout,
      menuItems: [
        { name: 'Dashboard', path: '/dashboard', icon: 'house' },
        { name: 'Service Providers', path: '/serviceprovider', icon: 'hand-holding-heart' },
        { name: 'Pet Owners', path: '/petowners', icon: 'user' },
        { name: 'Settings', path: '/settings', icon: 'cog' }
      ]
    };
  }
};
</script>

<style scoped>
</style>