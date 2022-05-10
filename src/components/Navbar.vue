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
          <li class="nav-item" v-if="isAuthenticated">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <a href="#" class="nav-link" @click.prevent="logoutUser">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { IS_AUTHENTICATED_USER, LOGOUT_ACTION } from "@/store/storeConstants";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavBar",
  props: {
    heading: String,
  },
  methods: {
    ...mapActions("auth", {
      logout: LOGOUT_ACTION,
    }),
    goHome() {
      this.$router.push({ name: "Home" });
    },
    logoutUser() {
      this.logout();
      this.$router.replace({ name: "Login" });
    },
  },
  computed: {
    ...mapGetters("auth", {
      isAuthenticated: IS_AUTHENTICATED_USER,
    }),
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
