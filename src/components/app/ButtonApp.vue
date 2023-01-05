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

const focus = () => {
  button.value?.focus();
};

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
  @apply transition-all inline-flex justify-center font-semibold items-center rounded-xl border border-transparent active:scale-90 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed disabled:active:scale-100;

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
    @apply bg-white border border-black/10 text-black shadow-sm hover:opacity-80 focus:ring-black/10;
  }
}
</style>
