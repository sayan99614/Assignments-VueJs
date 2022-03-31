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
      <div class="col-sm-4" v-for="car in carsinfo" :key="car.name">
        <GalleryCard
          :carImage="car.image"
          :carName="car.name"
          :carDetails="car.description"
          :carPrice="car.price"
          :carId="car.id"
          :editCar="editCar"
          :handleFormHeading="handleFormHeading"
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
      showModel: false,
      formHeading: "",
      initialValues: {
        id: "",
        name: "",
        description: "",
        image: "",
        price: undefined,
      },
      carsinfo: [
        {
          id: "123",
          name: "BMW",
          price: undefined,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium. Molestias possimus at voluptatum recusandae alias laborum debitis nihil placeat quas earum odit cupiditate nostrum fuga, consequuntur velit. Neque, tenetur!",
          image:
            "https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: "123456",
          name: "Fararri",
          price: 50000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium. Molestias possimus at voluptatum recusandae alias laborum debitis nihil placeat quas earum odit cupiditate nostrum fuga, consequuntur velit. Neque, tenetur!",
          image:
            "https://images.unsplash.com/photo-1621707156632-6c2178138c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: "452135",
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
      if (car.id !== "") {
        this.carsinfo = this.carsinfo.map((c) => {
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
        this.carsinfo.push(car);
        alert("created data" + JSON.stringify(car, 2, null));
      }
    },
    uuid() {
      return new Date().getUTCMilliseconds();
    },
    editCar(id) {
      const car = this.carsinfo.find((car) => car.id === id);
      this.initialValues = car;
      this.showModel = true;
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
