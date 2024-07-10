<template>
  <div class="review-information">
    <BoxReviewInformation
      :review-loading="loading"
      @review-information:submit="handleSubmit"
      @review-information:prev-page="prevPage"
    />
    <TheNotification
      v-if="notification"
      :message="messageNotification"
      :error-request="error"
    />
  </div>
</template>

<script setup>
import BoxReviewInformation from "@/components/organisms/BoxReviewInformation.vue";
import TheNotification from "@/components/atoms/TheNotification.vue";
import { POST_USER } from "@/api-params/postForm";
import useFetch from "@/composables/useFetch";
import { ref, watch } from "vue";

const emit = defineEmits(["review-information:prev-page"]);

const { data, error, loading, request } = useFetch();
const notification = ref(false);
const messageNotification = ref("Usuário cadastrado com sucesso");
const idTimeout = ref(null);

watch(notification, (newValue) => {
  if (newValue) {
    idTimeout.value = setTimeout(() => {
      notification.value = !newValue;
    }, 5000);

    clearTimeout(idTimeout);
  }
});

const handleSubmit = async (form) => {
  const { urlApi, options } = POST_USER(form.value);
  await request(urlApi, options);

  if (data.value === null) messageNotification.value = error.value;

  notification.value = true;
  scrollToTop();
};

const prevPage = () => {
  emit("review-information:prev-page", 3);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.review-information {
  @include view-alt;
}
</style>
