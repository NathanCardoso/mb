<template>
  <main class="box-legal-person">
    <TheHeader :step="2" titleMessage="Pessoa Jurídica" />
    <InputLegalPerson />
    <div class="button-actions">
      <ButtonBack text="Voltar" @click:go-back="prevPage" />
      <ButtonConfirm text="Continuar" @click:confirmed="nextPage" />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import InputLegalPerson from "../molecules/InputLegalPerson.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";

const emit = defineEmits(["legal-person:next-page", "legal-person:prev-page"]);

const nextPage = () => {
  emit("legal-person:next-page");
};

const prevPage = () => {
  emit("legal-person:prev-page");
};
</script>

<style lang="scss" scoped>
.box-legal-person {
  @include box-default;

  .button-actions {
    @include button-actions;
  }
}
</style>
