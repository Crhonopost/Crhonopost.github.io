<template>
    <div @click="navigateToProject" class="frontHover project">
        <h1 class="whiteText">{{ project.title }}</h1>
        <p>{{ project.shortDescription }}</p>
    </div>
</template>

<script setup lang="ts">
import {Project} from "@/types"
import { useRouter } from 'vue-router'
import projectStore from "@/store/projectStore"


const props = defineProps<{
    project: Project
}>()

const router = useRouter()


function navigateToProject() {
    projectStore.state.selectedProject = props.project
    router.push({
        path: `/project/${props.project.title}`,
    })
}
</script>

<style scoped>
.frontHover:hover {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  border: 1px solid rgba(255, 255, 255, 0.19);  


}

.project {
    max-width: 800px;
}

.project p {
    color: #84a3a8;
}
</style>