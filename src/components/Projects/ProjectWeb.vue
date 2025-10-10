<script setup lang="ts">
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
                name: 'School project about receipes.',
            },
            {
                url: 'https://github.com/odilonv/explore',
                name: 'Google maps like application',
            },
            {
                url: 'https://github.com/Crhonopost/Rich-Vote',
                name: 'Web application for voting',
            },
        ]"
    >
        <div class="sub-project">
            <h2>SatisCraftory</h2>
            <p>
                The goal of this project was to make a web application providing receipes around a
                specific theme. Ours was about the game Satisfactory. I worked on the frontend part
                of the application, which included a minigame that I build entirely using Vue
                reactivity.
            </p>
            <a href="https://github.com/Projet-Web-Recette/Frontend-recette">Github link</a>
            <img
                src="/projects/web/satiscraftory.png"
                alt="SatisCraftory screenshot"
                class="project_image"
            />
        </div>

        <div class="sub-project">
            <h2>Explore</h2>
            <p>
                For this project, I worked on the backend part of a web application. Implementing
                pathfinding algorithms and database structure and optimization.
            </p>
            <a href="https://github.com/odilonv/explore">Github link</a>
            <img
                src="/projects/web/explore_ui.png"
                alt="Explore application screenshot"
                class="project_image"
            />
        </div>
        <div class="sub-project">
            <h2>Rich Vote</h2>
            <p>
                I also worked on the backend of a web application for voting. The goal was to offer
                different ways to vote and tools to create and manages propositions.
            </p>
            <a href="https://github.com/Crhonopost/Rich-Vote">Github link</a>
            <img
                src="/projects/web/RichVote_liste.png"
                alt="Rich Vote application screenshot"
                class="project_image"
            />
        </div>
    </ProjectSummary>
</template>

<style>
@import url('@/components/Projects/style.css');

.sub-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.sub-project > p {
    width: 80%;
    padding: 15px;
}

.project_image {
    width: 80%;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>
