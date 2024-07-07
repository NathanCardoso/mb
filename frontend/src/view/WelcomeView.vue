<template>
  <div class="welcome-view">
    <BoxSelectPerson />
  </div>
</template>

<script setup>
import BoxSelectPerson from "@/components/organisms/BoxSelectPerson.vue";
</script>

<style scoped>
.welcome-view {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
