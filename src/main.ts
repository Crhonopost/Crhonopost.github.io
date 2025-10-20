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
            dates: {
                january: 'january',
                april: 'april',
                june: 'june',
            },
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
                difficulties: 'difficulties',
                next_steps: 'next steps',
            },
            experiences: {
                professional: {
                    job_andragogy: 'web developer internship',
                    job_kapix: 'web developer internship',
                },
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
                    difficulties:
                        "For now, all strands are perfectly aligned within the fur, which creates an unnatural grid-like pattern. I tried adding a random offset to each strand, but I'm still unsure how to achieve a more organic UV scaling. Another possible solution would be to adjust the root texture by adding fake 2D strands to hide the visible starting points.",
                },
                rendering: {
                    title: 'rendering approaches',
                    quickDesc:
                        'Discovering ray tracing, fluid volume rendering with ray marching and other techniques',
                },
                engine: {
                    title: 'game engine',
                    quickDesc: 'Developing game engines',
                    context:
                        "During the second semester of my first year of master's degree in Imagine at the Faculty of Sciences, I worked on a game engine project. Being passionate about video game creation, it was an excellent experience. Limited by the submission date, there is still much to add.",
                    learnings:
                        'My goal was to build a general purpose game engine. Through this project, I implemented an Entity-Component System, PBR rendering, a lightweight editor for debugging, and an early physics system handling collisions (AABB, OBB, spheres, planes, rays, and rigid bodies collision reactions). It was my first large-scale C++ project — a challenging but extremely rewarding experience. ',
                    img_desc_0: 'Some of the work done on the camera',
                    img_desc_1: 'Second example of camera',
                    next_steps:
                        "The first version taught me enough to start over. The upcoming V2 focuses on a stronger code architecture and takes inspiration from Godot's design, emphasizing inheritance and composition over a pure ECS approach.",
                    features_list: [
                        'Independent renderer exposing a clear API (done)',
                        'Better resource and scene serialization management (done)',
                        'Improved logging and debugging tools (done)',
                        'Global illumination with light probes',
                        'Physics rework',
                        'Scripting support',
                    ],
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
            dates: {
                january: 'janvier',
                april: 'avril',
                june: 'juin',
            },
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
                difficulties: 'difficultées',
                next_steps: 'prochaines étapes',
            },
            experiences: {
                professional: {
                    job_andragogy: 'stage de développeur web',
                    job_kapix: 'alternance de développeur web',
                },
            },
            descriptions: {
                skills: "Quelques compétences que j'ai acquises au fil des années.",
            },
            contents: {
                about: "Je m'appelle Nathan Souvignet, étudiant en quatrième année d\'informatique, passionné par le graphisme informatique et le développement de jeux vidéo. J’aime donner vie à de nouvelles idées, notamment en créant des outils et des fonctionnalités qui facilitent le travail des artistes et des développeurs que ce soit par des techniques de rendu innovantes, des mécaniques de jeu ou des systèmes de moteur. J’ai de l’expérience en C++, OpenGL, Godot et technologies web, et je suis toujours motivé à apprendre et à expérimenter.",
            },
            projects: {
                shell: {
                    quickDesc: 'Une implémentation rapide pour le portfolio',
                    difficulties:
                        "Pour l\'instant, tous les poils sont parfaitement alignés, ce qui crée un motif en grille peu naturel. J'ai essayé d'ajouter un décalage aléatoire à chaque poil, mais je ne sais pas encore comment obtenir un rendu plus organique au niveau du redimensionnement des UV. Une autre solution serait de modifier la texture des racines en y ajoutant de faux poils en 2D afin de masquer les points de départ visibles.",
                },
                rendering: {
                    title: 'techniques de rendu',
                    quickDesc:
                        'Découverte du ray tracing, du rendu volumique de fluide via ray marching et autres techniques',
                },
                engine: {
                    title: 'moteur de jeu',
                    quickDesc: 'Développement de moteurs de jeu',
                    context:
                        "Durant le second semestre de mon master, j'ai eu l'occasion de développer un moteur de jeu. Ayant toujours été passionné par la création de jeux vidéos, ca a été une super expérience. Cependant, en raison de la contrainte de temps imposée par le projet, beaucoups de concession ont dûe être faites.",
                    learnings:
                        "Mon objectif était de concevoir un moteur de jeu polyvalent et réutilisable pour différents types de jeux. J'ai donc tenté d'implémenter des composants similaires à ceux que j'avais utilisés dans le moteur Godot, au sein de mon Entity Component System (ECS). En plus de l'ECS, le projet comprenait un rendu graphique, un éditeur de scène léger pour faciliter le débogage, ainsi qu'un système de simulation physique et de gestion des collisions simple. Ce fut mon premier grand projet en C++, une expérience très enrichissante.",
                    img_desc_0: 'Illustration du fonctionnement du système de caméra',
                    img_desc_1: 'Deuxième exemple de caméra',
                    next_steps:
                        "Ma première tentative m'a tellement appris que j'ai dû recommencer de zéro. La prochaine version du moteur de jeu possède une structure de code claire et facilement codable en s'inspirant de temps à autres de l'architecture de Godot. Dans cette version, pas d'ECS mais une approche plus traditionnelle axée autour de l'héritage ainsi que la composition.",
                    features_list: [
                        'Un renderer indépendant exposant une API (fait)',
                        "Meilleur système de gestion des ressources ainsi qu'une solution de sauvegarde et de chargement des scenes fonctionnelle (fait)",
                        'Amélioration des outils de logging et de debug (fait)',
                        "Illumination globale à l'aide de sondes",
                        'Nouvelle simulation physique',
                        'Supports des scripts',
                    ],
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
