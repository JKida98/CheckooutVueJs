import { createPinia } from "pinia";
import { createApp } from "vue";
import "./assets/base.css";
import { plugin, defaultConfig } from "@formkit/vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(plugin, defaultConfig);
app.use(createPinia());
app.use(router);

app.mount("#app");
