<template>
  <div class="the-input">
    <label class="label" :for="inputName"> {{ inputName }} </label>
    <input class="input" :type="inputType" :name="inputName" />
  </div>
</template>

<script setup>
defineProps({
  inputType: {
    type: String,
    default: "text",
  },
  inputName: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.the-input {
  > .label {
    display: inline-block;
    margin-bottom: rem(4);
    text-transform: capitalize;
  }

  > .input {
    background: $whiteSecondary;
    border-radius: rem(4);
    border: rem(1) solid $whiteSecondary;
    padding: rem(15);
    box-shadow: $shadow;
    transition: all 0.3s;
    font-size: rem(16);
    margin-bottom: rem(15);
    width: 100%;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: rem(0) rem(6) rem(12) $shadowAlt;
      border-color: $yellow;
    }
  }
}
</style>
