<script setup>
// global component navbar
import { createApp } from "vue";
import Navbar from "./components/Navbar.vue";
const app = createApp({});
app.component("NavBar", Navbar);
</script>


<template>
  <Navbar heading="Car Gallery" />
  <div class="container">
    <div class="row">
      <div class="col-sm-4" v-for="car in carsinfo" :key="car.name">
        <GalleryCard
          :carImage="car.image"
          :carName="car.name"
          :carDetails="car.desc"
          :carPrice="car.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from "./components/GalleryCard.vue";
export default {
  name: "App",
  components: {
    GalleryCard,
  },
  data() {
    return {
      carsinfo: [
        {
          name: "BMW",
          price: undefined,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium. Molestias possimus at voluptatum recusandae alias laborum debitis nihil placeat quas earum odit cupiditate nostrum fuga, consequuntur velit. Neque, tenetur!",
          image:
            "https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "Fararri",
          price: 50000,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium. Molestias possimus at voluptatum recusandae alias laborum debitis nihil placeat quas earum odit cupiditate nostrum fuga, consequuntur velit. Neque, tenetur!",
          image:
            "https://images.unsplash.com/photo-1621707156632-6c2178138c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "Lamborghini",
          price: 1000000,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium. Molestias possimus at voluptatum recusandae alias laborum debitis nihil placeat quas earum odit cupiditate nostrum fuga, consequuntur velit. Neque, tenetur!",
          image:
            "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
        },
      ],
    };
  },
};
</script>

<style>
</style>
