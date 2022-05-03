<template>
  <div class="p-5 mt-3">
    <div class="card shadow-sm">
      <div class="row">
        <div class="col-sm-4">
          <h3 class="mt-3 p-3">Login</h3>
          <Form
            @submit="loginSubmit"
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
            <div class="text-center mt-3">
              <button class="btn btn-primary w-100">login</button>
            </div>
          </Form>
        </div>
        <div class="col-sm-6 offset-sm-1">
          <img class="img-fluid w-75" src="../assets/login.png" alt="login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapGetters } from "vuex";
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
    });

    return {
      validationSchema,
    };
  },
  methods: {
    loginSubmit(data, formActions) {
      this.loginUser(data);
      formActions.resetForm();
    },
    loginUser(user) {
      if (this.authenticateUser(user.email, user.password)) {
        this.$router.push({ name: "Home" });
      } else {
        alert("email or password is wrong");
      }
    },
  },
  computed: {
    ...mapGetters(["authenticateUser"]),
  },
};
</script>

<style scoped>
.card {
  border: none;
}
</style>

