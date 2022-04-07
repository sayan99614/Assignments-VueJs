<template>
  <div class="card shadow-sm">
    <img v-bind:src="carImage" alt="car-img" class="img-fluid card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ carName }}</h5>
      <p class="card-text">{{ carDetails }}</p>
      <button
        :disabled="isPrice"
        class="btn btn-info text-white mt-4 w-100"
        @click="handleClick"
      >
        <span v-if="carPrice">Info</span>
        <span v-else>Available soon</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryCard",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      alert(`car price is ${this.carPrice}`);
    },
  },
  props: {
    carName: String,
    carImage: String,
    carDetails: String,
    carPrice: Number,
  },
  computed: {
    isPrice() {
      return this.carPrice === undefined;
    },
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

