import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n, useI18n } from "vue-i18n";
import { lang } from "./i18n/translations";

const i18n = createI18n({locale: 'fr', fallbackLocale: 'en', messages: lang, legacy:false})

createApp(App).use(store).use(router).use(i18n).mount("#app")
