<template>
    <ModalComponent>
        <h1>SALUT</h1>
    </ModalComponent>
    <div class="align">
        <Transition name="fade" style="z-index: 3;">
            <h1 style="margin-top: 60px;" v-if="!projectS.projectOpened">{{ introduction }}</h1>
        </Transition>
        <div id="presentationSection">
            <PresentationPanel />
        </div>

        <Transition name="fade" style="margin-top: 60px; z-index: 3;">
            <div class="title" v-if="!projectS.projectOpened">
                <h1>{{ projectsTitle }}</h1>
            </div>
        </Transition>

        <div id="projets" class="section">
            <ProjectList />
        </div>
    </div>
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
    padding-left: 10px;
    padding-right: 10px;
}
.title {
    margin-top: 80px;
    margin-bottom: 20px;
    text-align: left;
    width: fit-content;
}

@media screen and (max-width: 650px){
    .align {
        font-size: 0.8em;
    }
}


.align{
    max-width: 800px;
    display: flex;
    flex-direction: column;
    height: fit-content;
}

.align > * {
    margin: auto;
}

#presentation {
    margin-top: 30%;
    margin-bottom: 50%;
}

#projets {
    margin: 10px;
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