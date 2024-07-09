<template>
  <main class="box-select-person">
    <TheHeader :step="1" title-message="Seja bem vindo(a)" />
    <SelectPerson
      @input:status="inputValidate"
      @input:picked="inputPicked"
      @input:value="inputValue"
    />
    <ButtonConfirm
      text="Continuar"
      :disabled="!isButtonEnable"
      @click:confirmed="nextPage"
    />
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import SelectPerson from "../molecules/SelectPerson.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
import { ref, computed, watch } from "vue";
import { setLocalStorage } from "@/js/helpers/localStorage";

const emit = defineEmits(["select-person:next-page"]);

const inputEmailValue = ref("");
const inputPickedValue = ref("");
const isEmailValid = ref(true);
const isPickedValid = ref(true);
const isButtonEnable = computed(
  () => isEmailValid.value === false && isPickedValid.value === false
);

watch(inputPickedValue, (newValue) => inputPickedValidate(newValue));

const nextPage = () => {
  setLocalStorage("pickedValue", inputPickedValue.value);
  setLocalStorage("email", inputEmailValue.value);

  emit("select-person:next-page", 2);
};

const inputValidate = (status) => {
  isEmailValid.value = !status;
};

const inputPickedValidate = (picked) => {
  isPickedValid.value = !picked;
};

const inputPicked = (status) => {
  inputPickedValue.value = status;
};

const inputValue = (value) => {
  inputEmailValue.value = value;
};
</script>

<style lang="scss" scoped>
.box-select-person {
  @include box-default;
}
</style>
