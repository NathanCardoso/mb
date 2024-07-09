<template>
  <WelcomeView v-if="pageStep === 1" @welcome:nextPage="nextPage" />
  <PhysicalPerson
    v-else-if="pageStep === 2 && typePerson === 'physical-person'"
    @physical-person:next-page="nextPage"
    @physical-person:prev-page="prevPage"
  />
  <LegalPerson v-else-if="pageStep === 2 && typePerson === 'legal-person'" />
  <AccessPassword
    v-else-if="pageStep === 3"
    @access-password:next-page="nextPage"
    @access-password:prev-page="prevPage"
  />
  <ReviewInformation
    v-else-if="pageStep === 4"
    @review-information:prev-page="prevPage"
  />
</template>

<script setup>
import WelcomeView from "./view/WelcomeView.vue";
import PhysicalPerson from "./view/PhysicalPerson.vue";
import LegalPerson from "./view/LegalPerson.vue";
import AccessPassword from "./view/AccessPassword.vue";
import ReviewInformation from "./view/ReviewInformation.vue";
import { ref, watch } from "vue";

const pageStep = ref(1);
const typePerson = ref("");

const nextPage = (page) => {
  pageStep.value = page;
};

const prevPage = (page) => {
  pageStep.value = page;
};

const getTypePerson = () => {
  typePerson.value = window.localStorage.getItem("pickedValue");
};

watch(pageStep, (newValue) => (newValue === 2 ? getTypePerson() : null));
</script>

<style lang="scss" scoped></style>
