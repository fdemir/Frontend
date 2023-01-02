import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";

import ButtonApp from "@/components/app/ButtonApp.vue";
import LoadingApp from "@/components/app/LoadingApp.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("ButtonApp", ButtonApp);
app.component("LoadingApp", LoadingApp);

app.mount("#app");
