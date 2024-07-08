<template>
  <main class="box-review-information">
    <TheHeader :step="4" titleMessage="Revise suas informações" />
    <InputReviewInformation />
    <div class="button-actions">
      <ButtonBack text="Voltar" @click:go-back="prevPage" />
      <ButtonConfirm text="Continuar" />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import InputReviewInformation from "../molecules/InputReviewInformation.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";

const emit = defineEmits(["review-information:prev-page"]);

const prevPage = () => {
  emit("review-information:prev-page");
};
</script>

<style lang="scss" scoped>
.box-review-information {
  @include box-default;

  .button-actions {
    @include button-actions;
  }
}
</style>
