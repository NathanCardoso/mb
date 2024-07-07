<template>
  <main class="box-select-person">
    <TheHeader :step="1" />
    <SelectPerson />
    <ButtonConfirm text="Continuar" />
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import SelectPerson from "../molecules/SelectPerson.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
</script>

<style lang="scss" scoped>
.box-select-person {
  display: flex;
  flex-direction: column;
  gap: rem(20);
  max-width: rem(400);
  flex-grow: 1;
}
</style>
