<template>
  <TheInput input-name="Endereço de Email" input-id="email" />
  <TheInput input-name="Nome" input-id="name" />
  <TheInput input-name="CNPJ" input-id="cpf" />
  <TheInput
    input-type="date"
    input-name="Data de abertura"
    inputId="data-de-nascimento"
  />
  <TheInput input-type="tel" input-name="Telefone" input-id="telefone" />
  <TheInput input-name="Senha" input-id="senha" />
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
</script>

<style lang="scss" scoped></style>
