<script lang="ts" setup>
import ProjectSummary from '@/components/Projects/ProjectSummary.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import ProjectSection from './ProjectSection.vue'
import CarousselComponent from '../CarousselComponent.vue'

const { t } = useI18n()

</script>

<template>
    <ProjectSummary
        title="Segmentation"
        :context="t('projects.segmentation.context')"
        :technologies="['C++', 'ImGUI']"
        :links="[{ url: 'https://github.com/Crhonopost/projet-image', name: 'Github' }]"
    >
        <ProjectSection
            :title="capitalizeFirst(t('titles.learning'))"
            :desc="t('projects.segmentation.learnings')"
            :image-first="false"
            image-path="./projects/segmentation/interface.png"
            image-alt="Basic ImGUI interface of the segmentation project"
        />
        <CarousselComponent
            :images="[
                {
                    path: './projects/segmentation/water_before.png',
                    desc: t('projects.segmentation.segmentation_before', { algorithm: 'watershed' }),
                },
                {
                    path: './projects/segmentation/water_after.png',
                    desc: t('projects.segmentation.segmentation_after', { algorithm: 'watershed' }),
                }
            ]"
        />
    <!-- Panda -> SNIC -->
                <CarousselComponent
            :images="[
                {
                    path: './projects/segmentation/panda_before.png',
                    desc: t('projects.segmentation.segmentation_before', { algorithm: 'SNIC' }),
                },
                {
                    path: './projects/segmentation/panda_after.png',
                    desc: t('projects.segmentation.segmentation_after', { algorithm: 'SNIC' }),
                }
            ]"
        />
    </ProjectSummary>
</template>

<style scoped></style>