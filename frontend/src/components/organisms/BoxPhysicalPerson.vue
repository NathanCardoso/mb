<template>
  <main class="box-physical-person">
    <TheHeader :step="2" titleMessage="Pessoa Física" />
    <InputPhysicalPerson />
    <div class="button-actions">
      <ButtonBack text="Voltar" @click:go-back="prevPage" />
      <ButtonConfirm text="Continuar" @click:confirmed="nextPage" />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import InputPhysicalPerson from "../molecules/InputPhysicalPerson.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";

const emit = defineEmits(["physical-person:next-page", "physical-person:prev-page"]);

const nextPage = () => {
  emit("physical-person:next-page");
};

const prevPage = () => {
  emit("physical-person:prev-page");
};
</script>

<style lang="scss" scoped>
.box-physical-person {
  @include box-default;

  .button-actions {
    @include button-actions;
  }
}
</style>
