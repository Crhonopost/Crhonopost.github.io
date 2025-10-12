<script setup lang="ts">
import ProjectSummary from './ProjectSummary.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'

const { t } = useI18n()
</script>

<template>
    <ProjectSummary
        :title="capitalizeFirst(t('projects.volumetric.title'))"
        context="In the context of my first year of master's degree in Imagine at the Faculty of
        Sciences, I had the opportunity to work in a group on a supervised research project
        whose objective (different from other groups) was to experiment with different
        approaches for rendering clouds in volume."
        :technologies="['C++', 'OpenGL', 'GLSL', 'ImGUI']"
        :links="[{ url: 'https://github.com/TER-VOX/cloud', name: 'Github' }]"
    >
        <div class="project_learning">
            <h2>{{ capitalizeFirst(t('titles.learning')) }}</h2>
            <p>
                This project was an opportunity to discover different approaches to modeling (from
                noise, using particles) as well as rendering (using impostors to visualize
                particles, ray marching of a volume). All of this wrapped in a solution to observe
                the results of the different approaches. I also had the opportunity to experiment
                with compute shaders to minimize CPU-GPU communication, managing particles entirely
                on the GPU and allowing sampling in a 3D texture for ray marching.
            </p>
        </div>
    </ProjectSummary>
</template>

<style>
@import url('@/components/Projects/style.css');
</style>
