export default {
  FETCH_ALL_CARS(state, data) {
    state.carData = data;
  },
  CHANGE_LOADING(state, status) {
    state.isLoading = status;
  },
  FETCH_SINGLE_CAR(state, data) {
    state.singleCar = data;
  },
  SAVE_USER_DATA(state, data) {
    state.userData = data;
  },
};
