<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center gap-5 bg-zinc-100"
  >
    <div class="flex w-full items-center justify-center gap-5">
      <ButtonApp>Test</ButtonApp>
      <SwitchApp />
      <InputApp name="test" label="test" hint="test" help="test" />
      <TextareaApp help="test" name="test" label="test" hint="test" resize />
    </div>
    <div>
      <h1>test</h1>
      <h2>test</h2>
      <h3>test</h3>
      <h4>test</h4>
    </div>
    <BadgeApp type="secondary">test</BadgeApp>
    <div class="flex flex-row-reverse items-center gap-2">
      <AvatarApp name="Fatih" size="xs" status="away" />
      <AvatarApp name="Ahmet" size="sm" status="busy" />
      <AvatarApp name="Mustafa" size="md" status="offline" />
      <AvatarApp name="Arda" size="lg" status="online" />
    </div>
    <div class="w-full py-4">
      <div
        class="mx-auto flex w-full max-w-xs flex-col gap-2 rounded-xl bg-white px-6 pt-6 pb-4 shadow-lg"
      >
        <h4>Login</h4>
        <InputApp placeholder="Kullanıcı Adı" />
        <InputApp type="password" placeholder="Şifre" />
        <CheckboxApp label="Beni Hatırla" name="test1" />
        <div class="flex w-full gap-2">
          <ButtonApp class="w-2/3 gap-2" ref="button" @click="test"
            >Login <ArrowRightIcon class="h-4 w-4"
          /></ButtonApp>
          <ButtonApp class="w-1/3" type="constract">Cancel</ButtonApp>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/20/solid";
import CheckboxApp from "./components/app/CheckboxApp.vue";
const button = ref<any>(null);

const test = () => {
  button.value?.setLoad(true);
};
</script>

<style scoped></style>
