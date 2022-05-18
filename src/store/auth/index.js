import actions from "@/store/auth/actions";
import getters from "@/store/auth/getters";
import mutations from "@/store/auth/mutations";
export default {
  namespaced: true,
  state() {
    return {
      token: "",
      email: "",
      refreshToken: "",
      expiresIn: "",
      userId: "",
    };
  },
  actions,
  mutations,
  getters,
};
