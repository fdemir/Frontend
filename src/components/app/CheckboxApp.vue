<template>
  <div :class="['checkbox', { disabled }]">
    <input
      :id="name"
      :name="name"
      type="checkbox"
      :value="modelValue"
      @input="updateValue"
      :disabled="disabled"
    />
    <label v-if="label" :for="name">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  const checkbox = event.target as HTMLInputElement;
  const value = checkbox.checked;
  emit("update:modelValue", value);
};
</script>

<style lang="postcss" scoped>
.checkbox {
  @apply flex select-none items-center gap-2;

  &.disabled {
    @apply cursor-not-allowed opacity-50;

    label {
      @apply cursor-not-allowed;
    }
  }
}
</style>
