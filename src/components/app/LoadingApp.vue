<template>
  <div :class="['loading', size]">
    <span class="load"></span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  size: { type: String, default: "sm" },
  color: { type: String, default: "" },
});
</script>

<style lang="postcss" scoped>
.loading {
  animation: loading-1 4.8s linear infinite;

  .load {
    @apply block absolute inset-0 w-8 h-8 m-auto;
    animation: loading-2 1.2s linear infinite;

    & ::after {
      @apply content-[''] absolute inset-0 m-auto w-8 h-8 border-[3px] border-[v-bind(color)] rounded-full;
      animation: loading-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
  }

  & .xs {
    @apply w-3 h-3;

    .load {
      @apply w-3 h-3;
      clip: rect(0, 12px, 12px, 6px);

      & ::after {
        @apply w-3 h-3 border-2;
        clip: rect(0, 12px, 12px, 6px);
      }
    }
  }

  & .sm {
    @apply w-4 h-4;

    .load {
      @apply w-4 h-4;
      clip: rect(0, 16px, 16px, 8px);

      & ::after {
        @apply w-4 h-4 border-2;
        clip: rect(0, 16px, 16px, 8px);
      }
    }
  }

  & .md {
    @apply w-5 h-5;

    .load {
      @apply w-5 h-5;
      clip: rect(0, 20px, 20px, 10px);

      & ::after {
        @apply w-5 h-5 border-2;
        clip: rect(0, 20px, 20px, 10px);
      }
    }
  }

  & .lg {
    @apply w-6 h-6;

    .load {
      @apply w-6 h-6;
      clip: rect(0, 24px, 24px, 12px);

      & ::after {
        @apply w-6 h-6 border-[3px];
        clip: rect(0, 24px, 24px, 12px);
      }
    }
  }

  & .xl {
    @apply w-7 h-7;

    .load {
      @apply w-7 h-7;
      clip: rect(0, 28px, 28px, 14px);

      & ::after {
        @apply w-7 h-7 border-[3px];
        clip: rect(0, 28px, 28px, 14px);
      }
    }
  }
}

@-webkit-keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes loading-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loading-2 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(220deg);
  }
}

@keyframes loading-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(220deg);
  }
}

@-webkit-keyframes loading-3 {
  0% {
    -webkit-transform: rotate(-140deg);
  }
  50% {
    -webkit-transform: rotate(-160deg);
  }
  100% {
    -webkit-transform: rotate(140deg);
  }
}

@keyframes loading-3 {
  0% {
    transform: rotate(-140deg);
  }
  50% {
    transform: rotate(-160deg);
  }
  100% {
    transform: rotate(140deg);
  }
}
</style>
