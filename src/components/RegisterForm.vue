<template>
  <div class="p-4">
    <div class="card shadow-sm">
      <div class="row">
        <div class="col-sm-4">
          <h3 class="mt-3 p-3">Signup</h3>
          <Form
            @submit="registerSubmit"
            :validation-schema="validationSchema"
            class="p-5 pt-0"
          >
            <div class="mb-2">
              <label class="form-label">Email</label>
              <Field
                type="text"
                name="email"
                placeholder="example@gmail.com"
                class="form-control"
              />
              <ErrorMessage class="text-danger" name="email" />
            </div>
            <div class="mb-2">
              <label class="form-label">Password</label>
              <Field
                type="password"
                placeholder="********"
                name="password"
                class="form-control"
              />
              <ErrorMessage class="text-danger" name="password" />
            </div>
            <div class="mb-2">
              <label class="form-label">Confirm Password</label>
              <Field
                type="password"
                placeholder="********"
                name="confirmpassword"
                class="form-control"
              />
              <ErrorMessage class="text-danger" name="confirmpassword" />
            </div>
            <div class="mb-2">
              <label class="form-label">Role</label>
              <Field name="role" as="select" class="form-select">
                <option value="">please select a role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="customer">Customer</option>
              </Field>
              <ErrorMessage class="text-danger" name="role" />
            </div>
            <div class="mb-2">
              <div>
                <label class="form-label">Gender</label>
              </div>
              <Field
                name="gender"
                class="form-check-input"
                type="radio"
                value="male"
              ></Field>
              Male
              <Field
                name="gender"
                class="form-check-input"
                type="radio"
                value="female"
              ></Field>
              Female
              <Field
                name="gender"
                class="form-check-input"
                type="radio"
                value="other"
              ></Field>
              Other
              <ErrorMessage class="text-danger" name="gender" />
            </div>
            <div class="mb-2">
              <label class="form-label">Age</label>
              <Field
                type="number"
                name="age"
                placeholder="enter your age"
                class="form-control"
              />
              <ErrorMessage class="text-danger" name="age" />
            </div>
            <div class="mb-2">
              <label class="form-label">DOB</label>
              <Field
                type="date"
                name="dob"
                placeholder="enter your dob"
                class="form-control"
              />
              <ErrorMessage class="text-danger" name="dob" />
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-primary w-100" :disabled="isLoading">
                {{ isLoading ? "Loading..." : "submit" }}
              </button>
            </div>
          </Form>
        </div>
        <div class="col-sm-8">
          <img class="img-fluid" src="../assets/signup.png" alt="signup" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "LoginForm",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const validationSchema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), ""], "password did't match")
        .required("confirm password is required"),
      role: yup.string().required(),
      gender: yup.string().oneOf(["male", "female", "other"]).required(),
      age: yup
        .string()
        .required()
        .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field "),
      dob: yup
        .date()
        .required()
        .test(
          "future-date",
          () => `invalid date you can't enter future date`,
          (value) => {
            return this.isFutureDate(this.formatDate(new Date(value)));
          }
        ),
    });

    return {
      validationSchema,
      isLoading: false,
    };
  },
  methods: {
    registerSubmit(data, formActions) {
      /*used simple method because api is not woeking */
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push({ name: "Login" });
      }, 2000);
      formActions.resetForm();
    },
    isFutureDate(idate) {
      let today = new Date().getTime();
      idate = idate.split("/");

      idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
      return today - idate > 0;
    },
    formatDate(date) {
      const yyyy = date.getFullYear();
      let mm = date.getMonth() + 1; // Months start at 0!
      let dd = date.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const result = dd + "/" + mm + "/" + yyyy;
      return result;
    },
  },
};
</script>

<style scoped>
.card {
  border: none;
}
</style>