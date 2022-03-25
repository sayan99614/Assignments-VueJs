<template>
  <div class="card shadow" style="width: 18rem">
    <img v-bind:src="carImage" alt="car-img" class="img-fluid card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ carName }}</h5>
      <p class="card-text">{{ carDetails }}</p>
      <button class="btn btn-info text-white mt-4 w-25" @click="handleClick">
        Info
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery-card",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      alert(`car price is ${this.price}`);
    },
  },
  props: {
    carName: String,
    carImage: String,
    carDetails: String,
    price: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: justify;
}
.card {
  border: none;
}
.font {
  position: relative;
  font-family: "Roboto", sans-serif;
}
/* .container {
  box-shadow: rgb(177 174 174) 3px 3px 9px -3px;
  padding: 10px 25px;
  margin-bottom: 15px;
} */
/* .descp {
  position: relative;
  top: 45px;
} */
</style>

