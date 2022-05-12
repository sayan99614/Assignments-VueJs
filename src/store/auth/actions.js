import {
  SIGNUP_ACTION,
  SET_USER_TOKEN,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  USER_AUTO_LOGIN,
  AUTO_LOGOUT,
} from "../storeConstants";
import axios from "axios";
import ErrorHandling from "../../services/ErrorHandling";

let timer = null;

export default {
  async [SIGNUP_ACTION]({ commit, dispatch }, payload) {
    const postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };

    let response;
    try {
      response = await axios.post(
        process.env.VUE_APP_FIREBASE_SIGNUP_URL,
        postData
      );
    } catch (error) {
      let errorMsg = ErrorHandling.handle(
        error.response.data.error.errors[0].message
      );
      throw errorMsg;
    }
    if (response.status === 200) {
      const responseData = {
        token: response.data.idToken,
        email: response.data.email,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
        userId: response.data.localId,
        loginTime: new Date().getTime(),
      };
      localStorage.setItem("userData", JSON.stringify(responseData));
      commit(SET_USER_TOKEN, responseData);

      const logoutTime = responseData.expiresIn * 1000;
      timer = setTimeout(() => dispatch(AUTO_LOGOUT), logoutTime);
    }
  },
  async [LOGIN_ACTION]({ dispatch, commit }, payload) {
    const postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };

    let response;
    try {
      response = await axios.post(
        process.env.VUE_APP_FIREBASE_LOGIN_URL,
        postData
      );
    } catch (error) {
      let errorMsg = ErrorHandling.handle(
        error.response.data.error.errors[0].message
      );
      throw errorMsg;
    }
    if (response.status === 200) {
      const responseData = {
        token: response.data.idToken,
        email: response.data.email,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
        userId: response.data.localId,
        loginTime: new Date().getTime(),
      };
      localStorage.setItem("userData", JSON.stringify(responseData));
      commit(SET_USER_TOKEN, responseData);

      const logoutTime = responseData.expiresIn * 1000;
      timer = setTimeout(() => dispatch(AUTO_LOGOUT), logoutTime);
    }
  },
  [USER_AUTO_LOGIN]({ commit, dispatch }) {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const time = Math.abs(
        new Date().getTime() - (userData.expiresIn * 1000 + userData.loginTime)
      );
      if (time < 10000) {
        dispatch(AUTO_LOGOUT);
      } else {
        timer = setTimeout(() => {
          dispatch(AUTO_LOGOUT);
        }, time);
      }
      commit(SET_USER_TOKEN, userData);
    }
  },
  [AUTO_LOGOUT]({ dispatch }) {
    dispatch(LOGOUT_ACTION);
  },

  [LOGOUT_ACTION]({ commit }) {
    commit(SET_USER_TOKEN, {
      token: null,
      email: null,
      refreshToken: null,
      expiresIn: null,
      userId: null,
    });
    localStorage.removeItem("userData");
    if (timer) {
      clearTimeout(timer);
    }
  },
};
