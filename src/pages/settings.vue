<template>
    <div class="w-screen h-screen flex" >
      <div>
        <Sidebar />
      </div>
      <div class="w-full h-full bg-gray-100">
        <HeadeR />
        <Addsp/>
      </div>
    </div>
    </template>

    <script>
import Sidebar from '@/components/sidebar.vue';
import HeadeR from '@/components/header.vue';
import Addsp from '@/components/addsp.vue';

    export default{
        name: 'SettingsPage',
        components: {
            Sidebar,
            HeadeR,
            Addsp
    }
    };
    </script>
    
    <style>
    
    </style>