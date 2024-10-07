<template>
    <div>
      <h3>Total Appointments</h3>
      <p>{{ totalAppointments }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'totalAppointments',
    props: {
      totalAppointments: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  