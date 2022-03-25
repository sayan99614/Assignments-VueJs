<script setup>
// global component navbar
import { createApp } from "vue";
import Navbar from "./components/Navbar.vue";
const app = createApp({});
app.component("NavBar", Navbar);
</script>


<template>
  <Navbar heading="Car Gallery" />
  <GalleryCard />
</template>

<script>
import GalleryCard from "./components/Gallery-card";
export default {
  name: "App",
  components: {
    GalleryCard,
  },
};
</script>

<style>
</style>
