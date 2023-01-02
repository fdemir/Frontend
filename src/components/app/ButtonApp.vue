<template>
  <button :class="['button', size, type]" :disabled="disabled">
    <template v-if="!loading">
      <slot />
    </template>
    <loadingApp :size="size" v-else />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  size: { type: String, default: "md" },
  type: { type: String, default: "primary" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});
</script>

<style lang="postcss" scoped>
.button {
  @apply transition-all inline-flex font-medium items-center rounded-xl border border-transparent active:scale-90 focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed disabled:active:scale-100;

  &.sm {
    @apply px-2.5 py-2 text-xs;
  }

  &.md {
    @apply px-3 py-2.5 text-sm;
  }

  &.lg {
    @apply px-4 py-2.5 text-sm;
  }

  &.primary {
    @apply bg-black text-white shadow-sm hover:opacity-80;
  }

  &.secondary {
    @apply bg-white text-black shadow-sm hover:opacity-80;
  }
}
</style>
