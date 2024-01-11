import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useI18n } from "vue-i18n";
import instance from "./i18n/translations";

const pinia = createPinia()

const app = createApp(App)

app.mixin({
    setup() {
        const {t} = useI18n({useScope: 'global'})
        return {t}
    }
})



app.use(router).use(instance).use(pinia).mount("#app")
