<script setup lang="ts">
import ProjectSummary from './ProjectSummary.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import ProjectSection from './ProjectSection.vue'

const { t } = useI18n()
</script>

<template>
    <ProjectSummary
        :title="capitalizeFirst(t('projects.rendering.title'))"
        :context="t('projects.rendering.context')"
        :technologies="['C++', 'OpenGL', 'GLSL', 'ImGUI']"
        :links="[
            { url: 'https://github.com/TER-VOX/cloud', name: 'Volumetric clouds' },
            { url: 'https://github.com/Crhonopost/Ray-tracing', name: 'Ray tracing' },
        ]"
    >
        <ProjectSection
            title="Ray tracing"
            :desc="t('projects.rendering.ray_tracing_desc')"
            image-path="/projects/raytracing/refraction.png"
            image-alt="Refraction test"
            :image-first="false"
        />

        <ProjectSection
            title="Volume rendering"
            :desc="t('projects.rendering.volume_desc')"
            image-path="/projects/TER/moving_cloud.gif"
            image-alt="Animated cloud"
            :image-first="true"
        />
    </ProjectSummary>
</template>
