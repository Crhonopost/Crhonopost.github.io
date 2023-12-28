<template>
    <div class="whiteText projectView">
        <div>
            <h1>Résumé</h1>
            <p>{{ project.shortDescription }}</p>
        </div>
        <div>
            <h1>Contexte</h1>
            <p>{{ project.context }}</p>
        </div>
        <div>
            <h1>Description</h1>
            <p>{{ project.description }}</p>
        </div>
        <div>
            <h1>Difficultés</h1>
            <p>{{ project.difficulties }}</p>
        </div>
        <div>
            <h1>Expérience gagnée</h1>
            <p>{{ project.experience }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Project } from "@/types";

const props = defineProps<{
    project: Project
}>()

</script>

<style scoped>
.projectView {
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.3px);
    -webkit-backdrop-filter: blur(6.3px);
    border: 1px solid rgba(255, 255, 255, 0.19);
    padding: 0px;

    width: 70%;
    min-width: 400px;
    max-width: 1000px;
}
</style>