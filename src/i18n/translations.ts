import { createI18n } from "vue-i18n";

export const lang = {
    en:{
        presentation:{
            resume: "hi",
            biography: "Diplômé d’un bac général option mathématique et NSI en 2021, j’ai continué ma formation en suivant un BUT informatique parcours “réalisation d’application: conception, développement, validation”. Je suis en actuellement en train de valider ma troisième année et compte à terme poursuivre ma formation en suivant une formation par apprentissage en école d’ingénieur.",
            interests: "Passionné de jeu vidéo, je m’intéresse également beaucoup au dessin."
        
        }
    },
    fr:{
        presentation:{
            resume: "Je m'appelle Nathan Souvignet, j'ai 20 ans et je suis actuellement en 2ème année de BUT Informatique à l'IUT Montpellier Sète. \
            Je suis passionné par l'informatique et la programmation depuis mon plus jeune âge, et je suis toujours à la recherche de nouveaux projets à réaliser.",
            biography: "Diplômé d’un bac général option mathématique et NSI en 2021, j’ai continué ma formation en suivant un BUT informatique parcours “réalisation d’application: conception, développement, validation”. Je suis en actuellement en train de valider ma troisième année et compte à terme poursuivre ma formation en suivant une formation par apprentissage en école d’ingénieur.",
            interests: "Passionné de jeu vidéo, je m’intéresse également beaucoup au dessin."
        
        },
        projects: {
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