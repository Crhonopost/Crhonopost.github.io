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
            viewMore: 'view more',
            titles: {
                about: 'about',
                studies: 'studies',
                professional: 'professional',
                skills: 'skills',
                projects: 'projects',
                links: 'links',
                technologies: 'technologies',
                context: 'context',
                learning: 'learning',
            },
            descriptions: {
                skills: 'Here are some of the skills I have acquired over the years.',
            },
            contents: {
                about: "I'm Nathan Souvignet, a fourth-year Computer Science student with a strong passion for computer graphics and video game development. I enjoy bringing new ideas to life, especially by creating tools and features that empower artists and developers whether it's through innovative rendering techniques, gameplay mechanics, or engine systems. My experience spans C++, OpenGL, Godot, and web technologies, and I’m always eager to learn and experiment.",
            },
            projects: {
                shell: {
                    quickDesc: 'A small implementation done for this portfolio',
                },
                volumetric: {
                    title: 'volumetric rendering',
                    quickDesc: 'Experimenting with volumetric cloud rendering',
                },
                engine: {
                    title: 'game engine',
                    quickDesc: 'Developing game engines',
                },
                rayTracing: {
                    quickDesc: 'School project to create a ray tracer',
                },
                games: {
                    title: 'game dev',
                    quickDesc: 'Some of my work surrounding game creation',
                },
                web: {
                    title: 'web dev',
                    quickDesc: 'Some of my work surrounding web development',
                },
            },
        },
        fr: {
            hello: 'bonjour',
            viewMore: 'voir plus',
            titles: {
                about: 'à propos',
                studies: 'études',
                professional: 'professionnel',
                skills: 'compétences',
                projects: 'projets',
                links: 'liens',
                technologies: 'technologies',
                context: 'contexte',
                learning: 'apprentissage',
            },
            descriptions: {
                skills: "Quelques compétences que j'ai acquises au fil des années.",
            },
            contents: {
                about: "Je m'appelle Nathan Souvignet, étudiant en quatrième année d’informatique, passionné par le graphisme informatique et le développement de jeux vidéo. J’aime donner vie à de nouvelles idées, notamment en créant des outils et des fonctionnalités qui facilitent le travail des artistes et des développeurs que ce soit par des techniques de rendu innovantes, des mécaniques de jeu ou des systèmes de moteur. J’ai de l’expérience en C++, OpenGL, Godot et technologies web, et je suis toujours motivé à apprendre et à expérimenter.",
            },
            projects: {
                shell: {
                    quickDesc: 'Une implémentation rapide pour le portfolio',
                },
                volumetric: {
                    title: 'rendu volumique',
                    quickDesc: 'Découverte du rendu volumique de fluide',
                },
                engine: {
                    title: 'moteur de jeu',
                    quickDesc: 'Développement de moteurs de jeu',
                },
                rayTracing: {
                    quickDesc: "Développement d'un ray tracer",
                },
                games: {
                    quickDesc: "D'autres projets autour de la création de jeux vidéo",
                },
                web: {
                    quickDesc: 'Quelques projets de développement web',
                },
            },
        },
    },
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
