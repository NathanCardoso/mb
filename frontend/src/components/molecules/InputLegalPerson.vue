<template>
  <TheInput
    input-name="Razão Social"
    input-id="name"
    validate="fullName"
    @input:status="inputValidate('fullName', $event)"
  />
  <TheInput
    input-name="CNPJ"
    input-id="cnpj"
    validate="cnpj"
    @input:status="inputValidate('cnpj', $event)"
  />
  <TheInput input-type="date" input-name="Data de abertura" inputId="opening-date" />
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
const isCnpjValid = ref(false);
const isTelephoneValid = ref(false);

const inputValidate = (input, status) => {
  switch (input) {
    case "fullName":
      isFullNameValid.value = status;
      break;
    case "cnpj":
      isCnpjValid.value = status;
      break;
    case "telephone":
      isTelephoneValid.value = status;
      break;
  }
};

watch(
  () => isFullNameValid.value && isCnpjValid.value && isTelephoneValid.value,
  (status) => emit("input:status", status)
);
</script>

<style lang="scss" scoped></style>
