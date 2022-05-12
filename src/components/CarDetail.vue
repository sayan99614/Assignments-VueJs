<template>
  <div v-if="loading" class="text-center mt-5">
    <Loading />
  </div>
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
import axios from "axios";
import Loading from "./Loading.vue";
export default {
  name: "SingleCar",
  created() {
    this.getCarById(this.carId);
  },
  data() {
    return {
      carData: {},
      loading: true,
    };
  },
  methods: {
    getCarById() {
      axios
        .get(
          `https://testapi.io/api/dartya/resource/cardata/${this.$route.params.id}}`
        )
        .then((response) => {
          this.carData = response.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          alert("something went wrong please try after some time");
        });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  components: { Loading },
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