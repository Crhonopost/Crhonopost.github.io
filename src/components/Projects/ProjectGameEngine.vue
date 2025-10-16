<script lang="ts" setup>
import ProjectSummary from '@/components/Projects/ProjectSummary.vue'
import CarousselComponent from '../CarousselComponent.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import ProjectSection from './ProjectSection.vue'

const { t } = useI18n()
</script>

<template>
    <ProjectSummary
        title="Star Engine"
        context="During the second semester of my first year of master's degree in Imagine at the
                Faculty of Sciences, I worked on a game engine project. Being passionate about video
                game creation, it was an excellent experience. Limited by the submission date, there
                is still much to add."
        :technologies="['C++', 'OpenGL', 'GLSL', 'ImGUI']"
        :links="[{ url: 'https://github.com/Crhonopost/Star-engine', name: 'Github' }]"
    >
        <ProjectSection
            :title="capitalizeFirst(t('titles.learning'))"
            desc="My goal was to build a general purpose game engine. Through this project, I
                    implemented an Entity-Component System,
                    PBR rendering, a lightweight editor for
                    debugging, and an early physics system handling collisions
                    (AABB, OBB, spheres, planes, rays, and rigid bodies collision reactions). It was
                    my first large-scale C++ project — a challenging but extremely rewarding
                    experience."
            :image-first="false"
            image-path="./projects/gameengine/main_scene.png"
            image-alt="Main menu of the game engine"
        />
        <CarousselComponent
            :images="[
                {
                    path: './projects/gameengine/init.gif',
                    desc: 'Some of the work done on the camera',
                },
                { path: './projects/gameengine/moving.gif', desc: 'Second example of camera' },
            ]"
            class="caroussel"
        />

        <ProjectSection
            title="Next Steps"
            desc="The first version taught me enough to start over. 
                The upcoming V2 focuses on a stronger code architecture and takes inspiration
                from Godot’s design, emphasizing inheritance and composition over a pure ECS
                approach."
            :image-first="true"
            image-path="./projects/gameengine/new_editor.png"
            image-alt="New menu with a correct scene structure"
        >
        </ProjectSection>
        <div id="list">
            <h3>Some of the features I want to implement</h3>
            <ul>
                <li>Independent renderer exposing a clear API (done)</li>
                <li>Better resource and scene serialization management (done)</li>
                <li>Improved logging and debugging tools (done)</li>
                <li>Global illumination with light probes</li>
                <li>Physics rework and scripting support</li>
            </ul>
        </div>
    </ProjectSummary>
</template>

<style>
#list {
    width: auto;
}
</style>
