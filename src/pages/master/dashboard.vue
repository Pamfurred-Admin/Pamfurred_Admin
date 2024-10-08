<template>
  <div class="w-screen h-screen flex">
    <div>
      <Sidebar />
    </div>
    <div class="w-full h-full bg-gray-100">
      <HeadeR />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1 p-4">
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-transform transform hover:scale-105">
          <totalServiceprovider :totalServiceprovider="10" />
        </div>
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-transform transform hover:scale-105">
          <totalPetowners :totalPetowners="27" />
        </div>
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-transform transform hover:scale-105">
          <totalAppointments :totalAppointments="8291" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import HeadeR from '@/components/header.vue';
import totalPetowners from '@/components/totalPetowners.vue';
import totalAppointments from '@/components/totalAppointments.vue';
import totalServiceprovider from '@/components/totalServiceprovider.vue';

export default {
  name: 'DashboardPage',
  components: {
    Sidebar,
    HeadeR,
    totalPetowners,
    totalAppointments,
    totalServiceprovider
  }
};
</script>

<style>
</style>
