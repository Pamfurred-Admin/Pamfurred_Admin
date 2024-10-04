<template>
    <div class="w-screen h-screen flex" >
      <div>
        <Sidebar />
      </div>
      <div class="w-full h-full bg-gray-100">
        Settings
      </div>
    </div>
    </template>

    <script>
import Sidebar from '@/components/sidebar.vue';

    export default{
        name: 'SettingsPage',
        components: {
            Sidebar
    }
    };
    </script>
    
    <style>
    
    </style>