<template>
  <main class="box-review-information">
    <TheHeader :step="4" titleMessage="Revise suas informações" />
    <InputReviewInformation :input-data="dataReview" />
    <div class="button-actions">
      <ButtonBack text="Voltar" @click:go-back="prevPage" />
      <ButtonConfirm text="Continuar" />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import InputReviewInformation from "../molecules/InputReviewInformation.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
import { ref, onMounted } from "vue";
import { getLocalStorage } from "@/js/helpers/localStorage";

const emit = defineEmits(["review-information:prev-page"]);

const dataReview = ref({});

const prevPage = () => {
  emit("review-information:prev-page");
};

onMounted(() => {
  const typePerson = getLocalStorage("pickedValue").replace("-person", "Person");
  const dataObject = JSON.parse(getLocalStorage(typePerson));
  const email = getLocalStorage("email");
  const password = getLocalStorage("password");

  dataReview.value = { ...dataObject, email, password, typePerson };
});
</script>

<style lang="scss" scoped>
.box-review-information {
  @include box-default;

  .button-actions {
    @include button-actions;
  }
}
</style>
