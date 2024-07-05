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
  this.$emit("click:go-back");
};
</script>

<style lang="scss" scoped>
.button {
  max-width: 100%;
  padding: 15px 30px;
  padding: rem(15) rem(30);
  background: $whiteSecondary;
  max-width: 100%;
  font-size: rem(18);
  color: $yellow;
  border-radius: rem(8);
  border: rem(2) solid $yellow;
}
</style>
