\<template>
    <div class="bg-white rounded-lg p-5 flex justify-between items-center w-full">
        <div class="flex flex-col items-start">
        <p class="text-4xl font-medium text-custom-orange">{{ totalServiceprovider }}</p>
        <h3 class="mt-1">Total Service Providers</h3>
      </div>
      <font-awesome-icon icon="hand-holding-heart" size="3x" class="text-custom-yellow" />
    </div>
  </template>
  
  <script> 
  export default {
    name: 'totalServiceprovider',
    props: {
      totalServiceprovider: {
        type: Number,
        required: true
      }
    }
  };
  </script>
  
  <style>
  </style>
  