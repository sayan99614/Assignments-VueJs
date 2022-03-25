<template>
  <div class="card shadow-sm">
    <img v-bind:src="carImage" alt="car-img" class="img-fluid card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ carName }}</h5>
      <p class="card-text">{{ carDetails }}</p>
      <button
        :disabled="isprice"
        class="btn btn-info text-white mt-4 w-100"
        @click="handleClick"
      >
        <span v-if="price">Info</span>
        <span v-else>Commig soon...</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery-card",
  data() {
    return {
      isprice: this.price === undefined,
    };
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
img {
  height: 200px;
}
</style>

