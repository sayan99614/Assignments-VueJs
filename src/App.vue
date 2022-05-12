<template>
  <Navbar heading="Car Gallery" />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar.vue";
import { USER_AUTO_LOGIN } from "./store/storeConstants";
export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    this.userAutoLogin();
    console.log(process.env.VUE_APP_FIREBASE_SIGNUP_URL);
  },
  methods: {
    ...mapActions("auth", {
      userAutoLogin: USER_AUTO_LOGIN,
    }),
  },
};
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
