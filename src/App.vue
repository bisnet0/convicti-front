<template>
  <div id="app">
    <!-- SignIn Component -->
    <SignIn />
  </div>
</template>

<script>
// Importing the SignIn component
import SignIn from './views/SignIn.vue';

export default {
  name: 'App',
  components: {
    SignIn,
  },
};
</script>

<style>
/* Global Styles */
#app {
  text-align: start;
  color: #2c3e50;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  margin: 0;
}
</style>
