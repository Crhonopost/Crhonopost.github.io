import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import projectStore from "./store/projectStore";
import { i18n } from "./i18n/translations"

createApp(App).use(projectStore).use(router).use(i18n).mount("#app")
