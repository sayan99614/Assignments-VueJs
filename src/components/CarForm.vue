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
        <div class="modal-body"></div>
        <div class="modal-footer">
          <button
            type="button"
            @click="showModel = false"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarForm",
  data() {
    return {
      showModel: false,
    };
  },
};
</script>

<style scoped>
.model {
  position: absolute;
  z-index: 1;
  width: 400px;
}
</style>