<template>
    <!-- <div id="presentation" class="section">
        <PresentationPanel />
    </div>
    <div id="projets" class="section">
        <ProjectList />
    </div> -->

    <TestsComponent />
    
    <ModalComponent>
    </ModalComponent>
</template>

<script setup lang="ts">
import PresentationPanel from "@/components/PresentationPanel.vue"
import ProjectList from "@/components/ProjectList.vue"
import ModalComponent from "@/components/ModalComponent.vue";
import TestsComponent from "@/components/TestsComponent.vue";
</script>

<style scoped>

</style>