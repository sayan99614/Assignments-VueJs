export default class ErrorHandling {
  constructor(error) {
    this.error = error;
  }

  static handle(err) {
    switch (err) {
      case "EMAIL_EXISTS":
        return "email is already registered";
      case "EMAIL_NOT_FOUND":
        return "Invalid Email";
      case "INVALID_PASSWORD":
        return "Invalid password";
      default:
        return "something went wrong please try again";
    }
  }
}
