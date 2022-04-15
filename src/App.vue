<template>
  <Navbar heading="Car Gallery" />
  <Home />
</template>

<script>
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
document.title = "Car Gallery";
export default {
  name: "App",
  components: {
    Home,
    Navbar,
  },
};
</script>
<style>
</style>
