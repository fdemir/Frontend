<template>
  <div :class="['textarea', { resize }, { error }]">
    <div class="flex justify-between" v-if="label || hint">
      <label :for="name">{{ label }}</label>
      <span class="hint">{{ hint }}</span>
    </div>
    <div class="mt-1">
      <textarea
        ref="textarea"
        rows="5"
        :name="name"
        :id="name"
        :reszie="resize"
        :placeholder="placeholder"
        @input="resizeChange"
      />
    </div>
    <p class="message" v-if="help || error">
      {{ error || help }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const textarea = ref<HTMLElement | null>(null);

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    requirose: true,
  },
  resize: {
    type: Boolean,
    default: true,
  },
  autoHeight: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
    default: "",
  },
  help: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
});

const resizeChange = () => {
  if (!(textarea.value && props.autoHeight)) return;

  textarea.value.style.height = textarea.value.scrollHeight + 10 + "px";
  textarea.value.style.height = "auto";
};
</script>

<style lang="postcss" scoped>
.textarea {
  label {
    @apply block text-sm font-medium capitalize text-zinc-700;
  }

  textarea {
    @apply block w-full resize-none rounded-md border-transparent bg-gray-200/70 text-sm focus:border-primary focus:bg-transparent focus:ring-primary sm:text-xs;
  }

  .hint {
    @apply w-full select-none text-right text-xs capitalize text-zinc-500;
  }

  .message {
    @apply mt-1 select-none text-xs capitalize text-zinc-500;
  }

  &.resize {
    textarea {
      @apply resize-y;
    }
  }

  &.error {
    textarea {
      @apply border-rose-300 pl-2 pr-10 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:outline-none focus:ring-rose-500;
    }

    .message {
      @apply text-rose-600 !important;
    }
  }
}
</style>
