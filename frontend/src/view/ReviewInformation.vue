<template>
  <div class="review-information">
    <BoxReviewInformation @review-information:prev-page="prevPage" />
  </div>
</template>

<script setup>
import BoxReviewInformation from "@/components/organisms/BoxReviewInformation.vue";

const emit = defineEmits(["review-information:prev-page"]);

const prevPage = () => {
  emit("review-information:prev-page", 3);
};
</script>

<style lang="scss" scoped>
.review-information {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
