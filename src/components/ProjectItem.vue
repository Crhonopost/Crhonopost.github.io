<template>
    <GlassComponent :is-hoverable="false">
        <div @click="navigateToProject" class="project clickable">
            <h1 class="whiteText">{{ project.value.title }}</h1>
            <p>{{ project.value.shortDescription }}</p>
            <div class="tags">
                <TagComponent v-for="tag in project.value.tags" :title="tag" />
            </div>
        </div>
    </GlassComponent>
</template>

<script setup lang="ts">
import {Project} from "@/types"
import projectStore from "@/store/projectStore"
import TagComponent from "@/components/TagComponent.vue"
import GlassComponent from "./GlassComponent.vue";
import { ComputedRef} from "vue";


const props = defineProps<{
    project: ComputedRef<Project>
}>()


function navigateToProject() {
    projectStore().openProject(props.project.value)
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