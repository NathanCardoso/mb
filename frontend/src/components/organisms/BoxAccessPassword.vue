<template>
  <main class="box-access-password">
    <TheHeader :step="3" title-message="Senha de Acesso" />
    <TheInput
      input-name="Sua senha"
      input-id="password"
      validate="password"
      @input:status="inputValidate('password', $event)"
      @input:value="inputValue"
    />
    <div class="button-actions">
      <ButtonBack text="Voltar" @click:go-back="prevPage" />
      <ButtonConfirm
        text="Continuar"
        :disabled="isButtonValid"
        @click:confirmed="nextPage"
      />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import TheInput from "../atoms/TheInput.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
import { ref } from "vue";
import { setLocalStorage } from "@/js/helpers/setLocalStorage";

const emit = defineEmits([
  "access-password:next-page",
  "access-password:prev-page",
  "input:status",
]);

const password = ref("");
const isButtonValid = ref(true);

const nextPage = () => {
  setLocalStorage("password", password.value);
  emit("access-password:next-page");
};

const prevPage = () => {
  emit("access-password:prev-page");
};

const inputValue = (value) => {
  password.value = value;
};

const inputValidate = (status) => {
  isButtonValid.value = !status;
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
