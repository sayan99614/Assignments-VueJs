<template>
  <div class="container">
    <CarForm
      :addCar="addCar"
      :showModel="showModel"
      :handleModel="handleModel"
      :initialValues="initialValues"
      :formHeading="formHeading"
      :handleFormHeading="handleFormHeading"
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
          :handleFormHeading="handleFormHeading"
          :deleteCar="deleteCar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from "./GalleryCard.vue";
import axios from "axios";
import CarForm from "./CarForm.vue";
export default {
  name: "HomeComponent",
  components: {
    GalleryCard,
    CarForm,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      showModel: false,
      formHeading: "",
      initialValues: {
        id: "",
        name: "",
        details: "",
        image: "",
        price: undefined,
      },
      carsInfo: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://testapi.io/api/dartya/resource/cardata")
        .then((res) => {
          this.carsInfo = res.data.data;
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong please try again");
        });
    },
    sendData(data) {
      axios
        .post("https://testapi.io/api/dartya/resource/cardata", data)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            this.fetchData();
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong please try again");
        });
    },
    addCar(car) {
      //handle edit submit
      if (car.id) {
        this.carsInfo = this.carsInfo.map((c) => {
          if (c.id === car.id) {
            c.name = car.name;
            c.price = car.price;
            c.description = car.description;
            c.image = car.image;
          }
          return c;
        });
        alert("Edited data" + JSON.stringify(car, 2, null));
        this.resetInitialValues();
      } else {
        console.log(car);
        this.sendData(car);
      }
    },
    //edit button clicked
    editCar(id) {
      const car = this.carsInfo.find((car) => car.id === id);
      this.initialValues = car;
      this.showModel = true;
    },
    deleteCar(name, id) {
      alert(`deleted ${name} car id: ${id}`);
    },
    handleModel(status) {
      this.showModel = status;
      this.resetInitialValues();
    },
    handleFormHeading(heading) {
      this.formHeading = heading;
    },
    resetInitialValues() {
      this.initialValues = {
        id: "",
        name: "",
        description: "",
        image: "",
        price: undefined,
      };
    },
  },
};
</script>

<style scoped>
</style>
