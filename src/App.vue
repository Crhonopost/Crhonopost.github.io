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
import { onMounted, ref } from 'vue'
import { appStore } from '@/store/appStore'
import ProjectGames from './components/Projects/ProjectGames.vue'
import ExperiencesComponent from './components/ExperiencesComponent.vue'
import ProjectWeb from './components/Projects/ProjectWeb.vue'
import PerformancePopup from './components/PerformancePopup.vue'
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

const navRef = ref<typeof NavBar>()
const depthListRef = ref<typeof DepthScroll>()
const sceneComponentRef = ref()
let prevPos = 0
function tryMoving(position: number, project: number | null): boolean {

    const concernProject = project != null
    if (!depthListRef?.value?.canScrollTo(position) && !concernProject) {
        console.warn('Cannot scroll to:', position)
        navRef.value?.setNavIdx(prevPos)

        return false
    }

    const url = new URL(window.location.href)
    url.searchParams.set('s', position.toString())
    if (concernProject) url.searchParams.set('p', project.toString())
    else url.searchParams.delete('p')
    history.pushState({ page: position }, '', url)

    depthListRef?.value?.moveToSlide(position)
    // keep store in sync early
    appStore.setSlide(position)
    if (sceneComponentRef?.value)
        sceneComponentRef.value.movePlaine(position - prevPos > 0 ? 'front' : 'back')

    prevPos = position
    return true
}

function projectClicked(idx: number) {
    // navigate one slide backward to show project detail (detail is placed before the list)
    const target = prevPos - 1
    if (tryMoving(target, idx)) {
        navRef.value?.setNavIdx(target)
        selectedProject.value = idx
        appStore.setSelectedProject(idx)
        sceneComponentRef?.value.movePlaine('front')
    }
}

const projectsComponents = [
    ProjectShellTexturing,
    ProjectGameEngine,
    ProjectRendering,
    ProjectEbucilper,
    ProjectGames,
    ProjectWeb,
]
const selectedProject = ref(-1)

onMounted(() => {
    if (!depthListRef.value) return

    const params = new URLSearchParams(window.location.search)
    // default to 1 so the initial page is the projects list (detail is at 0)
    const s = parseInt(params.get('s') || '1', 10)
    const p = parseInt(params.get('p') || '-1', 10)

    const projectIdx = isNaN(p) ? -1 : p
    let slideIdx = isNaN(s) ? 1 : s
    if(slideIdx === 0 && projectIdx === -1)
        slideIdx = 1


    depthListRef.value.moveToSlide(slideIdx)
    prevPos = slideIdx
    navRef.value?.setNavIdx(prevPos)
    appStore.setProjectsCount(projectsComponents.length)
    appStore.setSlide(prevPos)

    // if URL requested a project and we're on the projects list (now at index 1), open it
    if (projectIdx >= 0 && slideIdx === 1) {
        projectClicked(projectIdx)
    }
})


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
                ref="navRef"
                @moved="(dir) => tryMoving(dir, null)"
                :can-move-backward="depthListRef?.canScroll('b')"
                :can-move-forward="depthListRef?.canScroll('f')"
                :page-count="4"
            />
        </header>

        <main>
            <PerformancePopup @lower-resolution="sceneComponentRef?.optimize"/>
            <SceneComponent ref="sceneComponentRef" />
                    <DepthScroll ref="depthListRef" id="depth">
                        <component
                            v-if="selectedProject >= 0"
                            :is="projectsComponents[selectedProject]"
                            class="item"
                        />
                        <ProjectShorts class="item" @project-clicked="projectClicked" />
                        <Apropos class="item" />
                        <ExperiencesComponent />
                        <SkillSetComponent class="item" :skills="skills" />
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
