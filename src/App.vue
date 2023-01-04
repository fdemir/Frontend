<template>
  <div class="h-screen w-full flex flex-col items-center gap-5 justify-center">
    <div class="w-full flex justify-center gap-5 items-center">
      <ButtonApp ref="button" @click="test">Test</ButtonApp>
      <SwitchApp />
      <InputApp name="test" />
    </div>
    <div>
      <h1>test</h1>
      <h2>test</h2>
      <h3>test</h3>
      <h4>test</h4>
    </div>
    <BadgeApp type="secondary">test</BadgeApp>
    <div class="flex gap-2 items-center flex-row-reverse">
      <AvatarApp name="Fatih" size="xs" />
      <AvatarApp name="Ahmet" size="sm" />
      <AvatarApp name="Mustafa" size="md" />
      <AvatarApp name="Arda" size="lg" status="online" />
      <AvatarApp name="Test" size="xl" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const button = ref<any>(null);

const test = (): void => {
  button.value?.setLoad(true);
  setTimeout(() => {
    button.value?.setLoad(false);
  }, 2000);
};
</script>

<style scoped></style>
