<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
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
import ProjectGames from './components/Projects/ProjectGames.vue'
import ExperiencesComponent from './components/ExperiencesComponent.vue'
import ProjectWeb from './components/Projects/ProjectWeb.vue'

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
    if (sceneComponentRef?.value)
        sceneComponentRef.value.movePlaine(position - prevPos > 0 ? 'front' : 'back')

    prevPos = position
    return true
}

function projectClicked(idx: number) {
    // aller sur la slide projet (ici 4) et définir le projet actif
    const projectSlide = 4
    if (tryMoving(projectSlide, idx)) {
        navRef.value?.setNavIdx(projectSlide)
        selectedProject.value = idx
        sceneComponentRef?.value.movePlaine('front')
    }
}

const projectsComponents = [
    ProjectShellTexturing,
    ProjectGameEngine,
    ProjectRendering,
    ProjectGames,
    ProjectWeb,
]
const selectedProject = ref(-1)

onMounted(() => {
    if (!depthListRef.value) return

    const params = new URLSearchParams(window.location.search)
    const s = parseInt(params.get('s') || '0', 10)
    const p = parseInt(params.get('p') || '-1', 10)

    const slideIdx = isNaN(s) ? 0 : s
    const projectIdx = isNaN(p) ? null : p

    depthListRef.value.moveToSlide(slideIdx)
    prevPos = slideIdx
    navRef.value?.setNavIdx(prevPos)

    if (projectIdx !== null && slideIdx === 4) {
        // slide 4 = page projet
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
            <SceneComponent ref="sceneComponentRef" />
            <DepthScroll ref="depthListRef" id="depth">
                <Apropos class="item" />
                <ExperiencesComponent />
                <SkillSetComponent class="item" :skills="skills" />
                <ProjectShorts class="item" @project-clicked="projectClicked" />
                <component
                    v-if="selectedProject >= 0"
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
}

header {
    width: fit-content;
}

main {
    flex: 1;
}

.item {
    max-height: 80vh;
    margin: 15px;
}
</style>
