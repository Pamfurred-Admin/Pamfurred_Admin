<template>
  <div class="w-screen h-screen flex">
    <Sidebar />
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
import { supabase } from '@/supabase/supabase';

export default {
  name: 'UpdatePetOwners',
  components: {
    Sidebar,
    HeadeR,
    Editpo,
  },
  data() {
    return {
      user: null,
      userId: this.$route.query.id, 
    };
  },
  async mounted() {
    const { data, error } = await supabase
      .from('users') 
      .select('*')
      .eq('user_id', this.userId)
      .single();

    if (error) {
      console.error('Error fetching user:', error);
    } else {
      this.user = data; 
    }
  }
};
</script>

<style></style>
