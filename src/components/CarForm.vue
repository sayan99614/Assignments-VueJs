<template>
  <button @click="showModel = true" class="btn btn-primary mb-3">
    Add car
  </button>
  <div v-show="showModel" class="model">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Cars</h5>
          <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
            @click="showModel = false"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form @submit="handleSubmit" :validation-schema="schema">
            <div class="mb-2">
              <label class="form-label">Car Name</label>
              <Field type="text" name="name" class="form-control" />
              <ErrorMessage class="text-danger" name="name" />
            </div>
            <div class="mb-2">
              <label class="form-label">Car Image</label>
              <Field type="text" name="image" class="form-control" />
              <ErrorMessage class="text-danger" name="image" />
            </div>

            <div class="mb-2">
              <label class="form-label">Car Price</label>
              <Field type="text" name="price" class="form-control" />
              <ErrorMessage class="text-danger" name="price" />
            </div>
            <div class="mb-2">
              <label for="exampleInputPassword1" class="form-label"
                >Car Details</label
              >
              <Field
                as="textarea"
                class="form-control"
                name="description"
                rows="2"
              />
              <ErrorMessage class="text-danger" name="description" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "CarForm",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      name: yup.string().required("car name shouldn't be empty"),
      description: yup.string().required("car details shouldn't be empty"),
      image: yup
        .string()
        .required("car image url shouldn't be empty")
        .url("imge should be in url format"),
      price: yup
        .number("price must be nuber")
        .required("car price shouldn't be empty"),
    });

    return {
      showModel: false,
      schema,
    };
  },
  props: {
    addCar: Function,
  },
  methods: {
    handleSubmit(values, formActions) {
      this.showModel = false;
      this.addCar(values);
      formActions.resetForm();
      alert("created data" + JSON.stringify(values, 2, null));
    },
  },
};
</script>

<style scoped>
.model {
  position: absolute;
  top: 80px;
  z-index: 1;
  width: 300px;
}
</style>
