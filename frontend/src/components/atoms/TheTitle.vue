<template>
  <h1 class="title">{{ message }}</h1>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: rem(32);
  color: $black;
  font-weight: bold;
}
</style>
