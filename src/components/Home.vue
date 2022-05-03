<template>
  <h1 v-if="isLoading" class="text-center mt-5">Loading...</h1>
  <div v-else class="container mt-2">
    <CarForm
      :addCar="addCar"
      :showModel="showModel"
      :handleModel="handleModel"
      :initialValues="initialValues"
    />
    <div class="row">
      <div class="col-sm-4" v-for="car in carsInfo" :key="car.name">
        <GalleryCard
          :carImage="car.image"
          :carName="car.name"
          :carDetails="car.details"
          :carPrice="car.price"
          :carId="car.id"
          :editCar="editCar"
          :deleteCar="deleteCar"
          @goToSingleCar="singleCar(car.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from "./GalleryCard.vue";
import CarForm from "./CarForm.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "HomeComponent",
  components: {
    GalleryCard,
    CarForm,
  },
  created() {
    this.fetchCar();
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
      showModel: false,
    };
  },
  mounted() {
    window.addEventListener("click", (event) => {
      if (event.target.id === "formmodel") {
        this.showModel = false;
      }
    });
  },
  computed: {
    ...mapState({
      carsInfo: (state) => state.carData,
      isLoading: (state) => state.isLoading,
    }),
  },
  methods: {
    ...mapActions({
      fetchCar: "getAllCar",
      putData: "putData",
      sendData: "sendData",
      deleteData: "deleteData",
    }),

    addCar(car) {
      //handle edit submit
      if (car.id) {
        const dataToChange = {
          id: car.id,
          data: car,
        };
        this.putData(dataToChange);
        this.resetInitialValues();
      } else {
        car.id = new Date().getTime().toString(36);
        console.log(car);
        this.sendData(car);
      }
    },
    //edit button clicked
    editCar(id) {
      this.formHeading = "Edit Car";
      const car = this.carsInfo.find((car) => car.id === id);
      this.initialValues = car;
      this.showModel = true;
    },
    deleteCar(name, id) {
      this.deleteData(id);
    },
    handleModel(status) {
      this.formHeading = "";
      this.showModel = status;
      this.resetInitialValues();
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
