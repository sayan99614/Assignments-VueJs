<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <h3 @click="goHome" class="navbar-brand">Car Gallery</h3>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" v-if="canLogIn">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!canLogIn">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  props: {
    heading: String,
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    ...mapGetters(["canLogIn"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
.font {
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
}
.navbar-nav {
  margin-left: auto;
}
.navbar-brand {
  cursor: pointer;
}

.router-link-exact-active {
  font-weight: bold;
  color: black;
  border-bottom: 2px solid #23c4ed;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}
</style>
