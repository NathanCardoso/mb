<template>
  <TheInput
    input-name="Nome"
    input-id="name"
    validate="fullName"
    @input:status="inputValidate('fullName', $event)"
  />
  <TheInput
    input-name="CPF"
    input-id="cpf"
    validate="cpf"
    @input:status="inputValidate('cpf', $event)"
  />
  <TheInput input-type="date" input-name="Data de nascimento" inputId="date-of-birth" />
  <TheInput
    input-type="tel"
    input-name="Telefone"
    input-id="telephone"
    validate="telephone"
    @input:status="inputValidate('telephone', $event)"
  />
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
import { ref, watch } from "vue";

const emit = defineEmits(["input:status"]);

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
</script>

<style lang="scss" scoped></style>
