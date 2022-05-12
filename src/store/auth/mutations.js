import { SET_USER_TOKEN } from "../storeConstants";
export default {
  [SET_USER_TOKEN](state, payload) {
    state.token = payload.token;
    state.email = payload.email;
    state.refreshToken = payload.refreshToken;
    state.expiresIn = payload.expiresIn;
    state.userId = payload.userId;
  },
};
