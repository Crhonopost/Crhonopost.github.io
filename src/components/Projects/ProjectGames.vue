<script setup lang="ts">
import { capitalizeFirst } from '@/util/util'
import ProjectSection from './ProjectSection.vue'
import ProjectSummary from './ProjectSummary.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <ProjectSummary
        :title="capitalizeFirst(t('projects.games.title'))"
        :context="t('projects.games.context')"
        :technologies="['Godot', 'C#', 'GDScript']"
        :links="[
            { url: 'https://ohhnyx.itch.io/dicecraft', name: 'Game jam contribution' },
            {
                url: 'https://github.com/Crhonopost/Behavior_tree_4.2',
                name: 'Godot behavior tree plugin',
            },
        ]"
    >
        <ProjectSection
            :title="t('projects.games.behavior_title')"
            :desc="t('projects.games.behavior_desc')"
            image-path="./projects/games/illu_behavior.png"
            image-alt="Typical use of the behavior tree using composition in godot."
            :image-first="false"
        />

        <ProjectSection
            title="Dicecraft"
            :desc="t('projects.games.dicecraft_desc')"
            image-path="./projects/games/dice_throw_edited.png"
            image-alt="You must protect the left while attacking the right by throwing your dice on the board."
            :image-first="true"
        />

        <ProjectSection
            :title="capitalizeFirst(t('projects.games.other_title'))"
            :desc="t('projects.games.other_desc')"
            image-path="./projects/games/glyphes.png"
            image-alt="Spell creation game illustration"
            :image-first="false"
        />
    </ProjectSummary>
</template>
