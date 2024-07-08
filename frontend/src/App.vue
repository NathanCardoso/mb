<template>
  <WelcomeView v-if="pageStep === 1" @welcome:nextPage="nextPage" />
  <PhysicalPerson
    v-else-if="pageStep === 2"
    @physical-person:next-page="nextPage"
    @physical-person:prev-page="prevPage"
  />
  <LegalPerson v-else-if="false" />
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
import { ref } from "vue";

const pageStep = ref(1);

const nextPage = (page) => {
  pageStep.value = page;
};

const prevPage = (page) => {
  pageStep.value = page;
};
</script>

<style lang="scss" scoped></style>
