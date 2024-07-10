<template>
  <div class="review-information">
    <BoxReviewInformation
      @review-information:submit="handleSubmit"
      @review-information:prev-page="prevPage"
    />
  </div>
</template>

<script setup>
import BoxReviewInformation from "@/components/organisms/BoxReviewInformation.vue";
import { POST_USER } from "@/api-params/postForm";
import useFetch from "@/composables/useFetch";

const emit = defineEmits(["review-information:prev-page"]);

const { data, error, loading, request } = useFetch();

const handleSubmit = async (form) => {
  const { urlApi, options } = POST_USER(form.value);
  await request(urlApi, options);
};

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
