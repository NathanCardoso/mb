<template>
  <main class="box-review-information">
    <TheHeader :step="2" titleMessage="Revise suas informações" />
    <InputReviewInformation />
    <div class="button-actions">
      <ButtonBack text="Voltar" />
      <ButtonConfirm text="Continuar" />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import InputReviewInformation from "../molecules/InputReviewInformation.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
</script>

<style lang="scss" scoped>
.box-review-information {
  @include box-default;

  .button-actions {
    @include button-actions;
  }
}
</style>
