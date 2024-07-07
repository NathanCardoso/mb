<template>
  <main class="box-review-information">
    <TheHeader :step="2" titleMessage="Revise suas informações" />
    <TheInput input-name="Endereço de Email" input-id="email" />
    <TheInput input-name="Nome" input-id="name" />
    <TheInput input-name="CNPJ" input-id="cpf" />
    <TheInput
      input-type="date"
      input-name="Data de abertura"
      inputId="data-de-nascimento"
    />
    <TheInput input-type="tel" input-name="Telefone" input-id="telefone" />
    <TheInput input-name="Senha" input-id="senha" />
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
.box-review-information {
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
