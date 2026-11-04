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
            navigation: {
                panels: 'Portfolio navigation',
                previous: 'Previous',
                next: 'Next',
                project_detail: 'Project details',
                back_to_projects: 'Projects',
            },
            hello: 'hello',
            viewMore: 'view more',
            dates: {
                january: 'January',
                april: 'April',
                june: 'June',
                august: 'August',
            },
            titles: {
                about: 'about',
                background: 'background',
                studies: 'studies',
                professional: 'professional experience',
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
                studies: {
                    master: 'Imagine master’s degree',
                    but: 'BUT in Computer Science',
                    track: 'RACDV track',
                    track_description: 'Application development and validation.',
                },
                professional: {
                    job_xlim: {
                        title: 'scientific software development internship',
                        desc: 'I modernized a virtual gonioreflectometer, a simulation tool for studying light reflection on road surfaces.',
                        contributions: [
                            'Redesigned the C++ and Python architecture around Mitsuba 3.',
                            'Created an interactive interface.',
                            'Fixed and validated existing functionality.',
                        ],
                    },
                    job_andragogy: {
                        title: 'web development internship',
                        desc: 'I developed several tools for Andrassistant, an application for creating educational resources.',
                        contributions: [
                            'Generated CSV files for learner enrollment.',
                            'Customized SVG graphics and exported SCORM learning modules.',
                            'Built a Chrome extension to assist with prompt writing.',
                        ],
                    },
                    job_kapix: {
                        title: 'web development apprenticeship',
                        desc: 'I contributed to a no-code platform for building web applications.',
                        contributions: [
                            'Worked on automatic GraphQL API generation from PostgreSQL data models.',
                            'Contributed to a TypeScript library used by this architecture.',
                            'Contributed to frontend and backend development for several clients’ applications.',
                        ],
                    },
                },
            },
            descriptions: {
                skills: 'Here are some of the skills I have acquired over the years.',
            },
            contents: {
                about: {
                    profile: 'I’m Nathan Souvignet. I hold a master’s degree specializing in computer graphics, with a particular interest in geometric modeling and 3D rendering. My earlier studies in application development also gave me a broad foundation in algorithms and software design.',
                    hobby: 'In my spare time, I develop my own game engine in C++ with OpenGL. Building its different systems helps me explore rendering techniques in depth and understand the architectural choices and performance constraints of a complex application.',
                },
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
                    title: 'Galaxy Engine',
                    quickDesc: 'A personal game engine for exploring 3D rendering and software architecture.',
                    context:
                        'After developing my first game engine as part of a university team, I started Galaxy Engine as an entirely personal project.',
                    overview_title: 'Overview',
                    overview_desc:
                        'I develop Galaxy Engine in my spare time to explore 3D rendering and better understand the architecture of a complex application. Building the scene, resource and rendering systems myself helps me explore their constraints and how they interact. This project has also led me to use tools such as spdlog to monitor the engine’s execution and RenderDoc to inspect graphics operations while debugging.',
                    overview_render:
                        'The engine supports {pbr}, {transparency} and {shadows} for spotlights. {culling} excludes objects outside the view frustum before they are submitted for rendering.',
                    rendering_terms: {
                        pbr: 'PBR rendering',
                        transparency: 'transparency',
                        shadows: 'shadow mapping',
                        culling: 'frustum culling',
                    },
                    editor_alt:
                        'Galaxy Engine editor showing the scene hierarchy, viewport and transform panel.',
                    editor_caption:
                        'The current editor, built with Dear ImGui: scene hierarchy, viewport and object properties.',
                    architecture_title: 'Engine architecture',
                    architecture_desc:
                        'I designed the engine core as a reusable library that can be integrated into different applications. The editor builds on this same foundation, adding the tools needed to manipulate scenes.',
                    renderer_desc:
                        'The renderer is divided into two parts: a frontend that prepares rendering operations and a backend responsible for OpenGL calls. This separation isolates the graphics API details and leaves room for experimenting with other APIs, such as Vulkan.',
                    resources_desc:
                        'Scenes can be saved and reloaded, and meshes are imported using Assimp. Resources are loaded asynchronously to keep the application responsive: data is loaded in the background and prepared for rendering once it becomes available.',
                    graph_title: 'Renderer architecture',
                    renderer_sections: {
                        previous: 'Original approach',
                        redesign: 'Redesign',
                        current: 'Current implementation',
                    },
                    capture_comparison: {
                        title: 'Render pass captures',
                        description: 'Select two stages to compare captures of the same scene.',
                        view_a: 'View A',
                        view_b: 'View B',
                        displayed_view: 'Displayed view',
                        missing: 'Capture to be added',
                        unavailable: 'Capture unavailable',
                        open_image: 'Open {stage} at full size',
                        image_alt: '{stage} — Galaxy Engine render pass capture.',
                        stages: {
                            shadows: 'Shadow maps',
                            albedo: 'G-buffer · Albedo',
                            normals: 'G-buffer · Normals',
                            materials: 'G-buffer · Materials',
                            depth: 'Depth',
                            lighting: 'Lighting',
                            final: 'Final image',
                        },
                    },
                    renderer_commands_desc:
                        'Initially, the frontend communicated with the backend through commands such as setUniform or attachTexture. My goal was to abstract OpenGL while leaving room for asynchronous rendering in the future. In practice, these commands largely reproduced OpenGL’s state machine. During debugging, it became difficult to understand the context of each operation and track state changes. By trying to offer fine-grained control, I was ultimately leaving responsibilities to the calling code that the engine could have handled itself.',
                    renderer_passes_desc:
                        'I therefore moved away from these commands in favor of render passes that group their shader program, target framebuffer and parameters. The frontend/backend separation remains: the backend still performs the graphics API calls, but organizing them around identifiable passes makes rendering easier to understand and debug.',
                    renderer_interface_desc:
                        'This redesign also simplified how the renderer is used. Operations that previously required explicit commands, such as setting the viewport, clearing the framebuffer or binding textures, are now handled automatically by the backend when executing render passes.',
                    renderer_views_desc:
                        'Defining a view now only requires a camera with its position, direction and visibility mask. Each object also has a mask and is included when it shares at least one bit with the camera’s mask. This lets me reuse the same rendering pipeline for debug views in the editor, such as visualizing a cubemap without displaying the rest of the scene.',
                    graph_desc:
                        'To organize the passes, I implemented a simplified render graph. Each pass declares the textures it consumes and produces. The graph uses these dependencies to determine their execution order.',
                    graph_goal:
                        'The frontend remains responsible for certain drawing sequences. For example, to handle transparency, it draws opaque objects before transparent ones while reusing the same shader program and render target. The pipeline is also still defined statically. Eventually, I would like to build it dynamically so that only the required passes are executed, particularly for cinematics or transitions involving specific graphical effects.',
                    pipeline: {
                        pbr_title: 'Geometry and materials',
                        textured_title: 'Textured objects',
                        shadows_title: 'Shadow maps',
                        shadows_desc:
                            'Scene depth rendered from the perspective of shadow-casting spotlights.',
                        opaque_title: 'Opaque geometry',
                        opaque_desc:
                            'Albedo, normals, material parameters and depth written to the G-buffer.',
                        transparent_title: 'Then transparency',
                        transparent_desc:
                            'Alpha blending into the G-buffer, before lighting calculations.',
                        lighting_title: 'Direct lighting',
                        lighting_desc:
                            'PBR lighting calculated using the G-buffer, lights and shadow maps.',
                        composition_title: 'Skybox composition',
                        composition_desc:
                            'Combining the lit image and skybox in the final render target using depth information.',
                        textures_title: 'Opaque objects',
                        textures_desc:
                            'Objects using 2D textures or cubemaps, rendered without PBR lighting into the final target.',
                        texture_alpha_title: 'Then transparency',
                        texture_alpha_desc:
                            'Transparent textured objects blended into the same target.',
                        extensions_title: 'Possible extensions',
                        extensions_desc:
                            'Additional passes could be added, such as antialiasing, ambient occlusion or volumetric rendering. They could be enabled according to the requirements of each view or effect.',
                        caption:
                            'Simplified representation of the current rendering pipeline for a single scene view.',
                        transparency_note:
                            'PBR transparency remains a limitation of this version: surface attributes are blended into the G-buffer before lighting calculations.',
                    },
                    progress_title: 'Global illumination',
                    progress_desc:
                        'I am currently working on global illumination. Probes can already capture the scene across the six faces of a cubemap. The next step is to precompute and use this information to produce indirect lighting.',
                    prototype_title: 'Star Engine',
                    prototype_desc:
                        'Before Galaxy Engine, I contributed to Star Engine, a game engine developed as part of a university team. I worked on the ECS, editor, animation and collision systems, while another team member developed the PBR shader. This first project made me realize the importance of clearly separating the responsibilities of different systems, which influenced the design of Galaxy Engine.',
                    prototype_alt:
                        'Star Engine, a university group prototype showing a scene and its wireframe collision volumes.',
                    prototype_caption:
                        'Star Engine — collision volume visualization from the initial prototype.',
                    camera_caption_0:
                        'Star Engine — camera system experiment.',
                    camera_caption_1:
                        'Star Engine — another view of the camera system.',
                },

                games: {
                    title: 'game dev',
                    quickDesc: 'Games and tools built with Godot',
                    context:
                        'As a hobby I love making games. Most of the times it is more about implementing an idea rather than creating a full game',
                    behavior_title: 'Behavior tree',
                    behavior_desc:
                        "I created a behavior tree addon for Godot 4.2 mono. It allows you to create complex AI behaviors in a visual way, making it easier to manage and understand the logic behind AI actions. In the illustration on the right, for example, we can see the use of the extension within Godot's scene tree: if a node in the 'FollowMouse' action sequence fails, the system will then switch to the 'GoHome' sequence.",
                    dicecraft_desc:
                        'I participated in a game jam where, as a team of 3, we created a game called Dicecraft. The game is about crafting dice in order to manipulate randomness and maximize combos and units spawn quantities to fight against an AI. The game lacks content and polish, but it was a fun project and the core mechanics are solid.',
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
                ebucilper: {
                    title: 'ebucilper',
                    learnings:
                        'The goal was to build a prototype of a game in a limited time like in a game jam. But while still having a good amount of time so this prototype is actually playable.',
                    quickDesc: 'Serious game for learning programming inspired by "Replicube"',
                    context:
                        'The goal of this project was to create a serious game to help beginners learn programming concepts. In this game, you have to arrange instructions to place blocks in a 3D grid to match a target structure.',
                },
                segmentation: {
                    title: 'segmentation',
                    quickDesc: 'Image segmentation using superpixel clustering algorithms',
                    context:
                        'This project aimed to explore image segmentation techniques using superpixel clustering algorithms. The goal was to implement and compare different algorithms to understand their strengths and weaknesses in segmenting images effectively and test them for image compression.',
                    learnings:
                        'I implemented and compared several superpixel clustering algorithms (including SLIC, SNIC and a Watershed-based method), evaluating their segmentation quality, runtime and robustness across different image types. I also developed a compact encoding scheme that stores a color palette per superpixel and a neighbor-relative mapping of pixel indices, which compresses well when combined with Huffman coding. The work produced a stylized visual result and achieved compression ratios up to 3× without significant visual degradation.',
                    segmentation_before: 'Image before segmentation using {algorithm}',
                    segmentation_after: 'Image after segmentation using {algorithm}',
                }
            },
            performances: {
                title: 'Performance issues (avg: {fps} FPS)',
                optimize: 'optimize',
                proposition: 'Switch to performance mode?',
                note: 'Some browsers may provide better performance.'
            }
        },
        fr: {
            navigation: {
                panels: 'Navigation du portfolio',
                previous: 'Précédent',
                next: 'Suivant',
                project_detail: 'Détail du projet',
                back_to_projects: 'Projets',
            },
            hello: 'bonjour',
            viewMore: 'voir plus',
            dates: {
                january: 'janvier',
                april: 'avril',
                june: 'juin',
                august: 'août',
            },
            titles: {
                about: 'à propos',
                background: 'parcours',
                studies: 'formation',
                professional: 'expériences professionnelles',
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
                studies: {
                    master: 'Master Imagine',
                    but: 'BUT Informatique',
                    track: 'Parcours RACDV',
                    track_description: 'Réalisation d’applications, développement et validation',
                },
                professional: {
                    job_xlim: {
                        title: 'stage de développement scientifique',
                        desc: 'J’ai modernisé un gonioréflectomètre virtuel, un outil de simulation permettant d’étudier la réflexion de la lumière sur des surfaces routières.',
                        contributions: [
                            'Refonte de l’architecture en C++ et Python autour de Mitsuba 3.',
                            'Création d’une interface interactive.',
                            'Correction et validation des fonctionnalités existantes.',
                        ],
                    },
                    job_andragogy: {
                        title: 'stage de développement web',
                        desc: 'J’ai développé plusieurs outils pour Andrassistant, une application de création de ressources pédagogiques.',
                        contributions: [
                            'Génération de fichiers CSV pour l’inscription d’apprenants.',
                            'Personnalisation de visuels SVG et export de modules de formation au format SCORM.',
                            'Création d’une extension Chrome facilitant la rédaction de prompts.',
                        ],
                    },
                    job_kapix: {
                        title: 'alternance en développement web',
                        desc: 'J’ai contribué au développement d’une plateforme no-code permettant de créer des applications web.',
                        contributions: [
                            'Génération automatique d’API GraphQL à partir de modèles de données PostgreSQL.',
                            'Contribution à une bibliothèque TypeScript utilisée par cette architecture.',
                            'Développement d’applications pour plusieurs clients, sur le frontend et le backend.',
                        ],
                    },
                }
            },
            descriptions: {
                skills: "Quelques compétences que j'ai acquises au fil des années.",
            },
            contents: {
                about: {
                    profile: 'Je m’appelle Nathan Souvignet. Diplômé d’un master spécialisé en informatique graphique, je m’intéresse particulièrement à la modélisation géométrique et au rendu 3D. Ma formation initiale en développement d’applications m’a aussi apporté des bases généralistes en algorithmique et en conception logicielle.',
                    hobby: 'Pendant mon temps libre, je développe mon propre moteur de jeu en C++ avec OpenGL. Construire ses différents systèmes me permet d’approfondir les techniques de rendu et de comprendre les choix d’architecture et les contraintes de performance d’une application complexe.',
                },
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
                    title: 'Galaxy Engine',
                    quickDesc: 'Un moteur de jeu personnel pour explorer le rendu 3D et l’architecture logicielle.',
                    context:
                        'Après un premier moteur développé en équipe à l’université, j’ai lancé Galaxy Engine, un projet entièrement personnel.',
                    overview_title: 'Présentation',
                    overview_desc:
                        'Je développe Galaxy Engine sur mon temps libre pour approfondir le rendu 3D et mieux comprendre l’architecture d’une application complexe. Concevoir moi-même les systèmes de scène, de ressources et de rendu me permet d’explorer leurs contraintes et leurs interactions. Ce projet m’a aussi amené à utiliser des outils comme spdlog pour suivre l’exécution du moteur et RenderDoc pour inspecter les opérations graphiques lors du débogage.',
                    overview_render:
                        'Le moteur prend en charge le {pbr}, les {transparency} et les ombres par {shadows} pour les projecteurs. Le {culling} permet d’écarter les objets hors du volume de vue avant leur envoi au rendu.',
                    rendering_terms: {
                        pbr: 'rendu PBR',
                        transparency: 'transparences',
                        shadows: 'shadow mapping',
                        culling: 'frustum culling',
                    },
                    editor_alt: 'Éditeur Galaxy Engine avec arborescence de scène, viewport et panneau de transformation.',
                    editor_caption:
                        'L’éditeur actuel, réalisé avec Dear ImGui : arborescence de scène, viewport et propriétés des objets.',
                    architecture_title: 'Architecture du moteur',
                    architecture_desc:
                        'J’ai conçu le cœur du moteur comme une bibliothèque réutilisable dans différentes applications. L’éditeur repose sur cette même base et y ajoute les outils nécessaires à la manipulation des scènes.',
                    renderer_desc:
                        'Le renderer est divisé en deux parties : un frontend qui prépare le rendu et un backend chargé des appels à OpenGL. Cette séparation isole les détails de l’API graphique et me laisse la possibilité d’expérimenter d’autres API, comme Vulkan.',
                    resources_desc:
                        'Les scènes peuvent être sauvegardées et rechargées, et les maillages sont importés avec Assimp. Le chargement des ressources est asynchrone afin de préserver la fluidité de l’application : les données sont chargées en arrière-plan, puis préparées pour le rendu lorsqu’elles deviennent disponibles.',
                    graph_title: 'Architecture du renderer',
                    renderer_sections: {
                        previous: 'L’ancienne approche',
                        redesign: 'La refonte',
                        current: 'Le fonctionnement actuel',
                    },
                    capture_comparison: {
                        title: 'Captures des passes',
                        description: 'Sélectionnez deux étapes pour comparer les captures d’une même scène.',
                        view_a: 'Vue A',
                        view_b: 'Vue B',
                        displayed_view: 'Vue affichée',
                        missing: 'Capture à ajouter',
                        unavailable: 'Capture indisponible',
                        open_image: 'Ouvrir {stage} en taille réelle',
                        image_alt: '{stage} — capture d’une passe de rendu de Galaxy Engine.',
                        stages: {
                            shadows: 'Shadow maps',
                            albedo: 'G-buffer · Albédo',
                            normals: 'G-buffer · Normales',
                            materials: 'G-buffer · Matériaux',
                            depth: 'Profondeur',
                            lighting: 'Éclairage',
                            final: 'Image finale',
                        },
                    },
                    renderer_commands_desc:
                        'Initialement, le frontend communiquait avec le backend au moyen de commandes comme setUniform ou attachTexture. Je cherchais à abstraire OpenGL tout en préparant la possibilité d’exécuter le rendu de manière asynchrone. En pratique, ces commandes reproduisaient surtout la machine à états d’OpenGL. Lors du débogage, il devenait difficile de retrouver le contexte de chaque opération et de suivre les changements d’état. En voulant offrir un contrôle très fin, je reportais finalement sur le code appelant des responsabilités que le moteur aurait pu prendre en charge.',
                    renderer_passes_desc:
                        'J’ai donc abandonné ces commandes au profit de passes de rendu regroupant leur programme graphique, leur framebuffer cible et leurs paramètres. La séparation frontend/backend est conservée : le backend effectue toujours les appels à l’API graphique, mais leur organisation autour de passes identifiables rend le rendu plus facile à comprendre et à déboguer.',
                    renderer_interface_desc:
                        'Cette refonte a aussi simplifié l’utilisation du renderer. Des opérations auparavant explicites, comme la configuration du viewport, l’effacement du framebuffer ou la liaison des textures, sont désormais prises en charge automatiquement par le backend lors de l’exécution des passes.',
                    renderer_views_desc:
                        'Pour définir une vue, il suffit de fournir une caméra avec sa position, sa direction et son masque de visibilité. Chaque objet possède également un masque : il est pris en compte lorsque celui-ci partage au moins un bit avec celui de la caméra. Je peux ainsi utiliser le même pipeline pour afficher une vue de débogage dans l’éditeur, par exemple pour visualiser une cubemap, sans afficher le reste de la scène.',
                    graph_desc:
                        'Pour organiser les passes, j’ai mis en place un graphe de rendu simplifié. Chaque passe déclare les textures qu’elle utilise et celles qu’elle produit. Le graphe exploite ces dépendances pour déterminer leur ordre d’exécution.',
                    graph_goal:
                        'Le frontend conserve la responsabilité de certaines séquences de dessin. Par exemple, pour gérer la transparence, il dessine les objets opaques avant les objets transparents en réutilisant le même programme graphique et la même cible de rendu. Le pipeline reste également défini de manière statique. À terme, j’aimerais pouvoir le construire dynamiquement pour n’exécuter que les passes nécessaires, notamment lors de cinématiques ou de transitions utilisant des effets graphiques spécifiques.',
                    pipeline: {
                        pbr_title: 'Géométrie et matériaux',
                        textured_title: 'Objets texturés',
                        shadows_title: 'Shadow maps',
                        shadows_desc:
                            'Profondeur de la scène depuis les projecteurs qui produisent des ombres.',
                        opaque_title: 'Géométrie opaque',
                        opaque_desc:
                            'Albédo, normales, paramètres des matériaux et profondeur écrits dans le G-buffer.',
                        transparent_title: 'Puis les transparences',
                        transparent_desc:
                            'Alpha blending dans le G-buffer, avant le calcul de l’éclairage.',
                        lighting_title: 'Éclairage direct',
                        lighting_desc:
                            'Calcul de l’éclairage PBR à partir du G-buffer, des lumières et des shadow maps.',
                        composition_title: 'Composition avec la skybox',
                        composition_desc:
                            'Combinaison de l’image éclairée et de la skybox dans la cible finale, à partir des informations de profondeur.',
                        textures_title: 'Objets opaques',
                        textures_desc:
                            'Objets utilisant des textures 2D ou des cubemaps, dessinés sans éclairage PBR dans la cible finale.',
                        texture_alpha_title: 'Puis les transparences',
                        texture_alpha_desc:
                            'Objets texturés transparents mélangés dans cette même cible.',
                        extensions_title: 'Extensions possibles',
                        extensions_desc:
                            'D’autres passes pourraient être ajoutées : antialiasing, occlusion ambiante, rendu volumétrique… Elles pourraient être activées selon les besoins de chaque vue ou effet.',
                        caption:
                            'Représentation simplifiée du pipeline actuel pour une vue de la scène.',
                        transparency_note:
                            'Le traitement des transparences PBR reste une limite de cette version : leurs attributs sont mélangés dans le G-buffer avant le calcul de l’éclairage.',
                    },
                    progress_title: 'Illumination globale',
                    progress_desc:
                        'Je travaille actuellement sur l’illumination globale. Les sondes peuvent déjà capturer la scène sur les six faces d’une cubemap. La prochaine étape consiste à précalculer et exploiter ces informations pour produire un éclairage indirect.',
                    prototype_title: 'Star Engine',
                    prototype_desc:
                        'Avant Galaxy Engine, j’ai participé au développement de Star Engine, un moteur réalisé en groupe à l’université. J’ai notamment travaillé sur l’ECS, l’éditeur, les animations et les collisions, tandis qu’un autre membre de l’équipe développait le shader PBR. Ce premier projet m’a fait prendre conscience de l’importance de bien séparer les responsabilités des différents systèmes, ce qui a guidé la conception de Galaxy Engine.',
                    prototype_alt:
                        'Star Engine, prototype universitaire réalisé en groupe, montrant une scène et ses volumes de collision en fil de fer.',
                    prototype_caption:
                        'Star Engine — visualisation des volumes de collision du premier prototype.',
                    camera_caption_0:
                        'Star Engine — expérimentation sur le système de caméra.',
                    camera_caption_1:
                        'Star Engine — autre vue du système de caméra.',
                },

                games: {
                    title: 'jeux',
                    quickDesc: 'Jeux et outils développés avec Godot',
                    context:
                        "J'aime développer des jeux dans mon temps libre. Bien qu'il s'agisse généralement de tester des concepts plus que de faire un jeu complet",
                    behavior_title: 'Arbre de comportement',
                    behavior_desc:
                        "J'ai développé un addon pour godot 4.2 mono. Il s'agit d'une implémentation d'arbre de comportement qui permet de créer facilement des comportements d'IA complexes à l'aide d'un arbre. Sur l'illustration à droite par exemple on peut voir l'utilisation de l'extension dans le graphe de scène de Godot, si un noeud de la séquence d'actions 'FollowMouse' échoue, alors on passera à la séquence 'GoHome'.",
                    dicecraft_desc:
                        "J'ai participé à une game jam durant laquelle, en équipe de trois, nous avons créé un jeu appelé Dicecraft. Le principe du jeu est de fabriquer des dés afin de manipuler l'aléatoire et de maximiser les combos et la quantité d'unités invoquées par les lancés de dés pour affronter une IA. Le jeu manque de finition, mais ce fut un projet amusant, et les mécaniques de base sont solides.",
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
                ebucilper: {
                    title: 'ebucilper',
                    learnings:
                        "L'objectif était de réaliser un prototype de jeu en temps limité, comme lors d'une game jam, tout en conservant suffisamment de temps pour que le prototype reste jouable.",
                    quickDesc: 'Jeu sérieux pour apprendre la programmation, inspiré de « Replicube »',
                    context:
                        "Ce projet visait à créer un jeu sérieux permettant aux débutants d'apprendre des concepts de programmation. Dans ce jeu, il faut ordonner des instructions pour placer des blocs dans une grille 3D afin de reproduire une structure cible.",
                },
                segmentation: {
                    title: 'segmentation',
                    quickDesc: 'Segmentation d\'images utilisant des algorithmes de clustering de superpixels',
                    context:
                        'Ce projet visait à explorer les techniques de segmentation d\'images à l\'aide d\'algorithmes de clustering de superpixels. L\'objectif était d\'implémenter et de comparer différents algorithmes pour comprendre leurs forces et faiblesses dans la segmentation efficace d\'images et de les tester pour la compression d\'images.',
                    learnings:
                        'J\'ai implémenté et comparé plusieurs algorithmes de clustering de superpixels (notamment SLIC, SNIC et une méthode basée sur Watershed), en évaluant la qualité de segmentation, le temps d\'exécution et la robustesse sur différents types d\'images. J\'ai également développé un schéma d\'encodage compact qui stocke une palette de couleurs par superpixel et une correspondance de pixels relative aux voisins, ce qui se compresse bien avec le codage Huffman. Le travail a produit un résultat visuel stylisé et a atteint des taux de compression jusqu\'à 3× sans dégradation visuelle significative.',
                    segmentation_before: 'Image avant segmentation avec {algorithm}',
                    segmentation_after: 'Image après segmentation avec {algorithm}',
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
