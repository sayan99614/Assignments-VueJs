import { createStore } from "vuex";
import auth from "./auth/index";
import datafetching from "./datafetching/index";
const store = createStore({
  modules: {
    auth,
    datafetching,
  },
});

export default store;
