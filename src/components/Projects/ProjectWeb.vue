<script setup lang="ts">
import { capitalizeFirst } from '@/util/util'
import ProjectSection from './ProjectSection.vue'
import ProjectSummary from './ProjectSummary.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <ProjectSummary
        :title="capitalizeFirst(t('projects.web.title'))"
        :context="t('projects.web.context')"
        :technologies="['Javascript / Typescript', 'Vue.js', 'Node.js', 'SQL', 'PHP']"
        :links="[
            {
                url: 'https://github.com/Projet-Web-Recette/Frontend-recette',
                name: 'git SatisCraftory',
            },
            {
                url: 'https://github.com/odilonv/explore',
                name: 'git Explore',
            },
            {
                url: 'https://github.com/Crhonopost/Rich-Vote',
                name: 'git Rich Vote',
            },
        ]"
    >
        <ProjectSection
            title="SatisCraftory"
            :desc="t('projects.web.satiscraftory_desc')"
            image-path="/projects/web/satiscraftory.png"
            image-alt="SatisCraftory screenshot"
            :image-first="false"
        />

        <ProjectSection
            title="Explore"
            :desc="t('projects.web.explore_desc')"
            image-path="/projects/web/explore_ui.png"
            image-alt="Explore application screenshot"
            :image-first="true"
        />

        <ProjectSection
            title="Rich Vote"
            :desc="t('projects.web.rich_desc')"
            image-path="/projects/web/RichVote_liste.png"
            image-alt="Rich Vote application screenshot"
            :image-first="false"
        />
    </ProjectSummary>
</template>

<style></style>
