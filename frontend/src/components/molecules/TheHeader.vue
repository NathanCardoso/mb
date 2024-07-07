<template>
  <header class="the-header">
    <TheStep :current-stage="step" />
    <TheTitle message="Seja bem vindo(a)" />
  </header>
</template>

<script setup>
import TheStep from "../atoms/TheStep.vue";
import TheTitle from "../atoms/TheTitle.vue";

defineProps({
  step: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.the-header {
  display: flex;
  flex-direction: column;
  gap: rem(8);
}
</style>
