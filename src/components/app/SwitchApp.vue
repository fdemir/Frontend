<template>
  <Switch class="switch" v-model="enabled">
    <span aria-hidden="true" />
  </Switch>
</template>

<style lang="postcss">
.switch {
  @apply bg-zinc-300 items-center relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-200 ease-in-out focus:active:scale-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;

  &.switch[aria-checked="true"] {
    @apply bg-primary;

    span {
      @apply translate-x-6;
    }
  }

  span {
    @apply translate-x-1 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition-all duration-200 ease-in-out;
  }

  &:active {
    @apply bg-zinc-400;
  }
}
</style>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { Switch } from "@headlessui/vue";

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const enabled = ref(false);

watchEffect(() => emit("update:modelValue", enabled.value));
watchEffect(() => (enabled.value = props.modelValue));
</script>
