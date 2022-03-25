<template>
  <h1 class="text-center bg-info text-white fw-bold font">
    {{ heading }}
  </h1>
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
</style>