<template>
    <div id="grid">
        <Presentation title="Presentation" :content="presentation.resume.value"></Presentation>
        <Presentation title="Biographie" :content="presentation.biography.value"></Presentation>
        <Presentation title="Intérets" :content="presentation.interests.value"></Presentation>
    </div>
</template>

<script setup lang="ts">
import Presentation from "@/components/PresentationItem.vue"
import { i18n } from "@/i18n/translations"
import { computed } from "vue"

const {t} = i18n

const presentation = {
    resume: computed(() => t(`presentation.resume`)), 
    biography: computed(() => t('presentation.biography')), 
    interests: computed(() => t('presentation.interests'))
    }
</script>


<style scoped>
</style>