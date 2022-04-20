<template>
  <h1 v-if="isLoading" class="text-center mt-5">Loading...</h1>
  <div v-else class="container">
    <div class="row">
      <div class="col-sm-4" v-for="car in carsInfo" :key="car.name">
        <GalleryCard
          :carImage="car.image"
          :carName="car.name"
          :carDetails="car.details"
          :carPrice="car.price"
          :carId="car.id"
          @goToSingleCar="singleCar(car.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from "./GalleryCard.vue";
import axios from "axios";
export default {
  name: "HomeComponent",
  components: {
    GalleryCard,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      initialValues: {
        id: "",
        name: "",
        details: "",
        image: "",
        price: undefined,
      },
      carsInfo: [],
      isLoading: true,
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://testapi.io/api/dartya/resource/cardata")
        .then((res) => {
          this.carsInfo = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong please try again");
        });
    },
    resetInitialValues() {
      this.initialValues = {
        id: "",
        name: "",
        description: "",
        image: "",
        price: "",
      };
    },
    singleCar(id) {
      this.$router.push(`/car/${id}`);
    },
  },
};
</script>

<style scoped>
</style>
