<script setup>
// global component navbar
import { createApp } from "vue";
import Navbar from "./components/Navbar.vue";
const app = createApp({});
app.component("NavBar", Navbar);
</script>


<template>
  <Navbar heading="Car Gallery" />
  <GalleryCard
    carImage="https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    carName="BMW"
    carDetails="Uncompromisingly non-conformist – the all-new BMW X6 stands for provocative self-assertiveness. Above all, this is visible in the extremely athletic body of the vehicle along with the new, distinctive design language, which is displayed by the supreme exclusivity and visionary technologies such as the impressive BMW kidney grille ‘Iconic Glow’. All of this primarily points to one"
  />
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
