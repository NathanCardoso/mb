<template>
  <button
    class="button"
    :class="{ disabled: disabled }"
    :disabled="disabled"
    @click="buttonClick"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["click:confirmed"]);

const buttonClick = () => {
  emit("click:confirmed");
};
</script>

<style lang="scss" scoped>
.button {
  max-width: 100%;
  padding: rem(15) rem(30);
  background: $yellow;
  color: $whitePrimary;
  border: none;
  border-radius: rem(8);
  font-size: rem(18);
  flex-grow: 1;
  cursor: pointer;

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
