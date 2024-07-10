<template>
  <TheInput
    input-name="Endereço de Email"
    input-id="email"
    input-validate="email"
    :input-data="inputData.email"
  />
  <template v-if="isPhysicalPerson">
    <TheInput
      input-name="Nome"
      input-id="name"
      input-validate="fullName"
      :input-data="inputData.name"
    />
    <TheInput
      input-name="CPF"
      input-id="cpf"
      input-validate="cpf"
      :input-data="inputData.cpf"
    />
    <TheInput
      input-type="text"
      input-name="Data de nascimento"
      input-id="date-of-birth"
      input-validate="date"
    />
  </template>
  <template v-else>
    <TheInput
      input-name="Razão Social"
      input-id="name"
      input-validate="fullName"
      :input-data="inputData.corporateReason"
    />
    <TheInput
      input-name="CNPJ"
      input-id="cnpj"
      input-validate="cnpj"
      :input-data="inputData.cnpj"
    />
    <TheInput
      input-type="text"
      input-name="Data de abertura"
      input-id="opening-date"
      input-validate="date"
    />
  </template>
  <TheInput
    input-type="tel"
    input-name="Telefone"
    input-id="telephone"
    input-validate="tel"
    :input-data="inputData.tel"
  />
  <TheInput
    input-name="Senha"
    input-id="password"
    input-validate="password"
    :input-data="inputData.password"
  />
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
import { ref, computed, nextTick } from "vue";

const props = defineProps({
  inputData: {
    type: Object,
    default: () => {},
  },
});

const inputDataLocal = ref({});

nextTick(() => (inputDataLocal.value = { ...props.inputData }));

const isPhysicalPerson = computed(
  () => inputDataLocal.value.typePerson === "physicalPerson"
);
</script>

<style lang="scss" scoped></style>
