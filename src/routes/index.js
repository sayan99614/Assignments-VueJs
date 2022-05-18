import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store";
import { IS_AUTHENTICATED_USER } from "@/store/storeConstants";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/Home.vue"),
    meta: { auth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/LoginForm.vue"),
    meta: { auth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/components/RegisterForm.vue"),
    meta: { auth: true },
  },
  {
    path: "/car/:id",
    name: "CarDetail",
    component: () => import("@/components/CarDetail.vue"),
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
