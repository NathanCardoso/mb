<template>
  <div class="the-input">
    <label class="label" :for="inputId"> {{ inputName }} </label>
    <input
      class="input"
      :type="inputType"
      :name="inputName"
      :id="inputId"
      v-model="inputValue"
      :on-blur="onBlur"
    />
    <p v-show="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import useForm from "@/composables/useForm";
const { inputValue, error, validate, onBlur } = useForm("email");

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

const emit = defineEmits(["input:status"]);

const inputStatus = ref(false);

watch(inputValue, (newValue) => (inputStatus.value = validate(newValue)));

watch(inputStatus, (newValue) =>
  newValue ? emit("input:status", inputStatus.value) : null
);
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

  .error {
    color: $redPrimary;
    font-size: 0.875rem;
  }
}
</style>
