<script lang="ts" setup>
import { defineProps } from 'vue'
import TechnologieTagComponent from '@/components/Projects/TechnologieTagComponent.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'

const { t } = useI18n()

defineProps<{
    title: string
    description: string
    technologies: string[]
    illustration: string
}>()
</script>

<template>
    <div class="card column">
        <h2>{{ title }}</h2>
        <img :src="illustration" alt="Project Illustration" />
        <p>{{ description }}</p>
        <div class="technologies">
            <TechnologieTagComponent
                class="tag"
                v-for="tech in technologies"
                :key="tech"
                :name="tech"
            />
        </div>
        <div class="right-offset">
            <a href="#">{{ capitalizeFirst(t('viewMore')) }}</a>
        </div>
    </div>
</template>

<style scoped>
.card {
    justify-content: center;
    width: fit-content;
}

.technologies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px;
}

.card p {
    max-width: 300px;
    flex: 1;
    padding-top: 10px;
}

.card img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: left;
    border-radius: 15px;
}

.right-offset {
    display: block;
    width: 100%;
    text-align: right;
}
</style>
