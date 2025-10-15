<script lang="ts" setup>
import ProjectSummary from '@/components/Projects/ProjectSummary.vue'
import FurEditor from '@/components/FurEditor.vue'
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
        <h1>Concerns</h1>
        <p>Every strands are aligned which instantly break the illusion.</p>
    </ProjectSummary>
</template>

<style></style>
