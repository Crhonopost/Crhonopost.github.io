<template>
    <div @click="navigateToProject" class="project clickable glass">
        <h1 class="whiteText">{{ project.value.title }}</h1>
        <p>{{ project.value.shortDescription }}</p>
        <div class="tags">
            <TagComponent v-for="tag in project.value.tags" :title="tag" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {Project} from "@/types"
import projectStore from "@/store/projectStore"
import TagComponent from "@/components/TagComponent.vue"
import { ComputedRef} from "vue";


const props = defineProps<{
    project: ComputedRef<Project>
}>()


function navigateToProject() {
    projectStore().openProject(props.project.value)
}
</script>

<style scoped>
@media screen and (min-width: 500px){
    .project {
        width: 400px;
    }
}

@media screen and (max-width: 500px){
    .project {
        width: 100%;
    }
}


.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 10px;
}
</style>