<template>
    <div>
      <h3>Total Pet Owners</h3>
      <p>{{ totalPetowners }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'totalPetowners',
    props: {
      totalPetowners: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  