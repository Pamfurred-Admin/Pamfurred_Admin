<template>
  <div class="flex items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-3xl p-6 bg-transparent overflow-auto h-full pl-20">
      <form @submit.prevent="handleUpdate">
        <div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="firstName">
    First Name
  </label>
  <input
    v-model="form.first_name"
    type="text"
    id="firstName"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="lastName">
    Last Name
  </label>
  <input
    v-model="form.last_name"
    type="text"
    id="lastName"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="email">
    Email Address
  </label>
  <input
    v-model="form.email"
    type="email"
    id="email"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="doorNo">
    Door No.
  </label>
  <input
    v-model="form.floor_unit_room"
    type="text"
    id="doorNo"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="street">
    Street
  </label>
  <input
    v-model="form.street"
    type="text"
    id="street"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="barangay">
    Barangay
  </label>
  <input
    v-model="form.barangay"
    type="text"
    id="barangay"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="city">
    City
  </label>
  <input
    v-model="form.city"
    type="text"
    id="city"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="username">
    Username
  </label>
  <input
    v-model="form.username"
    type="text"
    id="username"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="password">
    Password
  </label>
  <input
    v-model="form.password"
    type="password"
    id="password"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="latitude">
    User Latitude
  </label>
  <input
    v-model="form.latitude"
    type="text"
    id="latitude"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="longitude">
    User Longitude
  </label>
  <input
    v-model="form.longitude"
    type="text"
    id="longitude"
    class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-blue-500"
  />
</div>
        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="bg-custom-red hover:bg-[#872F05] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/supabase/supabase'; // Import your Supabase instance

export default {
  name: 'EditPO',
  props: {
    existingUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: { ...this.existingUser } // Use spread to avoid direct reference
    };
  },
  methods: {
    async handleUpdate() {
      const { error } = await supabase
        .from('users') // Adjust the table name as needed
        .update(this.form)
        .eq('user_id', this.form.user_id); // Assuming you have a user_id field

      if (error) {
        console.error('Error updating user:', error);
      } else {
        console.log('User updated successfully:', this.form);
        this.$router.push({ name: 'PetownersList' }); // Redirect after successful update
      }
    }
  }
};
</script>

<style scoped></style>
