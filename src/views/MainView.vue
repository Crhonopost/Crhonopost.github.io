<template>
    <div id="presentation">
        <PresentationPanel />
    </div>
    <div>
        <ProjectList />
    </div>
</template>

<script setup lang="ts">
import PresentationPanel from "@/components/PresentationPanel.vue"
import ProjectList from "@/components/ProjectList.vue"
</script>

<style scoped>
#presentation {
    margin-left: 200px;
    width: 100%;
}
</style>