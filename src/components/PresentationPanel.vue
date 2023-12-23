<template>
    <div id="grid">
        <Presentation title="Presentation" :content="presentation.resume"></Presentation>
        <Presentation title="Biographie" :content="presentation.biography"></Presentation>
        <Presentation title="Intérets" :content="presentation.interests"></Presentation>
    </div>
</template>

<script setup lang="ts">
import Presentation from "@/components/PresentationItem.vue"
import {useI18n} from "vue-i18n"

const {t} = useI18n();

const presentation = {resume: t(`presentation.resume`), biography: t('presentation.biography'), interests: t('presentation.interests')}
</script>


<style scoped>
</style>