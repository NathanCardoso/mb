<template>
  <TheInput
    input-name="Endereço de Email"
    input-id="email"
    :input-data="inputData.email"
  />
  <template v-if="isPhysicalPerson">
    <TheInput input-name="Nome" input-id="name" :input-data="inputData.name" />
    <TheInput input-name="CPF" input-id="cpf" :input-data="inputData.cpf" />
    <TheInput input-type="date" input-name="Data de abertura" inputId="date-of-birth" />
  </template>
  <template v-else>
    <TheInput
      input-name="Razão Social"
      input-id="name"
      :input-data="inputData.corporateReason"
    />
    <TheInput input-name="CNPJ" input-id="cnpj" :input-data="inputData.cnpj" />
    <TheInput input-type="date" input-name="Data de abertura" inputId="date-of-birth" />
  </template>
  <TheInput
    input-type="tel"
    input-name="Telefone"
    input-id="telephone"
    :input-data="inputData.tel"
  />
  <TheInput input-name="Senha" input-id="password" :input-data="inputData.password" />
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

const isPhysicalPerson = computed(() => inputDataLocal.value.typePerson === "physicalPerson");
</script>

<style lang="scss" scoped></style>
