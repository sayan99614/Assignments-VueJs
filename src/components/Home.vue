<template>
  <div class="container">
    <CarForm
      :addCar="addCar"
      :showModel="showModel"
      :handleModel="handleModel"
      :initialValues="initialValues"
      :formHeading="formHeading"
    />
    <div class="row">
      <div class="col-sm-4" v-for="car in carsInfo" :key="car.name">
        <GalleryCard
          :carImage="car.image"
          :carName="car.name"
          :carDetails="car.description"
          :carPrice="car.price"
          :carId="car.id"
          :editCar="editCar"
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
  mounted() {
    window.addEventListener("click", (event) => {
      if (event.target.id === "formmodel") {
        this.showModel = false;
        this.resetInitialValues();
      }
    });
  },
  data() {
    return {
      showModel: false,
      formHeading: "",
      initialValues: {
        id: "",
        name: "",
        description: "",
        image: "",
        price: "",
      },
      carsInfo: [
        {
          id: "123",
          name: "BMW",
          price: undefined,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium.",
          image:
            "https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: "123456",
          name: "Fararri",
          price: 50000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium.",
          image:
            "https://images.unsplash.com/photo-1621707156632-6c2178138c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: "452135",
          name: "Lamborghini",
          price: 1000000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium.",
          image:
            "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
        },
      ],
    };
  },
  methods: {
    addCar(car) {
      if (car.id !== "") {
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
        car.id = this.uuid();
        this.carsInfo.push(car);
        alert("created data" + JSON.stringify(car, 2, null));
      }
    },
    uuid() {
      return new Date().getUTCMilliseconds();
    },
    editCar(id) {
      this.formHeading = "Edit Car";
      const car = this.carsInfo.find((car) => car.id === id);
      this.initialValues = car;
      this.showModel = true;
    },
    handleModel(status) {
      console.log(this.initialValues);
      this.resetInitialValues();
      this.showModel = status;
      if (status === false) {
        this.formHeading = "";
      }
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
        price: "",
      };
    },
  },
};
</script>

<style scoped>
</style>
