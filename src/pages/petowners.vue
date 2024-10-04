<template>
    <div class="w-screen h-screen flex" >
      <div>
        <Sidebar />
      </div>
      <div class="w-full h-full bg-gray-100">
        Pet Owners
      </div>
    </div>
    </template>
    <script>
    import Sidebar from '@/components/sidebar.vue';
    
        export default{
            name: 'ServiceProviderPage',
            components: {
                Sidebar
        }
        };
        </script>
        
        <style>
        
        </style>