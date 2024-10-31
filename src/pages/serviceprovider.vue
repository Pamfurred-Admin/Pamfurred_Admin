<template>
    <div class="w-screen h-screen flex" >
      <div>
        <Sidebar />
      </div>
      <div class="w-full h-full bg-gray-100 overflow-y-auto">
        <HeadeR />
        <div>
        <Serviceproviderlist />
        </div>
      </div>
    </div>
    </template>

    <script>
    import Sidebar from '@/components/sidebar.vue';
    import HeadeR from '@/components/header.vue';
    import Serviceproviderlist from '@/components/serviceproviderlist.vue';

    export default{
        name: 'ServiceProviderPage',
        components: {
            Sidebar,
            HeadeR,
            Serviceproviderlist
    }
    };
    </script>
    
    <style>
    
    </style>