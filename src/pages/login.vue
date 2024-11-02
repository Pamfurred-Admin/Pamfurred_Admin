<template>
  <div class="login-container">
    <img src="@/assets/img/PamfurredLogo.png" alt="Pamfurred Logo" class="logo" />
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="input-group">
        <font-awesome-icon icon="user" class="icon" />
        <input 
          type="text" 
          placeholder="Username" 
          v-model="username" 
          required 
          aria-label="Username" 
        />
      </div>
      <div class="input-group">
        <font-awesome-icon icon="key" class="icon" />
        <input 
          :type="passwordVisible ? 'text' : 'password'" 
          placeholder="Password" 
          v-model="password" 
          required 
          aria-label="Password" 
        />
        <button type="button" @click="togglePasswordVisibility">
    
  </button>
      </div>
      <a href="#" class="forgot-password">Forgot password?</a>
      <button type="submit" class="login-button" :disabled="loading">
        <span v-if="loading">Logging in...</span>
        <span v-else>Login</span>
      </button>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div> <!-- Error message -->
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase/supabase';


export default {
  name: 'LogIn',
  setup() {
    const username = ref(''); // Username field
    const password = ref(''); // Password field
    const loading = ref(false); // Loading state
    const errorMessage = ref(''); // Error message state
    const passwordVisible = ref(false); // Password visibility toggle
    const router = useRouter();

    const handleLogin = async () => {
  errorMessage.value = ''; // Reset error message
  loading.value = true; // Start loading

  // Validate input
  if (!username.value || !password.value) {
    errorMessage.value = 'Please enter username and password.'; // Validation message
    loading.value = false; // Stop loading
    return;
  }

  // Call the check_admin_password function
  const { data: admin, error } = await supabase
    .rpc('check_admin_password', { p_username: username.value, p_password: password.value });

  if (error || !admin || admin.length === 0) {
    errorMessage.value = 'Invalid username or password.'; // Error handling
    loading.value = false; // Stop loading
    return;
  }

  // Login successful
  localStorage.setItem('adminId', admin[0].admin_id); // Store admin ID
  router.push('/dashboard'); // Redirect to the dashboard
  loading.value = false; // Stop loading
};



    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value; // Toggle visibility
    };

    return {
      username,
      password,
      handleLogin,
      loading,
      errorMessage,
      togglePasswordVisibility,
      passwordVisible,
    };
  },
};
</script>

<style>
.error-message {
  color: red; /* Style for error messages */
}
</style>
