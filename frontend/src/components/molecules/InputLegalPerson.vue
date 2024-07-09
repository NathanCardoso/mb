<template>
  <TheInput input-name="Razão Social" input-id="name" validate="fullName" />
  <TheInput input-name="CNPJ" input-id="cnpj" validate="cnpj" />
  <TheInput input-type="date" input-name="Data de abertura" inputId="opening-date" />
  <TheInput
    input-type="tel"
    input-name="Telefone"
    input-id="telephone"
    validate="telephone"
  />
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
</script>

<style lang="scss" scoped></style>
