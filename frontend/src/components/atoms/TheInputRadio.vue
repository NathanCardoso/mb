<template>
  <div class="the-input-radio">
    <label class="label">
      <input class="input" type="radio" :name="inputId" :id="inputId" />
      {{ inputName }}
      <span class="span">&nbsp;</span>
    </label>
  </div>
</template>

<script setup>
defineProps({
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
.the-input-radio {
  font-size: rem(16);
  font-weight: 500;
  text-transform: capitalize;
  display: inline-block;
  vertical-align: middle;
  color: $black;
  position: relative;
  padding-left: rem(30);

  .label {
    cursor: pointer;
  }

  .span {
    height: rem(18);
    width: rem(18);
    border-radius: 50%;
    border: rem(3) solid $yellow;
    display: block;
    position: absolute;
    left: 0;
    top: rem(-6);

    &::after {
      content: "";
      background: $yellow;
      height: rem(10);
      width: rem(10);
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      border-radius: 50%;
      transition: 300ms ease-in-out 0s;
    }
  }

  .input {
    display: none;

    &:checked ~ .span::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>
