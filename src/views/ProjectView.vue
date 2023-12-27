<template>
    <div class="whiteText">
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
import projectStore from "@/store/projectStore"


const project = projectStore.state.selectedProject;


</script>