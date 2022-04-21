<template>
  <div class="d-flex justify-content-end">
    <button
      @click="handelModelandResetFields(true)"
      class="btn btn-primary mb-3"
    >
      Add car
    </button>
  </div>
  <Teleport to="#model">
    <transition
      name="form"
      @after-enter="addBackgroundClass"
      @before-leave="removeBackgroundClass"
    >
      <div v-show="showModel" :class="styles" id="formmodel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 v-if="formHeading" class="modal-title">{{ formHeading }}</h5>
              <h5 v-else class="modal-title">Add Car</h5>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                @click="handelModelandResetFields(false)"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <Form
                @submit="handleSubmit"
                ref="form"
                :validation-schema="schema"
                :initial-values="initialValues"
              >
                <Field type="hidden" name="id" class="form-control" />

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
                  <Field type="number" name="price" class="form-control" />
                  <ErrorMessage class="text-danger" name="price" />
                </div>
                <div class="mb-2">
                  <label for="exampleInputPassword1" class="form-label"
                    >Car Details</label
                  >
                  <Field
                    as="textarea"
                    class="form-control"
                    name="details"
                    rows="2"
                  />
                  <ErrorMessage class="text-danger" name="details" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
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
      id: yup.string(),
      name: yup.string().required("car name shouldn't be empty"),
      details: yup
        .string()
        .required("car details shouldn't be empty")
        .min(30)
        .max(120),
      image: yup
        .string()
        .required("car image url shouldn't be empty")
        .url("imge should be in url format"),
      price: yup
        .string()
        .required("car price shouldn't be empty")
        .matches("^[0-9]+$", "price must be a number"),
    });
    return {
      schema,
      styles: ["model"],
    };
  },
  props: {
    addCar: Function,
    showModel: Boolean,
    handleModel: Function,
    initialValues: Object,
    handleFormHeading: Function,
    formHeading: String,
  },
  methods: {
    handleSubmit(values, formActions) {
      this.addCar(values);
      formActions.resetForm();
      this.handleModel(false);
    },
    handelModelandResetFields(status) {
      this.handleModel(status);
      this.$refs.form.resetForm();
    },
    addBackgroundClass() {
      this.styles.push("modelbackground");
    },
    removeBackgroundClass() {
      this.styles.pop("modelbackground");
    },
  },
};
</script>

<style scoped>
.model {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
}

.modelbackground {
  background-color: rgba(0, 0, 0, 0.5);
}

.form-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.form-enter-active {
  transition: all 0.6s ease;
}
.form-leave-to {
  opacity: 1;
  transform: scale(0.2);
}

.form-enter-active,
.form-leave-active {
  transition: all 0.3s ease;
}
</style>