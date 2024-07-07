<template>
  <div class="physical-person">
    <BoxPhysicalPerson />
  </div>
</template>

<script setup>
import BoxPhysicalPerson from "@/components/organisms/BoxPhysicalPerson.vue";
</script>

<style lang="scss" scoped>
.physical-person {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
