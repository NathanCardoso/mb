<template>
  <main class="box-review-information">
    <TheHeader :step="4" titleMessage="Revise suas informações" />
    <InputReviewInformation
      :input-data="dataReview"
      @input:status="inputValidate"
      @input:value="inputValue"
    />
    <div class="button-actions">
      <ButtonBack text="Voltar" @click:go-back="prevPage" />
      <ButtonConfirm
        text="Continuar"
        :disabled="isButtonEnable"
        @click:confirmed="formSubmit"
      />
    </div>
  </main>
</template>

<script setup>
import TheHeader from "../molecules/TheHeader.vue";
import InputReviewInformation from "../molecules/InputReviewInformation.vue";
import ButtonBack from "../atoms/ButtonBack.vue";
import ButtonConfirm from "../atoms/ButtonConfirm.vue";
import { ref, computed, onMounted } from "vue";
import { getLocalStorage } from "@/js/helpers/localStorage";

const emit = defineEmits(["review-information:prev-page", "review-information:submit"]);

const typePerson = ref("");
const dataReview = ref({});
const physicalPerson = ref({});
const legalPerson = ref({});
const isButtonEnable = ref(null);

const isPhysicalPerson = computed(() => typePerson.value === "physicalPerson");

const prevPage = () => {
  emit("review-information:prev-page");
};

const inputValue = ({ key, value }) => {
  if (isPhysicalPerson.value) physicalPerson.value[key] = value;
  legalPerson.value[key] = value;
};

const inputValidate = (status) => {
  status ? (isButtonEnable.value = !status) : null;
};

const formSubmit = () => {
  isPhysicalPerson.value
    ? emit("review-information:submit", physicalPerson)
    : emit("review-information:submit", legalPerson);
};

onMounted(() => {
  typePerson.value = getLocalStorage("pickedValue").replace("-person", "Person");
  const dataObject = JSON.parse(getLocalStorage(typePerson.value));
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
