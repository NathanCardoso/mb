<template>
  <TheInput input-name="Nome" input-id="name" />
  <TheInput input-name="CPF" input-id="cpf" />
  <TheInput
    input-type="date"
    input-name="Data de nascimento"
    inputId="data-de-nascimento"
  />
  <TheInput input-type="tel" input-name="Telefone" input-id="telefone" />
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
</script>

<style lang="scss" scoped></style>
