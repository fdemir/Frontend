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
    @apply absolute inset-0 m-auto block h-8 w-8;
    animation: loading-2 1.2s linear infinite;

    & ::after {
      @apply absolute inset-0 m-auto h-8 w-8 rounded-full border-[3px] border-[v-bind(color)] content-[''];
      animation: loading-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
  }

  & .xs {
    @apply h-3 w-3;

    .load {
      @apply h-3 w-3;
      clip: rect(0, 12px, 12px, 6px);

      & ::after {
        @apply h-3 w-3 border-2;
        clip: rect(0, 12px, 12px, 6px);
      }
    }
  }

  & .sm {
    @apply h-4 w-4;

    .load {
      @apply h-4 w-4;
      clip: rect(0, 16px, 16px, 8px);

      & ::after {
        @apply h-4 w-4 border-2;
        clip: rect(0, 16px, 16px, 8px);
      }
    }
  }

  & .md {
    @apply h-5 w-5;

    .load {
      @apply h-5 w-5;
      clip: rect(0, 20px, 20px, 10px);

      & ::after {
        @apply h-5 w-5 border-2;
        clip: rect(0, 20px, 20px, 10px);
      }
    }
  }

  & .lg {
    @apply h-6 w-6;

    .load {
      @apply h-6 w-6;
      clip: rect(0, 24px, 24px, 12px);

      & ::after {
        @apply h-6 w-6 border-[3px];
        clip: rect(0, 24px, 24px, 12px);
      }
    }
  }

  & .xl {
    @apply h-7 w-7;

    .load {
      @apply h-7 w-7;
      clip: rect(0, 28px, 28px, 14px);

      & ::after {
        @apply h-7 w-7 border-[3px];
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
