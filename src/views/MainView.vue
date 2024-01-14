<template>
    <div id="align">
        <div class="section" id="presentationSection">
            <PresentationPanel />
        </div>

        <Transition name="proj">
            <div class="title" v-if="!projectS.projectOpened">
                <h1>Expériences majeures</h1>
            </div>
        </Transition>

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
import projectStore from "@/store/projectStore";

const projectS = projectStore()

</script>

<style scoped>
#presentationSection {
    padding-top: 20%;
}
.title {
    margin-top: 80px;
    margin-bottom: 20px;
    text-align: left;
    width: fit-content;
}
#align{
    max-width: 800px;
    display: flex;
    flex-direction: column;
}

#presentation {
    margin-top: 30%;
    margin-bottom: 50%;
}

#projets {
    margin-top: 20px;
}




.proj-enter-active,
.proj-leave-active{
  transition: opacity 0.5s ease;
}

.proj-leave-to,
.proj-enter-from {
    opacity: 0%;
}

</style>