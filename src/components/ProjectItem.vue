<template>
    <GlassComponent :is-hoverable="false">
        <div @click="navigateToProject" class="project">
            <h1 class="whiteText">{{ project.title }}</h1>
            <p>{{ project.shortDescription }}</p>
            <div class="tags">
                <TagComponent v-for="tag in project.tags" :title="tag" />
            </div>
        </div>
    </GlassComponent>
</template>

<script setup lang="ts">
import {Project} from "@/types"
import { useRouter } from 'vue-router'
import projectStore from "@/store/projectStore"
import TagComponent from "@/components/TagComponent.vue"
import GlassComponent from "./GlassComponent.vue";


const props = defineProps<{
    project: Project
}>()


function navigateToProject() {
    projectStore().openProject(props.project)
}
</script>

<style scoped>

.project {
    width: 400px;
    padding: 10px;
}

.project p {
    color: #84a3a8;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
</style>