<template>
  <TheInput input-name="Nome" input-id="name" />
  <TheInput input-name="CNPJ" input-id="cpf" />
  <TheInput input-type="date" input-name="Data de abertura" inputId="opening-date" />
  <TheInput input-type="tel" input-name="Telefone" input-id="telephone" />
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
</script>

<style lang="scss" scoped></style>
