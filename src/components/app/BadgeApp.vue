<template>
  <span :class="['badge', size, type, { dot }, { action }]">
    <svg class="dot" fill="currentColor" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    <slot />
    <button type="button" class="action" @click="action?.event()">
      <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
      </svg>
      <component class="h-2 w-2" :is="action?.icon"></component>
    </button>
  </span>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  size: { type: String, default: "sm" },
  type: { type: String, default: "primary" },
  dot: { type: Boolean, default: false },
  action: Object,
});

const action = ref(props.action);

defineExpose({
  action,
});
</script>

<style lang="postcss" scoped>
.badge {
  @apply inline-flex items-center rounded-full font-semibold;

  .action {
    @apply hidden;
  }

  .dot {
    @apply hidden;
  }

  & .dot {
    @apply inline-flex px-1 py-0.5 text-xs;

    .dot {
      @apply -ml-0.5 mr-1.5 block h-2 w-2 opacity-50;
    }
  }

  & .action {
    @apply cursor-pointer pl-2 pr-1 !important;

    .action {
      @apply ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full focus:outline-none;
    }
  }

  & .sm {
    @apply px-2.5 py-0.5 text-xs;
  }

  & .lg {
    @apply px-3 py-0.5 text-sm;
  }

  & .primary {
    @apply bg-primary/10 text-primary;

    .action {
      @apply text-primary hover:bg-primary/20 hover:text-primary focus:bg-primary focus:text-white;
    }
  }

  & .secondary {
    @apply bg-zinc-100 text-zinc-800;

    .action {
      @apply text-zinc-400 hover:bg-zinc-200 hover:text-zinc-500 focus:bg-zinc-500 focus:text-white;
    }
  }
}
</style>
