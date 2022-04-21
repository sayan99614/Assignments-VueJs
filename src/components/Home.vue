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
import axios from "axios";
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
      initialValues: {
        id: "",
        name: "",
        details: "",
        image: "",
        price: undefined,
      },
      showModel: false,
      carsInfo: [],
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener("click", (event) => {
      if (event.target.id === "formmodel") {
        this.showModel = false;
      }
    });
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
    deleteData(id) {
      axios
        .delete(`https://testapi.io/api/dartya/resource/cardata/${id}`)
        .then((response) => {
          if (response.status === 204) {
            this.fetchData();
          }
        })
        .catch((err) => {
          console.log(err);
          alert("can't delete at this moment");
        });
    },
    putData(id, data) {
      axios
        .put(`https://testapi.io/api/dartya/resource/cardata/${id}`, data)
        .then((response) => {
          if (response.status === 200) {
            this.fetchData();
          }
        })
        .catch((err) => {
          console.log(err);
          alert(`cannot update at this moment`);
        });
    },
    addCar(car) {
      //handle edit submit
      if (car.id) {
        this.putData(car.id, car);
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
