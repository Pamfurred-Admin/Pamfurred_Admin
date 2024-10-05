<template>
    <div class="w-screen h-screen flex" >
      <div>
        <Sidebar />
      </div>
      <div class="w-full h-full bg-gray-100">
        <HeadeR />
      </div>
    </div>
    </template>
    <script>
    import Sidebar from '@/components/sidebar.vue';
    import HeadeR from '@/components/header.vue';
    
        export default{
            name: 'ServiceProviderPage',
            components: {
                Sidebar,
                HeadeR
        }
        };
        </script>
        
        <style>
        
        </style>