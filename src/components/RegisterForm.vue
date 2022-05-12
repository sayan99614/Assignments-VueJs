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
            <div class="text-center mt-3">
              <button class="btn btn-primary w-100" :disabled="isLoading">
                <LoadingButton v-if="isLoading" />
                <span v-else>Submit</span>
              </button>
            </div>
          </Form>
        </div>
        <div class="col-sm-8">
          <img
            class="img-fluid w-50 offset-md-4"
            src="../assets/signup.png"
            alt="signup"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SIGNUP_ACTION } from "@/store/storeConstants";
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions } from "vuex";
import * as yup from "yup";
import LoadingButton from "./LoadingButton.vue";
export default {
  name: "LoginForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    LoadingButton,
  },
  data() {
    const validationSchema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), ""], "password did't match")
        .required("confirm password is required"),
    });

    return {
      validationSchema,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("auth", {
      userSignup: SIGNUP_ACTION,
    }),
    registerSubmit(data, formActions) {
      this.isLoading = true;
      this.userSignup({
        email: data.email,
        password: data.password,
      })
        .then(() => {
          this.isLoading = false;
          this.$router.replace({ name: "Login" });
        })
        .catch((error) => {
          this.isLoading = false;
          alert(error);
        });
      formActions.resetForm();
    },
  },
};
</script>

<style scoped>
.card {
  border: none;
}
</style>