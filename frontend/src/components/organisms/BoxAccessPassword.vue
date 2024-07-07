<template>
  <main class="box-access-password">
    <TheHeader :step="3" title-message="Senha de Acesso" />
    <TheInput input-name="Sua senha" input-id="sua-senha" />
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
  display: flex;
  flex-direction: column;
  gap: rem(20);
  max-width: rem(400);
  flex-grow: 1;

  .button-actions {
    display: flex;
    justify-content: space-between;
    gap: rem(20);
  }
}
</style>
