<template>
  <div class="the-input">
    <label class="label" :for="inputId"> {{ inputName }} </label>
    <input class="input" :type="inputType" :name="inputName" :id="inputId" />
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
  inputId: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.the-input {
  max-width: rem(400);

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
    box-sizing: border-box;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: rem(0) rem(6) rem(12) $shadowAlt;
      border-color: $yellow;
    }
  }
}
</style>
