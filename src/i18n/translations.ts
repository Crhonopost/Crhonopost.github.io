import { createI18n } from "vue-i18n";

export const lang = {
    en:{
        introduction: 'Hi !',
        experiences: 'Major experiences',
        presentation:{
            resume: `My name is Nathan Souvignet, I'm 20 years old and I'm currently in my third year of a Computer Science degree at the IUT Montpellier Sète. 
            I've been passionate about computers and programming since I was very young, and I'm always looking for new projects to work on.`,
            biography: "After graduating with a general baccalaureate in mathematics and NSI in 2021, I continued my training by taking a computer science degree in \"application development: design, development, validation\". I'm currently validating my third year.",
            interests: "I'm passionate about video games and drawing. I'm inquisitive by nature, and like to take an interest in the workings of everything around me."
        },
        projectSections:{
            resume: 'Resume',
            context: 'Context',
            description: 'Description',
            difficulties: 'Difficulties',
            experience: 'Experience gaigned'
        },
        projects: {
            kapix: {
                title: "Kapix",
                shortDescription: "Internship and work-study at Kapix since April 2023, I've worked on various customer projects and the development of the company's internal tool as well as libraries.",
                context: "Kapix is a startup offering two services: the first is a tool that generates a website (frontend and backend) with as little coding as possible. The second service consists of designing websites according to customers' needs.",
                description: `
                During my missions, I worked on the backend and frontend of several sites. Although I'm not a fullstack developer, I'm able to use frameworks such as VueJS or NestJS. 
                My missions have also led me to work with npm libraries, but also to develop these same libraries in order to enhance their functionalities.
                These include the Kapix-component-vue3 library, which contains vueJS components. But also Kapix-typegraphQL-prisma, which improves code generation from a prisma schema.`,
                difficulties: "One of the main challenges was to quickly get to grips with existing projects, most of which already existed - I only started a few.",
                experience: "My involvement in these projects enabled me to work as part of a team on a variety of assignments and to learn about new tools. I also had the opportunity to broaden my technical skills and discover the inner workings of a company."
            },
            richVote: {
                title: "RichVote",
                shortDescription: "Online voting website, allowing you to create polls and vote for those of others.",
                context:"The project involved creating a complete dynamic website, which required collaboration with three other people and was spread over six months, from September 2022 to February 2023.",
                description:`We used collaborative work tools such as Trello for planning and Git for code sharing, and coded the site using PHPstorm while managing the database with DBeaver.
                The project was segmented into sprints, in line with SCRUM agile methods, and we worked closely with the customer to meet their needs. 
                The end result was a fully functional, dynamic website that allowed users to write questions, receive proposals and vote for the best idea.`,
                difficulties:`The main difficulty we encountered was database management, as we had to create procedures/functions, triggers and materialized views to automate certain behaviors.
                We also had problems with security, having to ensure that it was not possible to degrade the site's display or access sensitive data.`,
                experience:`For my part, I mainly worked on the database and its connection to the website via PHP, respecting the MVC structure.
                This project enabled me to discover agile project management methods and the segmentation of work into sprints, as well as the advantages of working in a team.
                I was also able to experiment with securing and automating database behaviors using procedures/functions, triggers and materialized views.`
            },
            fluid: {
                title: "Fluid simulation",
                shortDescription: "Real-time fluid simulation.",
                context: "Real-time physics simulations have always fascinated me. So I decided to create a real-time fluid simulation as a first approach to this field.",
                description:`I started by creating a basic version of the simulation, using the CPU for calculation and rendering, using the Godot game engine. 
                Then I started work on a second version, which uses the graphics processor to optimize the simulation's computation. 
                This second part was initially undertaken on Godot, but I'm currently trying to run the simulation using the PixiJS library. However, the project is not yet finalized.`,
                difficulties: `GPU programming is quite complex, and it took a long time to figure out how to make it work.
                Having no prior knowledge of physics, I also had to learn the basics of fluid physics.`,
                experience: "This project has enabled me to deepen my knowledge of physics and discover new ways of using a graphics processor, outside the realm of graphics rendering. I intend to finish this fluid simulation on the GPU and explore compute shaders further to master this tool."
            },
            behaviour: {
                title: "Behavior tree",
                shortDescription: "Plugin for Godot 3.5 to build modular AIs using the behavior tree.",
                context:"The project was carried out between July and August 2022. The first step was to study behavior tree theory and its use in the video game industry. Next, the implementation was carried out using the C# language and tools provided by Godot.",
                description: `The aim of this project was to create a functional plugin for Godot that would enable the creation of modular AIs using the behavior tree. 
                The aim was also to develop programming skills in C# and gain a better understanding of AI design in the context of video games.
                The Visual Studio Code editor was used for C# programming. 
                Git was used for version management. Finally, the Godot game engine was used to set up the implementation.`,
                difficulties: `Setting up the implementation was the most difficult part of the project. We had to understand behavior tree theory in detail and figure out how to implement it efficiently using C# and the tools provided by Godot.
                However, after overcoming these difficulties, the plugin was successfully implemented.`,
                experience: `Completing this project enabled me to develop my C# programming skills, gain a better understanding of AI design in the context of video games, and continue to learn how to work with the Godot game engine and create plugins for it.
                This learning will serve me well in the long term, as I plan to make my own video game.`
            }
        }
    },
    fr:{
        introduction: 'Salut !',
        experiences: 'Expériences majeures',
        presentation:{
            resume: `Je m'appelle Nathan Souvignet, j'ai 20 ans et je suis actuellement en troisième année de BUT Informatique à l'IUT Montpellier Sète. 
            Je suis passionné par l'informatique et la programmation depuis mon plus jeune âge, et je suis toujours à la recherche de nouveaux projets à réaliser.`,
            biography: "Diplômé d'un bac général option mathématique et NSI en 2021, j'ai continué ma formation en suivant un BUT informatique parcours “réalisation d'application: conception, développement, validation”. Je suis en actuellement en train de valider ma troisième année",
            interests: "De nature curieuse, j'aime m'intéresser au fonctionnement de tout ce qui m'entoure."
        },
        projectSections:{
            resume: 'Résumé',
            context: 'Contexte',
            description: 'Description',
            difficulties: 'Difficultés',
            experience: 'Expérience gagnée'
        },
        projects: {
            kapix: {
                title: "Kapix",
                shortDescription: "Stage et alternance chez Kapix depuis avril 2023, j'ai travaillé sur divers projets client et le développement de l'outil interne de l'entreprise ainsi que sur des librairies.",
                context: "Kapix est une startup proposant deux services, le premier est un outil qui permet de générer un site web (frontend et backend) en codant le moins possible. Le second service consiste à concevoir les sites web en fonction des besoins des clients",
                description: `
                Pendant mes missions, j'ai travaillé sur le backend et le frontend de plusieurs sites. Bien que je ne sois pas un développeur fullstack, je suis capable d'utiliser des frameworks tel que VueJS ou NestJS. 
                Mes missions m'ont amené à travailler également avec des librairies npm mais aussi à développer ces mêmes librairies afin d'étoffer leurs fonctionalités.
                Parmis ces librairies, il y a par exemple la librairie Kapix-component-vue3 qui contient des composants vueJS. Mais aussi Kapix-typegraphQL-prisma qui améliore la génération de code issue d'un schéma prisma.`,
                difficulties: "Un des principaux défis a été de s'imprégner rapidement de projets déjà existants, la plupart existant déjà je n'ai commencé que très peu de projets",
                experience: "Mon implication dans ces projets m'a permis de travailler en équipe sur diverses missions et de me former à de nouveaux outils. J'ai également eu l'opportunité d'élargir mes compétences techniques et de découvrir le fonctionnement interne d'une entreprise."
            },
            richVote: {
                title: "RichVote",
                shortDescription: "Site web de vote en ligne, qui permet de créer des sondages et de voter pour ceux des autres.",
                context:"Le projet consistait à créer un site web dynamique complet, ce qui a nécessité une collaboration avec trois autres personnes et s'est étalé sur six mois, de septembre 2022 à février 2023.",
                description:`Nous avons utilisé des outils de travail collaboratifs tels que Trello pour la planification et Git pour le partage de code, et avons codé le site à l'aide de PHPstorm tout en gérant la base de données avec DBeaver.
                              Le projet a été segmenté en sprints, conformément aux méthodes agiles SCRUM, et nous avons travaillé en étroite collaboration avec le client pour répondre à ses besoins. 
                              Le résultat final était un site web dynamique entièrement fonctionnel qui permettait aux utilisateurs de rédiger des questions, de recevoir des propositions et de voter pour la meilleure idée.`,
                difficulties:`La principale difficulté rencontrée a été la gestion de la base de données, car nous avons dû créer des procédures/fonctions, des triggers et des vues matérialisées pour automatiser certains comportements.
                              Nous avons également eu des problèmes avec la sécurité, il fallait s'assurer qu'il ne soit pas possible de dégrader l'affichage du site mais aussi d'accéder à des données sensibles.`,
                experience:`Pour ma part, j'ai principalement travaillé sur la base de données et sa mise en relation avec le site web via PHP en respectant la structure MVC.
                            Ce projet m'a permis de découvrir les méthodes de gestion de projet agiles et la segmentation du travail en sprints, ainsi que les avantages de travailler en équipe.
                            J'ai également pu expérimenter la sécurisation et l'automatisation des comportements de la base de données en utilisant des procédures/fonctions, des triggers et des vues matérialisées.`
            },
            fluid: {
                title: "Simulation de fluide",
                shortDescription: "Simulation de fluide en temps réel",
                context: "Les simulations physiques en temps réel m'ont toujours fasciné. J'ai donc décidé de créer une simulation de fluide en temps réel comme premier approche à ce domaine.",
                description:`J'ai commencé par créer une version basique de la simulation, utilisant le CPU pour le calcul et le rendu, en utilisant le moteur de jeu Godot. 
                              Ensuite, j'ai commencé à travailler sur une deuxième version, qui utilise le processeur graphique pour optimiser le calcul de la simulation. 
                              Cette deuxième partie a été initialement entreprise sur Godot, mais je suis actuellement en train d'essayer de faire la simulation à l'aide de la librairie PixiJS. Cependant, le projet n'est pas encore finalisé.`,
                difficulties: `Le fonctionnement de la programmation GPU est assez complexe, et il a fallu beaucoup de temps pour comprendre comment le faire fonctionner.
                                N'ayant pas de connaissance préalable en physique, j'ai également dû apprendre les bases de la physique des fluides.`,
                experience: "Ce projet m'a permis d'approfondir mes connaissances en physique et de découvrir de nouvelles manières d'utiliser un processeur graphique, en dehors du domaine du rendu graphique. J'ai l'intention de terminer cette simulation de fluide sur le processeur graphique et d'explorer davantage les compute shaders pour maîtriser cet outil."
            },
            behaviour: {
                title: "Arbre de comportement",
                shortDescription: "Plugin pour Godot 3.5 permettant de construire des IA modulaires en utilisant l'arbre de comportement.",
                context:"Le projet a été réalisé entre juillet et aout 2022. La première étape a été l'étude de la théorie de l'arbre de comportement et de son utilisation dans l'industrie du jeu vidéo. Ensuite, la mise en place de l'implémentation a été réalisée en utilisant le langage C# et les outils fournis par Godot.",
                description: `Le but de ce projet était de réaliser un plugin fonctionnel pour Godot qui permettrait la création d'IA modulaires en utilisant l'arbre de comportement. 
                              L'objectif était également de développer les compétences en programmation en C# et de mieux comprendre la conception d'IA dans le contexte des jeux vidéo.
                              Pour la réalisation du projet, l'éditeur Visual Studio Code a été utilisé pour la programmation en C#. 
                              Git a été utilisé pour la gestion de version. Enfin, le moteur de jeu Godot a été utilisé pour la mise en place de l'implémentation`,
                difficulties: `La mise en place de l'implémentation a été la partie la plus difficile du projet. Il a fallu comprendre en détail la théorie de l'arbre de comportement et trouver comment l'implémenter efficacement en utilisant C# et les outils fournis par Godot.
                                Cependant, après avoir surmonté ces difficultés, le plugin a pu être réalisé avec succès.`,
                experience: `La réalisation de ce projet a permis de développer les compétences en programmation en C#, de mieux comprendre la conception d'IA dans le contexte des jeux vidéo et de continuer à apprendre à travailler avec le moteur de jeu Godot et à créer des plugins pour celui-ci.
                            Cet apprentissage me servira pour le long terme puisque je compte réaliser mon propre jeu video.`
            }
        }
    }
}

const instance = createI18n({locale: 'fr', fallbackLocale: ['en', 'fr'], messages: lang, legacy:false, globalInjection: true })

export default instance

export const i18n = instance.global