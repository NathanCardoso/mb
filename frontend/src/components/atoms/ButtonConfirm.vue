<template>
  <button class="button" @click="buttonClick">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});

const buttonClick = () => {
  this.$emit("click:confirmed");
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
}
</style>
