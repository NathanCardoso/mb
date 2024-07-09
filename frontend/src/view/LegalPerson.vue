<template>
  <div class="legal-person">
    <BoxLegalPerson
      @legal-person:next-page="nextPage"
      @legal-person:prev-page="prevPage"
    />
  </div>
</template>

<script setup>
import BoxLegalPerson from "@/components/organisms/BoxLegalPerson.vue";

const emit = defineEmits(["legal-person:next-page", "legal-person:prev-page"]);

const nextPage = () => {
  emit("legal-person:next-page", 3);
};

const prevPage = () => {
  emit("legal-person:prev-page", 1);
};
</script>

<style lang="scss" scoped>
.legal-person {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
