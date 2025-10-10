<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProjectShortComponent from './ProjectShortComponent.vue'
import { isScrollable } from '@/util/util'

const projectClickedSignal = defineEmits<{
    (e: 'projectClicked', index: number): void
}>()

const projects = [
    {
        title: 'Shell texturing',
        description: 'A small implementation done for this website',
        technologies: ['WebGL', 'Typescript', 'Three.js'],
        illustration: './projects/shelltexturing/fur.png',
    },
    {
        title: 'Volumetric cloud',
        description: 'Experimenting with volumetric cloud rendering',
        technologies: ['OpenGL', 'C++'],
        illustration: './projects/TER/moving_cloud.gif',
    },
    {
        title: 'Game Engine',
        description: 'School project to create a game engine',
        technologies: ['OpenGL', 'C++'],
        illustration: './projects/gameengine/illu_game.png',
    },
    {
        title: 'Ray Tracing',
        description: 'School project to create a ray tracer',
        technologies: ['C++'],
        illustration: './projects/raytracing/refraction.png',
    },
    {
        title: 'Games Projects',
        description: 'Some of my work surrounding game creation',
        technologies: ['Godot', 'Gdscript', 'C#'],
        illustration: './projects/games/illu_behavior.png',
    },
    {
        title: 'Web Projects',
        description: 'Some of my work surrounding web development',
        technologies: ['Vue.js', 'Node.js', 'PHP', 'SQL'],
        illustration: './projects/web/satiscraftory.png',
    },
]

const projectContainer = ref<HTMLElement | null>(null)

onMounted(() => {
    if (projectContainer?.value && isScrollable(projectContainer.value)) {
        projectContainer.value.addEventListener('wheel', (evt) => {
            evt.stopPropagation()
        })
    }
})
</script>

<template>
    <div id="page">
        <h1>Projects</h1>
        <div class="projects-container" ref="projectContainer">
            <ProjectShortComponent
                v-for="(project, index) in projects"
                :key="index"
                class="glass clickable project"
                :title="project.title"
                :description="project.description"
                :technologies="project.technologies"
                :illustration="project.illustration"
                @click="projectClickedSignal('projectClicked', index)"
            />
        </div>
    </div>
</template>

<style scoped>
#page {
    height: 100%;
}

#page h1 {
    margin-left: 60px;
}

.projects-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    overflow: auto;
    padding: 0px 60px 0px 60px;

    mask-image: linear-gradient(
        to right,
        transparent 0px,
        white 80px,
        white calc(100% - 80px),
        transparent 100%
    );
    padding-bottom: 20px;
}

.project {
    min-width: fit-content;
}
</style>
