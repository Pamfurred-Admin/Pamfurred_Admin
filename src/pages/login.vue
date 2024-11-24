<template>
  <div class="login-container">
    <img src="@/assets/img/PamfurredLogo.png" alt="Pamfurred Logo" class="logo" />
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="input-group">
        <font-awesome-icon icon="user" class="icon" />
        <input 
          type="email" 
          placeholder="Email" 
          v-model="email" 
          required 
          aria-label="Email" 
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
      </div>
      <a href="#" class="forgot-password">Forgot password?</a>
      <button type="submit" class="login-button" :disabled="loading">
        <span v-if="loading">Logging in...</span>
        <span v-else>Login</span>
      </button>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
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
    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const errorMessage = ref('');
    const passwordVisible = ref(false);
    const router = useRouter();

    const handleLogin = async () => {
      errorMessage.value = '';
      loading.value = true;

      // Validate input
      if (!email.value || !password.value) {
        errorMessage.value = 'Please enter email and password.';
        loading.value = false;
        return;
      }

      // Supabase auth login
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });

      if (error) {
  console.error('Login Error:', error.message);  // Log the actual error message
  errorMessage.value = 'Invalid email or password.';
  loading.value = false;
  return;
}


      if (user) {
        // Login successful, redirect without setting local session
        router.push('/dashboard');
      }
      loading.value = false;
    };

    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    return {
      email,
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

<style></style>
