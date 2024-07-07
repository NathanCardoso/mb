<template>
  <p class="step">
    Etapa <span class="current-stage">{{ currentStage }}</span> de {{ totalStep }}
  </p>
</template>

<script setup>
defineProps({
  currentStage: {
    type: Number,
    required: true,
  },
  totalStep: {
    type: Number,
    default: 4,
  },
});
</script>

<style lang="scss" scoped>
.step {
  font-size: rem(14);
  color: $black;

  .current-stage {
    color: $yellow;
  }
}
</style>
