<template>
  <div class="card shadow-sm mb-3">
    <img v-bind:src="carImage" alt="car-img" class="img-fluid card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ carName }}</h5>
      <p class="card-text">{{ carDetails }}</p>
      <div class="d-flex justify-content-between mt-3 mb-1">
        <div>
          <button
            :disabled="isPrice"
            class="btn btn-info text-white"
            @click="handleClick"
          >
            <span v-if="carPrice">Info</span>
            <span v-else>Commig soon...</span>
          </button>
        </div>
        <div class="mt-1">
          <i class="fa-solid fa-lg text-success fa-pen-to-square"></i>
          &nbsp;&nbsp;&nbsp;
          <i
            @click="deleteCar(carName)"
            class="fa-solid text-danger fa-lg fa-trash"
          ></i>
        </div>
      </div>
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
    deleteCar(name) {
      alert(`deleted ${name} car`);
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
i {
  cursor: pointer;
}
</style>

