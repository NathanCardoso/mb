<template>
  <main class="box-physical-person">
    <TheHeader :step="2" titleMessage="Pessoa Física" />
    <InputPhysicalPerson @input:status="inputValidate" @input:value="inputValue" />
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
import InputPhysicalPerson from "../molecules/InputPhysicalPerson.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
import { ref } from "vue";
import { setLocalStorage } from "@/js/helpers/setLocalStorage";

const emit = defineEmits(["physical-person:next-page", "physical-person:prev-page"]);

const isButtonEnable = ref(true);
const physicalPerson = ref({});

const nextPage = () => {
  setLocalStorage("physicalPerson", JSON.stringify(physicalPerson.value));
  emit("physical-person:next-page");
};

const prevPage = () => {
  emit("physical-person:prev-page");
};

const inputValue = ({ key, value }) => {
  physicalPerson.value[key] = value;
};

const inputValidate = (status) => {
  status ? (isButtonEnable.value = !status) : null;
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
