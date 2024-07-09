<template>
  <main class="box-select-person">
    <TheHeader :step="1" title-message="Seja bem vindo(a)" />
    <SelectPerson @input:status="inputValidate" @input:picked="inputPickedValidate" />
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
import { ref, computed } from "vue";

const emit = defineEmits(["select-person:next-page"]);

const isEmailValid = ref(true);
const isPickedValid = ref(true);
const isButtonEnable = computed(
  () => isEmailValid.value === false && isPickedValid.value === false
);

const nextPage = () => {
  emit("select-person:next-page", 2);
};

const inputValidate = (status) => {
  isEmailValid.value = !status;
};

const inputPickedValidate = (status) => {
  isPickedValid.value = !status;
};
</script>

<style lang="scss" scoped>
.box-select-person {
  @include box-default;
}
</style>
