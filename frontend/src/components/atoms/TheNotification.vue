<template>
  <div :class="notificationApp">
    <p class="paragraph" :class="{ error: errorRequest }">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

defineProps({
  message: {
    type: String,
    required: true,
  },
  errorRequest: {
    type: Boolean,
    default: false,
  },
});

const notificationApp = ref("the-notification start");

onMounted(() =>
  setTimeout(() => {
    notificationApp.value = "the-notification end";
  }, 5000)
);
</script>

<style lang="scss" scoped>
.the-notification {
  background: $whiteSecondary;
  border: rem(2) solid $yellow;
  border-radius: rem(10);
  padding: rem(16) rem(20);
  width: max-content;
  position: absolute;
  right: rem(20);
  z-index: 999;
  max-width: rem(320);
  position: absolute;
  top: 0;
  right: 5%;

  &.start {
    animation: animeStart 0.5s forwards;
  }

  &.end {
    animation: animeEnd 0.5s forwards;
  }

  .paragraph {
    color: $yellow;
    font-weight: bold;

    &.error {
      color: $redPrimary;
    }
  }
}

@keyframes animeStart {
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(40%);
  }
}

@keyframes animeEnd {
  from {
    opacity: 1;
    transform: translateY(40%);
  }
  to {
    opacity: 0;
    transform: translateY(-50%);
    display: none;
  }
}

@media screen and (max-width: 479px) {
  .the-notification-entrance,
  .the-notification-exit {
    max-width: rem(225);
  }
}
</style>
