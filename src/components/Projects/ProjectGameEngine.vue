<script lang="ts" setup>
import ProjectSummary from '@/components/Projects/ProjectSummary.vue'
import CarousselComponent from '../CarousselComponent.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import ProjectSection from './ProjectSection.vue'

const { t, tm } = useI18n()

const features = () => tm('projects.engine.features_list') as string[]
</script>

<template>
    <ProjectSummary
        title="Star Engine"
        :context="t('projects.engine.context')"
        :technologies="['C++', 'OpenGL', 'GLSL', 'ImGUI']"
        :links="[{ url: 'https://github.com/Crhonopost/Star-engine', name: 'Github' }]"
    >
        <ProjectSection
            :title="capitalizeFirst(t('titles.learning'))"
            :desc="t('projects.engine.learnings')"
            :image-first="false"
            image-path="./projects/gameengine/main_scene.png"
            image-alt="Main menu of the game engine"
        />
        <CarousselComponent
            :images="[
                {
                    path: './projects/gameengine/init.gif',
                    desc: t('projects.engine.img_desc_0'),
                },
                { path: './projects/gameengine/moving.gif', desc: t('projects.engine.img_desc_1') },
            ]"
            class="caroussel"
        />

        <ProjectSection
            :title="capitalizeFirst(t('titles.next_steps'))"
            :desc="t('projects.engine.next_steps')"
            :image-first="true"
            image-path="./projects/gameengine/new_editor.png"
            image-alt="New menu with a correct scene structure"
        >
        </ProjectSection>
        <div id="list">
            <h3>{{ t("projects.engine.features_list_title") }}</h3>
            <ul>
                <li v-for="(str, i) in features()" :key="i">{{ str }}</li>
            </ul>
        </div>
    </ProjectSummary>
</template>

<style>
#list {
    width: 60%;
}
</style>
