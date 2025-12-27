<script lang="ts" setup>
import ProjectSummary from '@/components/Projects/ProjectSummary.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import ProjectSection from './ProjectSection.vue'

const { t } = useI18n()

</script>

<template>
    <ProjectSummary
        title="Ebucilper"
        :context="t('projects.ebucilper.context')"
        :technologies="['Godot', 'GDScript']"
        :links="[{ url: 'https://github.com/Crhonopost/Projet-jeu-serieux', name: 'Github' }, 
        { url: 'https://crhonopose.itch.io/ebucilper', name: 'itch.io' }]"
    >
        <ProjectSection
            :title="capitalizeFirst(t('titles.learning'))"
            :desc="t('projects.ebucilper.learnings')"
            :image-first="false"
            image-path="./projects/ebucilper/ebucilper_main.png"
            image-alt="Whole view of the programming interface"
        />
    </ProjectSummary>
</template>

<style scoped></style>