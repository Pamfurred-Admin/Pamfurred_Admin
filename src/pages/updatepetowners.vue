<template>
  <div class="w-screen h-screen flex">
    <div>
      <Sidebar />
    </div>
    <div class="w-full h-full bg-gray-100 overflow-y-auto">
      <HeadeR />
      <div>
        <Editpo :existingUser="user" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import HeadeR from '@/components/header.vue';
import Editpo from '@/components/editpo.vue';

export default {
  name: 'UpdatePetOwners',
  components: {
    Sidebar,
    HeadeR,
    Editpo,
  },
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.user = {
      id: this.$route.query.id || '',
      fullName: this.$route.query.fullName || '',
      doorNo: this.$route.query.doorNo || '',
      email: this.$route.query.email || ''
    };
  }
};
</script>

<style></style>
