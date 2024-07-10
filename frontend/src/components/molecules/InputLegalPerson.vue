<template>
  <TheInput
    input-name="Razão Social"
    input-id="name"
    input-validate="fullName"
    @input:status="inputValidate('fullName', $event)"
    @input:value="inputValue('corporateReason', $event)"
  />
  <TheInput
    input-name="CNPJ"
    input-id="cnpj"
    input-validate="cnpj"
    @input:status="inputValidate('cnpj', $event)"
    @input:value="inputValue('cnpj', $event)"
  />
  <TheInput
    input-type="date"
    input-name="Data de abertura"
    input-id="opening-date"
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

const inputValue = (key, value) => {
  emit("input:value", { key, value });
};

watch(
  () => isFullNameValid.value && isCnpjValid.value && isTelephoneValid.value,
  (status) => emit("input:status", status)
);
</script>

<style lang="scss" scoped></style>
