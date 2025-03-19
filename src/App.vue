<template>
  <div id="app">
    <!-- This is where the route will dynamically load the correct component -->
    <router-view />
  </div>
</template>

<script>
// No need to import components here anymore, Vue Router will handle that
export default {
  name: 'App',
};
</script>

<style>
Global Styles #app {
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
