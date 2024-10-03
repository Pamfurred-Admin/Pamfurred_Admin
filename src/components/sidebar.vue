<template>
  <div class="w-64 bg-white shadow h-screen" >
      <div class="p-5 border-gray shadow-lg">
      <img src="@/assets/img/PamfurredLogo.png" alt="Pamfurred Logo" class="h-10" />
    </div>
      <nav class="mt-5">
        <ul>
          <li class="flex items-center py-2 px-6 text-custom-orange">
            <span class="ml-4">Dashboard</span>
          </li>
          <li class="flex items-center py-2 px-6 text-gray-600 hover:bg-orange-100">
            <i class="fas fa-users"></i>
            <span class="ml-4">Service Providers</span>
          </li>
          <li class="flex items-center py-2 px-6 text-gray-600 hover:bg-orange-100">
            <i class="fas fa-user"></i>
            <span class="ml-4">Pet Owners</span>
          </li>
          <li class="flex items-center py-2 px-6 text-gray-600 hover:bg-orange-100">
            <i class="fas fa-cog"></i>
            <span class="ml-4">Settings</span>
          </li>
        </ul>
      </nav>
      <div class="absolute bottom-0 w-full">
        <button class=" py-3 bg-red-500 text-white hover:bg-red-600">Log out</button>
      </div>
    </div>
  </template>
  
    
    <script>
    export default{
        name: 'SideBar'

};
    </script>
    
    <style>
    
    </style>