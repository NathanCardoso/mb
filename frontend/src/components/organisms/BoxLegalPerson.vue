<template>
  <main class="box-legal-person">
    <TheHeader :step="2" titleMessage="Pessoa Jurídica" />
    <InputLegalPerson />
    <div class="button-actions">
      <ButtonBack text="Voltar" />
      <ButtonConfirm text="Continuar" />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import InputLegalPerson from "../molecules/InputLegalPerson.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
</script>

<style lang="scss" scoped>
.box-legal-person {
  @include box-default;

  .button-actions {
    @include button-actions;
  }
}
</style>
