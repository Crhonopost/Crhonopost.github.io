<template>
    <div id="align">
        <GlassComponent>
            <div id="presentation" class="section">
                <PresentationPanel />
            </div>
        </GlassComponent>
        
        <div id="projets" class="section">
            <ProjectList />
        </div>
    </div>
    
    <ModalComponent>
        <h1>SALUT</h1>
    </ModalComponent>
</template>

<script setup lang="ts">
import PresentationPanel from "@/components/PresentationPanel.vue"
import ProjectList from "@/components/ProjectList.vue"
import ModalComponent from "@/components/ModalComponent.vue";
import GlassComponent from "@/components/GlassComponent.vue";
import { computed } from "vue";


let _showModal = false
const showModal = computed(() => _showModal)
</script>

<style scoped>
#presentation {
    color: white;
}

#align{
    max-width: 800px;
    display: flex;
    flex-direction: column;
}

#projets {
    margin-top: 60px;
}
</style>