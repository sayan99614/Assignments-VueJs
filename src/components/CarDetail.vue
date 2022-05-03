<template>
  <h1 v-if="loading" class="text-center mt-5">Loading...</h1>
  <div v-else class="mt-3 container mb-3">
    <img
      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/left-arrow_2b05-fe0f.png"
      alt="back"
      class="back-img"
      @click="goBack"
    />
    <div class="card p-5 shadow-sm">
      <div class="row">
        <div class="col-sm-6">
          <img class="img-fluid" :src="carData.image" alt="" />
        </div>
        <div class="col-sm-6">
          <h3>{{ carData.name }}</h3>
          <p>
            Details: <span> {{ carData.details }}</span>
          </p>
          <p>Price: {{ carData.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "SingleCar",
  created() {
    this.getCarById(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      getCarById: "getSingleCar",
    }),
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapState({
      carData: (state) => state.singleCar,
      loading: (state) => state.isLoading,
    }),
  },
};
</script>

<style scoped>
img {
  width: 600px;
  height: 400px;
}
.ml {
  position: absolute;
}
.text {
  font-size: 15px;
}

.card {
  border: none;
}

.back-img {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>