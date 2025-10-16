<script setup lang="ts">
import ProjectSection from './ProjectSection.vue'
import ProjectSummary from './ProjectSummary.vue'
</script>

<template>
    <ProjectSummary
        title="Web"
        context="During my studies, I had the opportunity to work on several web projects. It was a great way to learn about web technologies and how to create advanced web applications."
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
            desc="The goal of this project was to make a web application providing receipes around a
                specific theme. Ours was about the game Satisfactory. I worked on the frontend part
                of the application, which included a minigame that I build entirely using Vue
                reactivity."
            image-path="/projects/web/satiscraftory.png"
            image-alt="SatisCraftory screenshot"
            :image-first="false"
        />

        <ProjectSection
            title="Explore"
            desc="For this project, I worked on the backend part of a web application. Implementing
                pathfinding algorithms and database structure and optimization."
            image-path="/projects/web/explore_ui.png"
            image-alt="Explore application screenshot"
            :image-first="true"
        />

        <ProjectSection
            title="Rich Vote"
            desc="I also worked on the backend of a web application for voting. The goal was to offer
                different ways to vote and tools to create and manages propositions."
            image-path="/projects/web/RichVote_liste.png"
            image-alt="Rich Vote application screenshot"
            :image-first="false"
        />
    </ProjectSummary>
</template>

<style></style>
