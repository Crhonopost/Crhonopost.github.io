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
        :context="t('projects.shell.context')"
        :technologies="['WebGL', 'Typescript', 'Three.js']"
        :links="[{ url: 'https://github.com/Crhonopost/Crhonopost.github.io', name: 'Github' }]"
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
