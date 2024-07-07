<template>
  <div class="select-person">
    <TheInput input-type="email" input-name="email" />
    <div class="input-radios">
      <TheInputRadio input-label="Pessoa Fisica" input-name="pessoa-fisica" />
      <TheInputRadio input-label="Pessoa Juridica" input-name="pessoa-juridica" />
    </div>
  </div>
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
import TheInputRadio from "../atoms/TheInputRadio.vue";
</script>

<style lang="scss" scoped>
.select-person {
  display: flex;
  flex-direction: column;
  gap: rem(20);

  .input-radios {
    display: flex;
    justify-content: space-between;
    gap: rem(20);
  }
}
</style>
