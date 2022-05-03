export default {
  authenticateUser: (state) => (email, password) => {
    const user = state.userData;
    if (user.email === email && user.password === password) {
      return true;
    } else {
      return false;
    }
  },
  canLogIn: (state) => {
    return Object.keys(state.userData).length !== 0;
  },
};
