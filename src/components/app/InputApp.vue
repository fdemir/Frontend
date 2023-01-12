<template>
  <div
    :class="[
      'input',
      props.type === 'password' ? 'right' : icon?.direction,
      { error },
      props.type,
    ]"
  >
    <div class="flex justify-between" v-if="label || hint">
      <label :for="name">{{ label }}</label>
      <span class="hint">{{ hint }}</span>
    </div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <input
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        @input="updateValue"
      />
      <div class="icon" @click="togglePassword">
        <component
          :is="
            error
              ? ExclamationCircleIcon
              : props.type !== 'password'
              ? icon?.icon
              : passwordShow
              ? EyeIcon
              : EyeSlashIcon
          "
        ></component>
      </div>
    </div>
    <p class="message" v-if="help || error">
      {{ error || help }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/vue/20/solid";

const props = defineProps({
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  hint: { type: String, default: "" },
  help: { type: String, default: "" },
  error: { type: String, default: "" },
  name: { type: String, required: true },
  icon: Object,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const passwordShow = ref(false);
const type = ref(props.type);

const togglePassword = () => {
  if (props.type === "password") {
    passwordShow.value = !passwordShow.value;
    type.value = passwordShow.value ? "text" : "password";
  }
};

const updateValue = (event: Event) =>
  emit("update:modelValue", (event.target as HTMLInputElement).value);
</script>

<style lang="postcss" scoped>
.input {
  label {
    @apply block text-sm font-medium capitalize text-zinc-700;
  }

  .hint {
    @apply w-full select-none text-right text-xs capitalize text-zinc-500;
  }

  input {
    @apply block w-full rounded-md border-transparent bg-gray-200/70 py-2.5 text-sm font-medium focus:border-primary focus:bg-transparent focus:ring-primary disabled:cursor-not-allowed disabled:border-zinc-200 disabled:bg-zinc-50 disabled:text-zinc-500 sm:text-xs;
  }

  .icon {
    @apply absolute inset-y-0 right-0 flex items-center pr-3;

    svg {
      @apply h-5 w-5 text-zinc-400;
    }
  }

  .message {
    @apply mt-1 select-none text-xs capitalize text-zinc-500;
  }

  & .error {
    input {
      @apply border-rose-300 pl-2 pr-10 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:outline-none focus:ring-rose-500;
    }

    .message {
      @apply text-rose-600;
    }

    .icon {
      @apply pointer-events-none !important;

      svg {
        @apply h-5 w-5 text-rose-400;
      }
    }
  }

  & .password {
    input {
      @apply pr-10;
    }

    .icon {
      @apply pointer-events-auto absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 transition-transform hover:opacity-70 active:scale-90 !important;
    }
  }

  & .left {
    input {
      @apply pr-2 pl-10;
    }

    .icon {
      @apply left-0 right-[unset] pl-3 !important;
    }
  }

  & .right {
    input {
      @apply pr-10 pl-2;
    }

    .icon {
      @apply right-0 left-[unset] pr-3 !important;
    }
  }
}
</style>
