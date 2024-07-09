<template>
  <div class="select-person">
    <TheInput input-type="email" input-name="email" @input:status="inputValidate" />
    <div class="input-radios">
      <TheInputRadio
        input-label="Pessoa Fisica"
        input-name="physical-person"
        input-value="physical-person"
        v-model:picked="pickedValue"
      />
      <TheInputRadio
        input-label="Pessoa Juridica"
        input-name="legal-person"
        input-value="legal-person"
        v-model:picked="pickedValue"
      />
    </div>
  </div>
</template>

<script setup>
import TheInput from "../atoms/TheInput.vue";
import TheInputRadio from "../atoms/TheInputRadio.vue";
import { ref, watch } from "vue";

const emit = defineEmits(["input:status", "input:picked"]);

const pickedValue = ref("");

watch(pickedValue, (newValue) => emit("input:picked", newValue));

const inputValidate = (status) => {
  emit("input:status", status);
};
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
