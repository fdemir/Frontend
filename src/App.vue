<template>
  <div
    class="h-screen bg-zinc-100 w-full flex flex-col items-center gap-5 justify-center"
  >
    <div class="w-full flex justify-center gap-5 items-center">
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
    <div class="flex gap-2 items-center flex-row-reverse">
      <AvatarApp name="Fatih" size="xs" status="away" />
      <AvatarApp name="Ahmet" size="sm" status="busy" />
      <AvatarApp name="Mustafa" size="md" status="offline" />
      <AvatarApp name="Arda" size="lg" status="online" />
    </div>
    <div class="w-full py-4">
      <div
        class="mx-auto bg-white shadow-lg px-6 pt-6 pb-4 rounded-xl max-w-xs w-full gap-2 flex flex-col"
      >
        <h4>Login</h4>
        <InputApp placeholder="Kullanıcı Adı" />
        <InputApp type="password" placeholder="Şifre" />
        <CheckboxApp label="Beni Hatırla" name="test1" />
        <div class="gap-2 flex w-full">
          <ButtonApp class="w-2/3 gap-2" ref="button" @click="test"
            >Login <ArrowRightIcon class="w-4 h-4"
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

const test = (): void => {
  button.value?.setLoad(true);
};
</script>

<style scoped></style>
