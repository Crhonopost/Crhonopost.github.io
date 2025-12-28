<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProjectShortComponent from './ProjectShortComponent.vue'
import { capitalizeFirst, isScrollable } from '@/util/util'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projectClickedSignal = defineEmits<{
    (e: 'projectClicked', index: number): void
}>()

const projects = [
    {
        title: () => 'Shell texturing',
        description: () => t('projects.shell.quickDesc'),
        technologies: ['WebGL', 'Typescript', 'Three.js'],
        illustration: './projects/shelltexturing/fur.png',
    },
    {
        title: () => capitalizeFirst(t('projects.engine.title')),
        description: () => t('projects.engine.quickDesc'),
        technologies: ['OpenGL', 'C++'],
        illustration: './projects/gameengine/illu_game.png',
    },
    {
        title: () => capitalizeFirst(t('projects.rendering.title')),
        description: () => t('projects.rendering.quickDesc'),
        technologies: ['OpenGL', 'C++'],
        illustration: '/projects/TER/cloud-around.gif',
    },
    {
        title: () => capitalizeFirst(t('projects.segmentation.title')),
        description: () => t('projects.segmentation.quickDesc'),
        technologies: ['C++', 'ImGUI'],
        illustration: './projects/segmentation/illu.png',
    },
    {
        title: () => capitalizeFirst(t('projects.ebucilper.title')),
        description: () => t('projects.ebucilper.quickDesc'),
        technologies: ['Godot', 'Gdscript'],
        illustration: './projects/ebucilper/illu.png',
    },
    {
        title: () => capitalizeFirst(t('projects.games.title')),
        description: () => t('projects.games.quickDesc'),
        technologies: ['Godot', 'Gdscript', 'C#'],
        illustration: './projects/games/what.gif',
    },
    {
        title: () => capitalizeFirst(t('projects.web.title')),
        description: () => t('projects.web.quickDesc'),
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
        <h1>{{ capitalizeFirst(t('titles.projects')) }}</h1>
        <div class="projects-container" ref="projectContainer">
            <ProjectShortComponent
                v-for="(project, index) in projects"
                :key="index"
                class="glass clickable project"
                :title="project.title()"
                :description="project.description()"
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
