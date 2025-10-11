<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import DepthScroll from '@/components/DepthScroll/DepthListComponent.vue'
import SceneComponent from '@/components/SceneRendering/SceneComponent.vue'
import ProjectShellTexturing from '@/components/Projects/ProjectShellTexturing.vue'
import ProjectTER from '@/components/Projects/ProjectTER.vue'
import ProjectGameEngine from '@/components/Projects/ProjectGameEngine.vue'
import Apropos from '@/components/AproposComponent.vue'
import SkillSetComponent from './components/Skills/SkillSetComponent.vue'
import { AnotationEnum, type Skill } from '@/types'
import ProjectShorts from './components/Projects/ProjectShorts.vue'
import { onMounted, ref } from 'vue'
import ProjectRayTracing from './components/Projects/ProjectRayTracing.vue'
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

const depthListRef = ref<typeof DepthScroll>()
const sceneComponentRef = ref()

function tryMoving(direction: 'f' | 'b') {
    if (!depthListRef?.value?.canScroll(direction)) {
        console.warn('Cannot scroll in this direction:', direction)
        return
    }

    depthListRef?.value.moveOneSlide(direction)
    if (sceneComponentRef?.value)
        sceneComponentRef.value.movePlaine(direction === 'f' ? 'front' : 'back')
}

onMounted(() => {
    document.addEventListener(
        'wheel',
        (evt) => {
            const scrollDirection = evt.deltaY < 0 ? 'f' : 'b'
            tryMoving(scrollDirection)

            evt.preventDefault()
        },
        { passive: false },
    )
})
function projectClicked(idx: number) {
    selectedProject.value = idx
    depthListRef?.value?.moveOneSlide('f')
    sceneComponentRef?.value.movePlaine('front')
}

const projectsComponents = [
    ProjectShellTexturing,
    ProjectTER,
    ProjectGameEngine,
    ProjectRayTracing,
    ProjectGames,
    ProjectWeb,
]
const selectedProject = ref(-1)
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
                @moved="(dir) => tryMoving(dir)"
                :can-move-backward="depthListRef?.canScroll('b')"
                :can-move-forward="depthListRef?.canScroll('f')"
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
