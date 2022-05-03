import axios from "axios";
export default {
  getAllCar({ commit }) {
    commit("CHANGE_LOADING", true);
    axios
      .get("https://testapi.io/api/dartya/resource/cardata")
      .then((res) => {
        commit("FETCH_ALL_CARS", res.data.data);
        commit("CHANGE_LOADING", false);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong please try again");
        commit("CHANGE_LOADING", false);
      });
  },
  getSingleCar({ commit }, id) {
    commit("CHANGE_LOADING", true);
    axios
      .get(`https://testapi.io/api/dartya/resource/cardata/${id}}`)
      .then((response) => {
        commit("FETCH_SINGLE_CAR", response.data);
        commit("CHANGE_LOADING", false);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong please try after some time");
        commit("CHANGE_LOADING", false);
      });
  },
  sendData({ dispatch }, data) {
    axios
      .post("https://testapi.io/api/dartya/resource/cardata", data)
      .then((res) => {
        if (res.status === 201) {
          dispatch("getAllCar");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong please try again");
      });
  },
  deleteData({ dispatch }, id) {
    axios
      .delete(`https://testapi.io/api/dartya/resource/cardata/${id}`)
      .then((response) => {
        if (response.status === 204) {
          dispatch("getAllCar");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("can't delete at this moment");
      });
  },
  putData({ dispatch }, { id, data }) {
    axios
      .put(`https://testapi.io/api/dartya/resource/cardata/${id}`, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch("getAllCar");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(`cannot update at this moment`);
      });
  },
  createUser({ commit }, data) {
    commit("SAVE_USER_DATA", data);
  },
};
