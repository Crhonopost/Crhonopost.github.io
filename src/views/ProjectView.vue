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
        <div class="carroussel">
            <img class="projectImg" v-for="imgPath in project.caroussel" :src="imgPath" />
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
    width: 70%;
    max-width: 1000px;
    margin: auto;
}

.carroussel {
    margin-top: 70px;
}

.projectImg {
    max-width: 600px;
}
</style>