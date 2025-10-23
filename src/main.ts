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
                fur_editor: 'fur editor',
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
                about: "I'm Nathan Souvignet, a fifth-year Computer Science student with a strong passion for computer graphics and video game development. I enjoy bringing new ideas to life, especially by creating tools and features that empower end users and developers to help them go further faster whether it's through rendering techniques, gameplay mechanics, or engine systems. My experience spans C++, OpenGL, Godot, and web technologies, and I’m always eager to learn and experiment.",
            },
            projects: {
                shell: {
                    quickDesc: 'A small implementation done for this portfolio',
                    context:
                        'While building this website, I wanted to implement a small project to showcase my skills. I decided to create a shell texturing effect using WebGL and Three.js.',
                    difficulties:
                        "For now, all strands are perfectly aligned within the fur, which creates an unnatural grid-like pattern. I tried adding a random offset to each strand, but I'm still unsure how to achieve a more organic UV scaling. Another possible solution would be to adjust the root texture by adding fake 2D strands to hide the visible starting points.",
                },
                rendering: {
                    title: 'rendering approaches',
                    quickDesc:
                        'Discovering ray tracing, fluid volume rendering with ray marching and other techniques',
                    context:
                        "In the context of my first year of master's degree, I had the opportunity to experiment on some rendering techniques. The first one being ray tracing (in deferred on the CPU) and the second being the render and simulation in real time of volumetric clouds",
                    ray_tracing_desc:
                        'I had the opportunity to work on the implementation of a simple ray tracer. I worked on implementing different intersections between ray and shapes as well as various effects such as refraction, reflection, and Beer-Lambert for lighting, as well as soft shadows. I also implemented a BVH as an acceleration structure to speed up the rendering of complex meshes.',
                    volume_desc:
                        'This project was an opportunity to discover different approaches to modeling (from noise, using particles) as well as rendering (using impostors to visualize particles, ray marching of a volume). I also had the opportunity to experiment with the geometry shader and compute shaders to minimize CPU-GPU communication in order to render particles efficiently. ',
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
                    features_list_title: 'Some of the features I want to implement',
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
                    context:
                        'As a hobby I love making games. Most of the times it is more about implementing an idea rather than creating a full game',
                    behavior_title: 'Behavior tree',
                    behavior_desc:
                        "I created a behavior tree addon for Godot 4.2 mono. It allows you to create complex AI behaviors in a visual way, making it easier to manage and understand the logic behind AI actions. In the illustration on the right, for example, we can see the use of the extension within Godot's scene tree: if a node in the 'FollowMouse' action sequence fails, the system will then switch to the 'GoHome' sequence.",
                    dicecraft_desc:
                        'I participated in a game jam where, as a team of 3, we created a game called Dicecraft. The game is about crafting dice in order to manipulate randomness and maximize combos and units spawn quantities to fight against an AI. The game lacks content and polish, but it was a fun project and the core mechanics are solid.',
                    other_title: 'other projects',
                    other_desc:
                        'I have worked on several other projects, but they act more as experiments or proofs of concept rather than full-fledged games. These projects include various mechanics from 2D platformers about time control to magic spells programming. The illustration on the right come from my spell programming game. There is an interface to create spell and the result can be seen on the left in the scene. Symbol type and orientation matter, here we are expanding water with 3 symbols.',
                },
                web: {
                    title: 'web dev',
                    quickDesc: 'Some of my work surrounding web development',
                    context:
                        'During my studies, I had the opportunity to work on several web projects. It was a great way to learn about web technologies and how to create advanced web applications.',
                    satiscraftory_desc:
                        'The goal of this project was to make a web application providing receipes around a specific theme. Ours was about the game Satisfactory. I worked on the frontend part of the application, which included a minigame that I build entirely using Vue.js reactivity.',
                    explore_desc:
                        'For this project, I worked on the backend part of a web application. Implementing pathfinding algorithms and database structure and optimization.',
                    rich_desc:
                        'I also worked on the backend of a web application for voting. The goal was to offer different ways to vote and tools to create and manages propositions.',
                },
            },
            performances: {
                title: 'Performance issues (avg: {fps} FPS)',
                optimize: 'optimize',
                proposition: 'Switch to performance mode?',
                note: 'Some browsers may provide better performance.'
            }
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
                difficulties: 'difficultés',
                next_steps: 'prochaines étapes',
                fur_editor: 'éditeur de fourrure',
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
                about: "Je m'appelle Nathan Souvignet, étudiant en cinquième année d\'informatique, passionné par le graphisme informatique et le développement de jeux vidéo. J'aime donner vie à de nouvelles idées, notamment en créant des outils et des fonctionnalités qui facilitent le travail des artistes et des développeurs que ce soit par des techniques de rendu innovantes, des mécaniques de jeu ou des systèmes de moteur. J’ai de l’expérience en C++, OpenGL, Godot et technologies web, et je suis toujours motivé à apprendre et à expérimenter.",
            },
            projects: {
                shell: {
                    quickDesc: 'Une implémentation rapide pour le portfolio',
                    context:
                        "En développant ce site web, j'ai voulu implémenter cette technique de rendu de fourrure qui avait l'air amusante. L'idée est de superposer plusieurs couches du même mesh et de ne pas afficher certains pixels du mesh pour donner l'impression qu'il y a un volume. Alors qu'en réalité il s'agit juste de plusieurs tranches superposées. Pour cette implémentation j'ai utilisé three.js et webgl.",
                    difficulties:
                        "Pour l\'instant, tous les poils sont parfaitement alignés, ce qui crée un motif en grille peu naturel. J'ai essayé d'ajouter un décalage aléatoire à chaque poil, mais je ne sais pas encore comment obtenir un rendu plus organique au niveau du redimensionnement des UV. Une autre solution serait de modifier la texture des racines en y ajoutant de faux poils en 2D afin de masquer les points de départ visibles.",
                },
                rendering: {
                    title: 'techniques de rendu',
                    quickDesc:
                        'Découverte du ray tracing, du rendu volumique de fluide via ray marching et autres techniques',
                    context:
                        "Au cours de ma première année de master, j'ai eu l'opportunité de découvrir de nouvelles approches de rendu. J'ai par exemple implémenté du ray tracing sur CPU (en rendu déféré), j'ai également pu faire de la simulation et du rendu en temps réel de nuages volumétriques avec des imposteurs et du ray marching",
                    ray_tracing_desc:
                        "J'ai eu l'occasion de travailler sur la mise en œuvre d'un ray tracer simple sur CPU. J'ai développé différentes intersections entre les rayons et les formes, ainsi que plusieurs effets tels que la réfraction, la réflexion, la loi de Beer-Lambert pour l'éclairage, et les ombres douces. J'ai également implémenté une structure d'accélération BVH afin d'accélérer le rendu de maillages complexes.",
                    volume_desc:
                        "Ce projet a été l'occasion de découvrir différentes approches de modélisation (à partir de bruit, ou à l'aide de particules), ainsi que de rendu (utilisation d'imposteurs pour visualiser les particules, et ray marching de volume). J'ai également pu expérimenter avec le geometry shader et les compute shaders afin de réduire la communication entre le CPU et le GPU, et ainsi rendre les particules de manière plus efficace.",
                },
                engine: {
                    title: 'moteur de jeu',
                    quickDesc: 'Développement de moteurs de jeu',
                    context:
                        "Durant le second semestre de mon master, j'ai eu l'occasion de développer un moteur de jeu. Ayant toujours été passionné par la création de jeux vidéos, ça a été une super expérience. Cependant, en raison de la contrainte de temps imposée par le projet, beaucoup de concessions ont dû être faites.",
                    learnings:
                        "Mon objectif était de concevoir un moteur de jeu polyvalent et réutilisable pour différents types de jeux. J'ai donc tenté d'implémenter des composants similaires à ceux que j'avais utilisés dans le moteur Godot, au sein de mon Entity Component System (ECS). En plus de l'ECS, le projet comprenait un rendu basé sur la physique (PBR), un éditeur de scène léger pour faciliter le débogage, ainsi qu'un système de simulation physique et de gestion des collisions simple. Ce fut mon premier grand projet en C++, une expérience très enrichissante.",
                    img_desc_0: 'Illustration du fonctionnement du système de caméra',
                    img_desc_1: 'Deuxième exemple de caméra',
                    next_steps:
                        "Ma première tentative m'a tellement appris que j'ai dû recommencer de zéro. La prochaine version du moteur de jeu possède une structure de code claire et facilement codable en s'inspirant de temps à autres de l'architecture de Godot. Dans cette version, pas d'ECS mais une approche plus traditionnelle axée autour de l'héritage ainsi que la composition.",
                    features_list_title: 'Quelques fonctionnalités que je compte implémenter',
                    features_list: [
                        'Un renderer indépendant exposant une API (fait)',
                        "Meilleur système de gestion des ressources ainsi qu'une solution de sauvegarde et de chargement des scenes fonctionnelle (fait)",
                        'Amélioration des outils de logging et de debug (fait)',
                        "Illumination globale à l'aide de sondes",
                        'Nouvelle simulation physique',
                        'Support des scripts',
                    ],
                },
                games: {
                    title: 'jeux',
                    quickDesc: "D'autres projets autour de la création de jeux vidéo",
                    context:
                        "J'aime développer des jeux dans mon temps libre. Bien qu'il s'agisse généralement de tester des concepts plus que de faire un jeu complet",
                    behavior_title: 'Arbre de comportement',
                    behavior_desc:
                        "J'ai développé un addon pour godot 4.2 mono. Il s'agit d'une implémentation d'arbre de comportement qui permet de créer facilement des comportements d'IA complexes à l'aide d'un arbre. Sur l'illustration à droite par exemple on peut voir l'utilisation de l'extension dans le graphe de scène de Godot, si un noeud de la séquence d'actions 'FollowMouse' échoue, alors on passera à la séquence 'GoHome'.",
                    dicecraft_desc:
                        "J'ai participé à une game jam durant laquelle, en équipe de trois, nous avons créé un jeu appelé Dicecraft. Le principe du jeu est de fabriquer des dés afin de manipuler l'aléatoire et de maximiser les combos et la quantité d'unités invoquées par les lancés de dés pour affronter une IA. Le jeu manque de finition, mais ce fut un projet amusant, et les mécaniques de base sont solides.",
                    other_title: 'autres projets',
                    other_desc:
                        "Je travaille sur plusieurs autres projets, mais rien de très présentable. Ils vont d'un platformer 2D utilisant le contrôle du temps pour réussir les puzzles à un jeu de programmation de sort magiques. L'illustration sur la droite illustre ce concept de programmation magique, le joueur dispose des symboles sur un cercle d'invocation, la forme et le sens des symboles impactent l'effet produit. Ici on a 3 dilatations appliquées à un sort d'eau, ce qui donne ce triangle.",
                },
                web: {
                    quickDesc: 'Quelques projets de développement web',
                    context:
                        "Au cours de mes études, j'ai eu l'occasion de travailler sur plusieurs projets web principalement sur du backend. En plus d'avoir énormément appris sur les technologies utiles au développement web ça a été l'occasion pour moi de m'entraîner dans un environnement professionel.",
                    satiscraftory_desc:
                        "L'objectif était de faire un site web avec plusieurs services connectés à un même frontend. J'ai principalement contribué en réalisant un mini jeu entièrement en utilisant la réactivité de Vue.js sans webgl. La thématique du projet était de proposer une sorte de wiki pour les constructions faisables dans le jeu 'Satisfactory'.",
                    explore_desc:
                        "Pour ce projet, j'ai travaillé sur le backend avec du PHP et une librairie postgis de PostgreSQL. Il a fallu implémenter un algorithme de pathfinding ainsi que des optimisations pour charger le plus rapidement un chemin optimal entre 2 points (ou plus avec des étapes)",
                    rich_desc:
                        "J'ai également travaillé sur le backend de cette application web. Le but était de faire un site sur lequel les utilisateurs pouvaient proposer des sujets ainsi que des propositions pour répondre à ces problématiques. Le choix de la meilleure réponse dépendait d'un système de vote et de différentes phases de rédaction où les gens pouvaient écrire en collaboration. J'ai donc travaillé sur la base de données pour rendre tout cela possible.",
                },
            },
            performances: {
                title: 'Problèmes de performances (moy: {fps} FPS)',
                optimize: 'optimiser',
                proposition: 'Passer en mode performance?',
                note: "D'autres navigateurs peuvent obtenir de meilleurs performances."
            }
        },
    },
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
