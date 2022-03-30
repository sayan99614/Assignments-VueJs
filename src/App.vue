<script setup>
// global component navbar
import { createApp } from "vue";
import Navbar from "./components/Navbar.vue";
const app = createApp({});
app.component("NavBar", Navbar);
</script>
<template>
  <Navbar heading="Car Gallery" />
  <Home />
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
</style>
