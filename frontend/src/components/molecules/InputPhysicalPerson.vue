<template>
  <TheInput
    input-name="Nome"
    input-id="name"
    input-validate="fullName"
    @input:status="inputValidate('fullName', $event)"
    @input:value="inputValue('name', $event)"
  />
  <TheInput
    input-name="CPF"
    input-id="cpf"
    input-validate="cpf"
    @input:status="inputValidate('cpf', $event)"
    @input:value="inputValue('cpf', $event)"
  />
  <TheInput
    input-type="date"
    input-name="Data de nascimento"
    inputId="date-of-birth"
    input-validate="date"
    @input:status="inputValidate('date', $event)"
    @input:value="inputValue('date', $event)"
  />
  <TheInput
    input-type="tel"
    input-name="Telefone"
    input-id="telephone"
    input-validate="telephone"
    @input:status="inputValidate('telephone', $event)"
    @input:value="inputValue('tel', $event)"
  />
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
import { ref, watch } from "vue";

const emit = defineEmits(["input:status", "input:value"]);

const isFullNameValid = ref(false);
const isCpfValid = ref(false);
const isTelephoneValid = ref(false);

const inputValidate = (input, status) => {
  switch (input) {
    case "fullName":
      isFullNameValid.value = status;
      break;
    case "cpf":
      isCpfValid.value = status;
      break;
    case "telephone":
      isTelephoneValid.value = status;
      break;
  }
};

watch(
  () => isFullNameValid.value && isCpfValid.value && isTelephoneValid.value,
  (status) => emit("input:status", status)
);

const inputValue = (key, value) => {
  emit("input:value", { key, value });
};
</script>

<style lang="scss" scoped></style>
