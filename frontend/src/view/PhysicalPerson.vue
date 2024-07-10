<template>
  <div class="physical-person">
    <BoxPhysicalPerson
      @physical-person:next-page="nextPage"
      @physical-person:prev-page="prevPage"
    />
  </div>
</template>

<script setup>
import BoxPhysicalPerson from "@/components/organisms/BoxPhysicalPerson.vue";

const emit = defineEmits(["physical-person:next-page", "physical-person:prev-page"]);

const nextPage = () => {
  emit("physical-person:next-page", 3);
};

const prevPage = () => {
  emit("physical-person:prev-page", 1);
};
</script>

<style lang="scss" scoped>
.physical-person {
  @include view-default;
}
</style>
