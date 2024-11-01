<template>
    <div class="w-screen h-screen flex">
      <div>
        <Sidebar />
      </div>
      <div class="w-full h-full bg-gray-100 overflow-y-auto">
        <HeadeR />
        <div>
          <Editsp :existingUser="user" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/sidebar.vue';
  import HeadeR from '@/components/header.vue';
  import Editsp from '@/components/editsp.vue';
  
  export default {
    name: 'UpdateServiceProvider',
    components: {
      Sidebar,
      HeadeR,
      Editsp,
    },
    data() {
      return {
        user: null
      };
    },
    mounted() {
      this.user = {
        id: this.$route.query.id || '',
        establishmentName: this.$route.query.fullName || '',
        phoneNo: this.$route.query.doorNo || '',
        email: this.$route.query.email || ''
      };
    }
  };
  </script>
  
  <style></style>
  