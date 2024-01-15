<template>
    <Transition>
        <GlassComponent v-if="!projectS.projectOpened">
            <div id="grid">
                <Presentation title="Presentation" :content="presentation.resume.value"></Presentation>
                <Presentation title="Biographie" :content="presentation.biography.value"></Presentation>
                <Presentation title="Intérets" :content="presentation.interests.value"></Presentation>
            </div>
        </GlassComponent>
    </Transition>
</template>

<script setup lang="ts">
import Presentation from "@/components/PresentationItem.vue"
import { i18n } from "@/i18n/translations"
import projectStore from "@/store/projectStore";
import { computed } from "vue"
import GlassComponent from "./GlassComponent.vue";

const projectS = projectStore()

const {t} = i18n

const presentation = {
    resume: computed(() => t(`presentation.resume`)), 
    biography: computed(() => t('presentation.biography')), 
    interests: computed(() => t('presentation.interests'))
    }
</script>


<style scoped>
#grid {
    color: white;
}
@media screen and (min-width: 650px){
    #grid {
        font-size: 1.5em;
    }
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-1000px);
}
</style>