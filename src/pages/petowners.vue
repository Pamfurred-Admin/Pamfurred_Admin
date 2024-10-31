<template>
    <div class="w-screen h-screen flex" >
      <div>
        <Sidebar />
      </div>
      <div class="w-full h-full bg-gray-100 overflow-y-auto">
        <HeadeR />
        <div>
        <Petownerslist />
        </div>
      </div>
    </div>
    </template>
    <script>
    import Sidebar from '@/components/sidebar.vue';
    import HeadeR from '@/components/header.vue';
    import Petownerslist from '@/components/petownerslist.vue';
    
        export default{
            name: 'PetownerPage',
            components: {
                Sidebar,
                HeadeR,
                Petownerslist
        }
        };
        </script>
        
        <style>
        </style>