<template>
  <button ref="button" :class="['button', size, type]" :disabled="disabled">
    <loadingApp :size="size" v-if="loading" />
    <slot v-else />
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const button = ref<HTMLElement | null>(null);
const loading = ref(false);

const props = defineProps({
  size: { type: String, default: "md" },
  type: { type: String, default: "primary" },
  disabled: { type: Boolean, default: false },
});

const disabled = ref(props.disabled);

const focus = () => button.value?.focus();

const setLoad = (load = false) => {
  loading.value = load;
  disabled.value = load;
};

defineExpose({
  focus,
  setLoad,
});
</script>

<style lang="postcss" scoped>
.button {
  @apply inline-flex items-center justify-center rounded-xl border border-transparent font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-90 disabled:cursor-not-allowed disabled:opacity-75 disabled:active:scale-100;

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
    @apply bg-primary text-white shadow-sm hover:opacity-80 focus:ring-primary;
  }

  &.secondary {
    @apply bg-primary/20 text-primary shadow-sm hover:bg-primary/30 focus:ring-primary/20;
  }

  &.constract {
    @apply border border-black/10 bg-white text-black shadow-sm hover:opacity-80 focus:ring-black/10;
  }
}
</style>
