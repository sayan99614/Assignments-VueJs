export default class ErrorHandling {
  constructor(error) {
    this.error = error;
  }

  static handle(err) {
    switch (err) {
      case "EMAIL_EXISTS":
        this.error = "email is already registered";
        break;
      case "EMAIL_NOT_FOUND":
        this.error = "Invalid Email";
        break;
      case "INVALID_PASSWORD":
        this.error = "Invalid password";
        break;
      default:
        this.error = "something went wrong please try again";
    }
    return this.error;
  }
}
