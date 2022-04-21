<template>
  <transition name="list" appear>
    <div class="card shadow-sm mb-3 mt-2">
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
          <div class="mt-1">
            <i
              @click="editCar(carId)"
              class="fa-solid fa-lg text-success fa-pen-to-square"
            ></i>
            &nbsp;&nbsp;&nbsp;
            <i
              @click="deleteCar(carName, carId)"
              class="fa-solid text-danger fa-lg fa-trash"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
    editCar: Function,
    deleteCar: Function,
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

.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-active {
  transition: all 0.4s ease;
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active {
  transition: all 0.6s ease;
}
</style>
