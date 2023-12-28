import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import projectStore from "./store/projectStore";
import { i18n } from "./i18n/translations";
import { createPinia } from "pinia";

const pinia = createPinia()


createApp(App).use(router).use(i18n).use(pinia).mount("#app")
