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
      :error-request="errorRequest"
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

const { data, loading, request } = useFetch();
const notification = ref(false);
const messageNotification = ref("");
const idTimeoutNotification = ref(null);
const idTimeoutPrevPage = ref(null);
const errorRequest = ref(false);

watch(notification, (newValue) => {
  if (newValue) {
    idTimeoutNotification.value = setTimeout(() => {
      notification.value = !newValue;
    }, 5000);

    clearTimeout(idTimeoutNotification);
  }
});

const prevPage = () => {
  emit("review-information:prev-page", 1);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleSubmit = async (form) => {
  const { urlApi, options } = POST_USER(form.value);
  await request(urlApi, options);

  if (data.value.message) {
    messageNotification.value = data.value.message;
    errorRequest.value = true;
  }

  if (data.value.id) {
    messageNotification.value = "Usuário cadastrado com sucesso";
    errorRequest.value = false;
  }

  notification.value = true;
  scrollToTop();

  idTimeoutPrevPage.value = setTimeout(() => {
    prevPage();
  }, 5000);
  clearTimeout(idTimeoutPrevPage);
};
</script>

<style lang="scss" scoped>
.review-information {
  @include view-alt;
}
</style>
