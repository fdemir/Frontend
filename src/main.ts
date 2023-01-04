import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";

import AvatarApp from "@/components/app/AvatarApp.vue";
import ButtonApp from "@/components/app/ButtonApp.vue";
import SwitchApp from "@/components/app/SwitchApp.vue";
import LoadingApp from "@/components/app/LoadingApp.vue";
import InputApp from "@/components/app/InputApp.vue";
import BadgeApp from "@/components/app/BadgeApp.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("ButtonApp", ButtonApp);
app.component("LoadingApp", LoadingApp);
app.component("SwitchApp", SwitchApp);
app.component("InputApp", InputApp);
app.component("BadgeApp", BadgeApp);
app.component("AvatarApp", AvatarApp);

app.mount("#app");
