<template>
  <div class="w-screen h-screen flex">
    <div>
      <Sidebar />
    </div>
    <div class="w-full h-full bg-gray-100 overflow-y-auto">
      <HeadeR />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1 p-4">
        <router-link to="/serviceprovider" class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-transform transform hover:scale-105">
          <totalServiceprovider/>
        </router-link>
        <router-link to="/petowners" class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-transform transform hover:scale-105">
          <totalPetowners/>
        </router-link>
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-transform transform hover:scale-105">
          <totalAppointments/>
        </div>
      </div>
      <div class="p-4 pt-1">
        <router-link to="/serviceproviderregistrations" class="block border-gray-200 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-104">
          <Pendingregistration />
        </router-link>
        <revenueoverview/>
        <div class="pt-5 flex gap-4">
          <linecurvewithsp/>
        </div>
        <div class="pt-5 flex gap-4">
          <bargraphwithpo/>
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
import Pendingregistration from '@/components/pendingregistration.vue';
import revenueoverview from '@/components/revenueoverview.vue';
import linecurvewithsp from '@/components/linecurvewithsp.vue';
import bargraphwithpo from '@/components/bargraphwithpo.vue';

export default {
  name: 'DashboardPage',
  components: {
    Sidebar,
    HeadeR,
    totalPetowners,
    totalAppointments,
    totalServiceprovider,
    Pendingregistration,
    revenueoverview,
    linecurvewithsp,
    bargraphwithpo
  }
};
</script>

<style>
</style>
