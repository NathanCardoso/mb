<template>
  <TheInput input-name="Nome" input-id="name" validate="fullName" />
  <TheInput input-name="CPF" input-id="cpf" validate="cpf" />
  <TheInput input-type="date" input-name="Data de nascimento" inputId="date-of-birth" />
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
