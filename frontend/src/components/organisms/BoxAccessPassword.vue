<template>
  <main class="box-access-password">
    <TheHeader :step="3" title-message="Senha de Acesso" />
    <TheInput input-name="Sua senha" input-id="password" />
    <div class="button-actions">
      <ButtonBack text="Voltar" />
      <ButtonConfirm text="Continuar" />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import TheInput from "../atoms/TheInput.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
</script>

<style lang="scss" scoped>
.box-access-password {
  @include box-default;

  .button-actions {
    @include button-actions;
  }
}
</style>
