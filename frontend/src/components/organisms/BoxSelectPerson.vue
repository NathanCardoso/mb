<template>
  <main class="box-select-person">
    <TheHeader :step="1" title-message="Seja bem vindo(a)" />
    <SelectPerson />
    <ButtonConfirm text="Continuar" @click:confirmed="nextPage" />
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import SelectPerson from "../molecules/SelectPerson.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";

const emit = defineEmits(["select-person:next-page"]);

const nextPage = () => {
  emit("select-person:next-page", 2);
};
</script>

<style lang="scss" scoped>
.box-select-person {
  @include box-default;
}
</style>
