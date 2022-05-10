import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/LoginForm.vue";
import Register from "../components/RegisterForm.vue";
import CarDetail from "../components/CarDetail.vue";
import store from "../store/store";
import { IS_AUTHENTICATED_USER } from "../store/storeConstants";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { auth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { auth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { auth: true },
  },
  {
    path: "/car/:id",
    name: "CarDetail",
    component: CarDetail,
    meta: { auth: true },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
  const isAuth = store.getters[`auth/${IS_AUTHENTICATED_USER}`];

  if (
    to.meta.auth &&
    !isAuth &&
    (to.name === "Home" || to.name === "CarDetail")
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router;
