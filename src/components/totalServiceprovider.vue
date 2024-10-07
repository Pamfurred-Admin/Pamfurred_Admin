\<template>
    <div class="bg-white rounded-lg shadow p-5 flex items-center">
      <div class="ml-4">
        <p class="totalnum">{{ totalServiceprovider }}</p>
        <h3>Total Service Providers 
            <font-awesome-icon icon="hand-holding-heart" size="2x" />
        </h3>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  export default {
    name: 'totalServiceprovider',
    components: {
      FontAwesomeIcon
    },
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
  