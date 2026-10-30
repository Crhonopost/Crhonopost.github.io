<script setup lang="ts">
import NavBar from '@/components/Navigation/NavBar.vue'
import DepthScroll from '@/components/DepthScroll/DepthListComponent.vue'
import SceneComponent from '@/components/SceneRendering/SceneComponent.vue'
import ProjectShellTexturing from '@/components/Projects/ProjectShellTexturing.vue'
import ProjectRendering from '@/components/Projects/ProjectRendering.vue'
import ProjectGameEngine from '@/components/Projects/ProjectGameEngine.vue'
import Apropos from '@/components/AproposComponent.vue'
import SkillSetComponent from './components/Skills/SkillSetComponent.vue'
import { AnotationEnum, type Skill } from '@/types'
import ProjectShorts from './components/Projects/ProjectShorts.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import ProjectGames from './components/Projects/ProjectGames.vue'
import ExperiencesComponent from './components/ExperiencesComponent.vue'
import ProjectWeb from './components/Projects/ProjectWeb.vue'
import PerformancePopup from './components/PerformancePopup.vue'
import ProjectSegmentation from './components/Projects/ProjectSegmentation.vue'
import ProjectEbucilper from './components/Projects/ProjectEbucilper.vue'



const skills: Skill[] = [
    { name: 'C++', icon: './logo/cpp.png', anotation: AnotationEnum.LANGUAGE, isWeb: false },
    { name: 'GLSL', icon: './logo/opengl.png', anotation: AnotationEnum.LANGUAGE, isWeb: false },
    { name: 'Godot', icon: './logo/godot.png', anotation: AnotationEnum.TOOL, isWeb: false },
    { name: 'Java', icon: './logo/java.png', anotation: AnotationEnum.LANGUAGE, isWeb: false },
    { name: 'C#', icon: './logo/csharp.png', anotation: AnotationEnum.LANGUAGE, isWeb: false },
    { name: 'HTML', icon: './logo/html.png', anotation: AnotationEnum.LANGUAGE, isWeb: true },
    { name: 'CSS', icon: './logo/css.png', anotation: AnotationEnum.LANGUAGE, isWeb: true },
    {
        name: 'PostgreSQL',
        icon: './logo/postgre.png',
        anotation: AnotationEnum.LANGUAGE,
        isWeb: true,
    },
    { name: 'TypeScript', icon: './logo/ts.png', anotation: AnotationEnum.LANGUAGE, isWeb: true },
    { name: 'NodeJS', icon: './logo/node.png', anotation: AnotationEnum.TOOL, isWeb: true },
    { name: 'VueJS', icon: './logo/vue.png', anotation: AnotationEnum.TOOL, isWeb: true },
    { name: 'NestJS', icon: './logo/nest.png', anotation: AnotationEnum.TOOL, isWeb: true },
]

const projectsComponents = [
    ProjectShellTexturing,
    ProjectGameEngine,
    ProjectRendering,
    ProjectGames,
    ProjectWeb,
    ProjectSegmentation,
    ProjectEbucilper,
]
const pageCount = 4
const currentSlide = ref(0)
const selectedProject = ref(-1)
const sceneComponentRef = ref<InstanceType<typeof SceneComponent>>()

function tryMoving(position: number, project: number | null = null): boolean {
    const isProject = position === pageCount && project !== null &&
        Number.isInteger(project) && project >= 0 && project < projectsComponents.length
    if (!Number.isInteger(position) || position < 0 ||
        (position >= pageCount && !isProject)) return false
    if (position === currentSlide.value && (!isProject || project === selectedProject.value)) return false

    const previousSlide = currentSlide.value
    currentSlide.value = position
    if (isProject) selectedProject.value = project!

    const url = new URL(window.location.href)
    url.searchParams.set('s', position.toString())
    if (isProject) url.searchParams.set('p', project!.toString())
    else url.searchParams.delete('p')
    history.pushState({ page: position }, '', url)
    sceneComponentRef.value?.movePlaine(position > previousSlide ? 'front' : 'back')
    return true
}

function projectClicked(idx: number) {
    tryMoving(pageCount, idx)
}

function restoreLocation() {
    const params = new URLSearchParams(window.location.search)
    const position = Number(params.get('s') ?? '0')
    const project = Number(params.get('p') ?? '-1')
    const validProject = Number.isInteger(project) && project >= 0 && project < projectsComponents.length
    selectedProject.value = validProject ? project : -1
    currentSlide.value = Number.isInteger(position) && position >= 0 && position < pageCount
        ? position
        : position === pageCount ? (validProject ? pageCount : pageCount - 1) : 0
}

onMounted(() => {
    restoreLocation()
    window.addEventListener('popstate', restoreLocation)
})
onUnmounted(() => window.removeEventListener('popstate', restoreLocation))

</script>

<template>
    <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
            rel="stylesheet"
        />
    </head>
    <div id="layout">
        <header>
            <NavBar
                @moved="(position) => tryMoving(position)"
                :active-page="currentSlide"
                :page-count="pageCount"
                :can-move-backward="currentSlide > 0"
                :can-move-forward="currentSlide < pageCount - 1"
            />
        </header>

        <main>
            <PerformancePopup @lower-resolution="sceneComponentRef?.optimize"/>
            <SceneComponent ref="sceneComponentRef" />
            <DepthScroll :active-index="currentSlide" id="depth">
                <Apropos class="item" />
                <ExperiencesComponent />
                <SkillSetComponent class="item" :skills="skills" />
                <ProjectShorts class="item" @project-clicked="projectClicked" />
                <component
                    v-if="currentSlide === pageCount && selectedProject >= 0"
                    :is="projectsComponents[selectedProject]"
                    class="item"
                />
            </DepthScroll>
        </main>
    </div>
</template> 

<style scoped>
#layout {
    display: flex;
    width: 100vw;
    height: 100vh;
}

header {
    flex-shrink: 0;
}

main {
    flex: 1;             /* Prend tout l’espace restant */
    overflow: hidden;    /* Évite les débordements */
    display: flex;
    flex-direction: column;
}
.item {
    max-height: 80vh;
    margin: 15px;
}


#depth {
    height: 100%;
}

@media (max-width: 700px) {
    #layout {
        flex-direction: column;
        flex-flow: column-reverse;
    }

    header {
        width: 100%;
    }

    main {
        flex: none;
        flex-grow: 1;
    }
}
</style>
