<template>
  <div class="card shadow-sm mb-3 mt-3">
    <img v-bind:src="carImage" alt="car-img" class="img-fluid card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ carName }}</h5>
      <p class="card-text">{{ carDetails.slice(0, 10) }}...</p>
      <div class="d-flex justify-content-between mt-3 mb-1">
        <div>
          <button class="btn btn-info text-white" @click="handleClick">
            Info
          </button>
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
      this.$emit("goToSingleCar");
    },
  },
  props: {
    carName: String,
    carImage: String,
    carDetails: String,
    carPrice: String,
    carId: Number,
  },
};
</script>


<style scoped>
p {
  text-align: justify;
}
.card {
  border: none;
  height: 350px;
}
img {
  height: 200px;
}
i {
  cursor: pointer;
}
</style>
