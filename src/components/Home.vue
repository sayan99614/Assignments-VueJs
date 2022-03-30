<template>
  <div class="container">
    <CarForm :addCar="addCar" />
    <div class="row">
      <div class="col-sm-4" v-for="car in carsinfo" :key="car.name">
        <GalleryCard
          :carImage="car.image"
          :carName="car.name"
          :carDetails="car.description"
          :carPrice="car.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from "./GalleryCard.vue";
import CarForm from "./CarForm.vue";
export default {
  name: "HomeComponent",
  components: {
    GalleryCard,
    CarForm,
  },
  data() {
    return {
      carsinfo: [
        {
          name: "BMW",
          price: undefined,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium. Molestias possimus at voluptatum recusandae alias laborum debitis nihil placeat quas earum odit cupiditate nostrum fuga, consequuntur velit. Neque, tenetur!",
          image:
            "https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "Fararri",
          price: 50000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium. Molestias possimus at voluptatum recusandae alias laborum debitis nihil placeat quas earum odit cupiditate nostrum fuga, consequuntur velit. Neque, tenetur!",
          image:
            "https://images.unsplash.com/photo-1621707156632-6c2178138c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "Lamborghini",
          price: 1000000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium. Molestias possimus at voluptatum recusandae alias laborum debitis nihil placeat quas earum odit cupiditate nostrum fuga, consequuntur velit. Neque, tenetur!",
          image:
            "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
        },
      ],
    };
  },
  methods: {
    addCar(car) {
      this.carsinfo.push(car);
    },
  },
};
</script>

<style scoped>
</style>
