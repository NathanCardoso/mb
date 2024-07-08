<template>
  <main class="box-access-password">
    <TheHeader :step="3" title-message="Senha de Acesso" />
    <TheInput input-name="Sua senha" input-id="password" />
    <div class="button-actions">
      <ButtonBack text="Voltar" @click:go-back="prevPage" />
      <ButtonConfirm text="Continuar" @click:confirmed="nextPage" />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import TheInput from "../atoms/TheInput.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";

const emit = defineEmits(["access-password:next-page", "access-password:prev-page"]);

const nextPage = () => {
  emit("access-password:next-page");
};

const prevPage = () => {
  emit("access-password:prev-page");
};
</script>

<style lang="scss" scoped>
.box-access-password {
  @include box-default;

  .button-actions {
    @include button-actions;
  }
}
</style>
