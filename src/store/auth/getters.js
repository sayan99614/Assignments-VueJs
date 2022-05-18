import { IS_AUTHENTICATED_USER } from "@/store/storeConstants";

export default {
  [IS_AUTHENTICATED_USER](state) {
    return !!state.token;
  },
};
