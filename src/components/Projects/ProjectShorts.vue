<script setup lang="ts">
import ProjectShortComponent from './ProjectShortComponent.vue'
import { capitalizeFirst } from '@/util/util'
import { useI18n } from 'vue-i18n'
import ScrollSlide from '../DepthScroll/ScrollSlide.vue'

const { t } = useI18n()

const componentSignals = defineEmits<{
    (e: 'projectClicked', index: number): void
    (e: 'navigateBack'): void
    (e: 'navigateFront'): void
}>()

const projects = [
    {
        id: 0,
        title: () => 'Shell texturing',
        description: () => t('projects.shell.quickDesc'),
        technologies: ['WebGL', 'Typescript', 'Three.js'],
        illustration: './projects/shelltexturing/fur.png',
    },
    {
        id: 1,
        title: () => capitalizeFirst(t('projects.engine.title')),
        description: () => t('projects.engine.quickDesc'),
        technologies: ['OpenGL', 'C++'],
        illustration: './projects/gameengine/new_editor.png',
    },
    {
        id: 2,
        title: () => capitalizeFirst(t('projects.rendering.title')),
        description: () => t('projects.rendering.quickDesc'),
        technologies: ['OpenGL', 'C++'],
        illustration: '/projects/TER/cloud-around.gif',
    },
    {
        id: 5,
        title: () => capitalizeFirst(t('projects.segmentation.title')),
        description: () => t('projects.segmentation.quickDesc'),
        technologies: ['C++', 'ImGUI'],
        illustration: './projects/segmentation/illu.png',
    },
    {
        id: 3,
        title: () => capitalizeFirst(t('projects.games.title')),
        description: () => t('projects.games.quickDesc'),
        technologies: ['Godot', 'Gdscript', 'C#'],
        illustration: './projects/games/what.gif',
    },
    {
        id: 4,
        title: () => capitalizeFirst(t('projects.web.title')),
        description: () => t('projects.web.quickDesc'),
        technologies: ['Vue.js', 'Node.js', 'PHP', 'SQL'],
        illustration: './projects/web/satiscraftory.png',
    },
]
</script>

<template>
    <div id="page">
        <h1>{{ capitalizeFirst(t('titles.projects')) }}</h1>
        <ScrollSlide
            orientation="horizontal"
            class="projects-scroll"
            :aria-label="capitalizeFirst(t('titles.projects'))"
            @navigate-back="componentSignals('navigateBack')"
            @navigate-front="componentSignals('navigateFront')"
        >
            <div class="projects-container">
                <ProjectShortComponent
                    v-for="project in projects"
                    :key="project.id"
                    class="panel clickable project"
                    :title="project.title()"
                    :description="project.description()"
                    :technologies="project.technologies"
                    :illustration="project.illustration"
                    @click="componentSignals('projectClicked', project.id)"
                />
            </div>
        </ScrollSlide>
    </div>
</template>

<style scoped>
#page {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    height: 100%;
}

#page h1 {
    flex-shrink: 0;
    margin-left: 60px;
}

.projects-scroll {
    flex: 1;
    mask-image: linear-gradient(
        to right,
        transparent 0px,
        white 80px,
        white calc(100% - 80px),
        transparent 100%
    );
}

.projects-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: max-content;
    min-width: 100%;
    padding: 0 60px 20px;
}

.project {
    min-width: fit-content;
}
</style>
