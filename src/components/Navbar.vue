<template>
  <div class="mx-auto bg-info text-white">
    <h2 class="font p-2">
      {{ heading }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    heading: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
.font {
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
}
</style>
