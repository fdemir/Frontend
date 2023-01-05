<template>
  <div
    :class="['avatar', size]"
    :style="`background-image: linear-gradient(135deg, ${c1} 0%, ${c2} 100%);`"
  >
    <img v-if="url" :src="url" :alt="name" />
    <span class="name" v-else>
      {{ name.toUpperCase().slice(0, 2) }}
    </span>
    <span v-if="status" :class="['status', status]" />
  </div>
</template>
<script setup lang="ts">
import hash from "string-hash";
import color from "tinycolor2";

const props = defineProps({
  name: { type: String, required: true, default: "Fatih" },
  size: { type: String, default: "sm" },
  status: { type: String, default: "" },
  url: { type: String, default: "" },
});

const hashed = hash(props.name);
const c = color({ h: hashed % 360, s: 0.95, l: 0.5 });
const c1 = c.toHexString();
const c2 = c.triad()[1].toHexString();
</script>

<style lang="postcss" scoped>
.avatar {
  @apply relative inline-flex items-center justify-center rounded-full bg-zinc-500;

  .name {
    @apply font-medium leading-none text-white select-none;
  }

  .status {
    @apply absolute bottom-0 right-0 block rounded-full ring-2 ring-white;

    &.online {
      @apply bg-emerald-500;
    }

    &.offline {
      @apply bg-rose-500;
    }

    &.busy {
      @apply bg-yellow-500;
    }

    &.away {
      @apply bg-zinc-300;
    }
  }

  &.xs {
    @apply h-6 w-6;
    .name {
      @apply text-xs;
    }

    .status {
      @apply h-1.5 w-1.5;
    }
  }

  &.sm {
    @apply h-8 w-8;
    .name {
      @apply text-sm;
    }
    .status {
      @apply h-2 w-2;
    }
  }

  &.md {
    @apply h-10 w-10;
    .status {
      @apply h-2.5 w-2.5;
    }
  }

  &.lg {
    @apply h-12 w-12;
    .name {
      @apply text-lg;
    }
    .status {
      @apply h-3 w-3;
    }
  }

  &.xl {
    @apply h-16 w-16;
    .name {
      @apply text-xl;
    }
    .status {
      @apply h-4 w-4;
    }
  }
}
</style>
