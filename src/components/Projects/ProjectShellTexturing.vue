<script lang="ts" setup>
import ProjectSummary from '@/components/Projects/ProjectSummary.vue'
import FurEditor from '@/components/FurEditor.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'

const { t } = useI18n()
</script>

<template>
    <ProjectSummary
        title="Shell Texturing"
        context="While building this website, I wanted to implement a small project to
                showcase my skills. I decided to create a shell texturing effect using WebGL and
                Three.js."
        :technologies="['WebGL', 'Typescript', 'Three.js']"
        :links="[{ url: 'https://github.com/Crhonopost/portfoliopengl', name: 'Github' }]"
    >
        <FurEditor />
        <h1 id="shelldifftitle">{{ capitalizeFirst(t('titles.difficulties')) }}</h1>
        <p id="shelldiff">{{ t('projects.shell.difficulties') }}</p>
    </ProjectSummary>
</template>

<style>
#shelldifftitle {
    width: fit-content;
}
#shelldiff {
    width: 60%;
}
</style>
