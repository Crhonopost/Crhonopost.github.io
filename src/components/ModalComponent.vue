<template>
    <div class="modal" v-if="store.selectedProject.title" @click="store.closeProject">
        <ProjectView :project="store.selectedProject" />
    </div>
</template>

<script setup lang="ts">
import projectStore from '@/store/projectStore';
import ProjectView from '@/views/ProjectView.vue';


const store = projectStore();
</script>

<style scoped lang="css">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
}
</style>