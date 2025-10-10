import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        en: {
            hello: 'hello',
            titles: {
                about: 'about',
                studies: 'studies',
                professional: 'professional',
            },
            contents: {
                about: "I'm Nathan Souvignet, a fourth-year Computer Science student with a strong passion for computer graphics and video game development. I enjoy bringing new ideas to life, especially by creating tools and features that empower artists and developers whether it's through innovative rendering techniques, gameplay mechanics, or engine systems. My experience spans C++, OpenGL, Godot, and web technologies, and I’m always eager to learn and experiment.",
            },
        },
        fr: {
            hello: 'bonjour',
            titles: {
                about: 'à propos',
                studies: 'études',
                professional: 'professionnel',
            },
            contents: {
                about: "Je m'appelle Nathan Souvignet, étudiant en quatrième année d’informatique, passionné par le graphisme informatique et le développement de jeux vidéo. J’aime donner vie à de nouvelles idées, notamment en créant des outils et des fonctionnalités qui facilitent le travail des artistes et des développeurs que ce soit par des techniques de rendu innovantes, des mécaniques de jeu ou des systèmes de moteur. J’ai de l’expérience en C++, OpenGL, Godot et technologies web, et je suis toujours motivé à apprendre et à expérimenter.",
            },
        },
    },
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
