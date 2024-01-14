<template>
    <div id="align">
        <Transition name="fade">
            <h1 style="margin-top: 60px;" v-if="!projectS.projectOpened">{{ introduction }}</h1>
        </Transition>
        <div class="section" id="presentationSection">
            <PresentationPanel />
        </div>

        <Transition name="fade">
            <div class="title" v-if="!projectS.projectOpened">
                <h1>{{ projectsTitle }}</h1>
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
import { computed } from "vue";
import { i18n } from "@/i18n/translations";

const projectS = projectStore()

const {t} = i18n

const introduction = computed(() => t('introduction'))
const projectsTitle = computed(() => t('experiences'))

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




.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease;
}

.fade-leave-to,
.fade-enter-from {
    opacity: 0%;
}

</style>