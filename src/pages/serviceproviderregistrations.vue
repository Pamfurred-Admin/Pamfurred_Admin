<template>
    <div class="w-screen h-screen flex" >
      <div>
        <Sidebar />
      </div>
      <div class="w-full h-full bg-gray-100 overflow-y-auto">
        <HeadeR />
        <div>
        <Registrationlistsp />
        </div>
      </div>
    </div>
    </template>

    <script>
import Sidebar from '@/components/sidebar.vue';
import HeadeR from '@/components/header.vue';
import Registrationlistsp from '@/components/registrationlistsp.vue';

    export default{
        name: 'ServiceProviderRegistrations',
        components: {
            Sidebar,
            HeadeR,
            Registrationlistsp
    }
    };
    </script>
    
    <style>
    
    </style>