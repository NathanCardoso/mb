<template>
  <div class="legal-person">
    <BoxAccessPassword
      @access-password:next-page="nextPage"
      @access-password:prev-page="prevPage"
    />
  </div>
</template>

<script setup>
import BoxAccessPassword from "@/components/organisms/BoxAccessPassword.vue";

const emit = defineEmits(["access-password:next-page", "access-password:prev-page"]);

const nextPage = () => {
  emit("access-password:next-page", 4);
};

const prevPage = () => {
  emit("access-password:prev-page", 2);
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
