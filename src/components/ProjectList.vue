<template>
    <div id="list">
        <ProjectItem v-for="project in projects" :project="project"></ProjectItem>
    </div>
</template>

<script setup lang="ts">
import ProjectItem from '@/components/ProjectItem.vue'
import projectStore from "@/store/projectStore"

const {projects} = projectStore().$state;

// TODO: traduction
</script>

<style scoped>
#list > *{
    margin-bottom: 40px;
}

#list > *:nth-child(2n){
    margin-left: 200px;
}
</style>