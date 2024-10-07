<template>
  <div class="login-container">
    <img src="@/assets/img/PamfurredLogo.png" alt="Pamfurred Logo" class="logo" />
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="input-group">
        <font-awesome-icon icon="user" class="icon"/>
        <input type="text" placeholder="Username" v-model="Username" />
      </div>
      <div class="input-group">
        <font-awesome-icon icon="key" class="icon"/>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <a href="#" class="forgot-password">Forgot password?</a>
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LogIn',
  setup() {
    const Username = ref('');
    const password = ref('');
    const router = useRouter();

    if (localStorage.getItem('token')){
      router.push('/');
    }
    
    const handleLogin = async (event) => {
      event.preventDefault();
      if (Username.value === 'admin' && password.value === 'admin') {
        localStorage.setItem('token', 'authenticated');
        router.push('/dashboard');
      } else {
        alert('Invalid Login Credentials');
      }
    };
    
    return {
      Username,
      password,
      handleLogin,
    };
  },
};
</script>

<style>
</style>