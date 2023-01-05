<template>
  <div :class="['checkbox', { disabled }]">
    <input
      :id="id"
      :name="name"
      type="radio"
      :value="modelValue"
      @input="updateValue"
      :disabled="disabled"
    />
    <label v-if="label" :for="id">
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
  id: {
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

const updateValue = (e: any) => {
  emit("update:modelValue", e.target.checked);
};
</script>

<style lang="postcss" scoped>
.checkbox {
  @apply flex items-center gap-2 select-none;

  &.disabled {
    @apply cursor-not-allowed opacity-50;

    label {
      @apply cursor-not-allowed;
    }
  }
}
</style>
