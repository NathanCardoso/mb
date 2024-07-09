<template>
  <main class="box-legal-person">
    <TheHeader :step="2" titleMessage="Pessoa Jurídica" />
    <InputLegalPerson @input:status="inputValidate" @input:value="inputValue" />
    <div class="button-actions">
      <ButtonBack text="Voltar" @click:go-back="prevPage" />
      <ButtonConfirm
        text="Continuar"
        :disabled="isButtonEnable"
        @click:confirmed="nextPage"
      />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import InputLegalPerson from "../molecules/InputLegalPerson.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
import { ref } from "vue";
import { setLocalStorage, removeLocalStorage } from "@/js/helpers/localStorage";

const emit = defineEmits(["legal-person:next-page", "legal-person:prev-page"]);

const isButtonEnable = ref(true);
const legalPerson = ref({});

const nextPage = () => {
  removeLocalStorage("physicalPerson");
  setLocalStorage("legalPerson", JSON.stringify(legalPerson.value));
  emit("legal-person:next-page");
};

const prevPage = () => {
  emit("legal-person:prev-page");
};

const inputValue = ({ key, value }) => {
  legalPerson.value[key] = value;
};

const inputValidate = (status) => {
  status ? (isButtonEnable.value = !status) : null;
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
