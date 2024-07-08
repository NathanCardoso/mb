<template>
  <div class="welcome-view">
    <BoxSelectPerson @select-person:next-page="nextPage" />
  </div>
</template>

<script setup>
import BoxSelectPerson from "@/components/organisms/BoxSelectPerson.vue";

const emit = defineEmits(["welcome:nextPage"]);

const nextPage = () => {
  emit("welcome:nextPage", 2);
};
</script>

<style scoped>
.welcome-view {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
