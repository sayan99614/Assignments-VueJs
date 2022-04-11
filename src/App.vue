<template>
  <Navbar heading="Car Gallery" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
document.title = "Cars Gallery";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
