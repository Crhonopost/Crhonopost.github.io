<script lang="ts" setup>
import { defineProps } from 'vue'
import TechnologieTagComponent from '@/components/Projects/TechnologieTagComponent.vue'

defineProps<{
    title: string
    description: string
    technologies: string[]
    illustration: string
}>()
</script>

<template>
    <div class="card">
        <h1>{{ title }}</h1>
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
            <a href="#">View more</a>
        </div>
    </div>
</template>

<style scoped>
.card {
    justify-content: center;
    width: 100%;
}

.technologies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px;
}

.card p {
    max-width: 250px;
}

.card img {
    width: 250px;
    height: 250px;
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
