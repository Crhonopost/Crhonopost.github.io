<script setup lang="ts">
import { onUnmounted, ref } from 'vue';

defineProps<{
    title: string
    desc: string | undefined
    imagePath: string
    imageAlt: string | undefined
    imageFirst: boolean
}>()

const isMobile = ref(window.innerWidth < 1200)
const update = () => (isMobile.value = window.innerWidth < 1200)
window.addEventListener('resize', update)
onUnmounted(() => window.removeEventListener('resize', update))
</script>

<template>
    <div class="project-section" :class="{'row': !isMobile, 'column': isMobile}">
        <img class="round" :src="imagePath" :alt="imageAlt" v-if="imageFirst || isMobile" />
        <div class="column">
            <h2>{{ title }}</h2>
            <p>
                {{ desc }}
                <component
                    v-for="(item, index) in $slots.default?.() ?? []"
                    :key="index"
                    :is="item"
                />
            </p>
        </div>
        <img class="round" :src="imagePath" :alt="imageAlt" v-if="!imageFirst && !isMobile" />
    </div>
</template>

<style>
.project-section {
    width: 60%;
    margin: 20px;
}

.project-section .column {
    padding: 30px;
}

.project-section > div > * {
    flex: 1;
    height: 100%;
}

.project-section img {
    width: 300px;
    max-height: 300px;
    object-fit: contain;
}

@media (max-width: 1400px) {
    .project-section {
        width: 100%;
    }
} 
@media (max-width: 1200px) { 
    .project-section {
        align-items: center;
    }

    .project-section > * {
        align-items: center;
    }
}

@media (max-width: 700px) {
    .project-section p {
        font-size: small;
    }
 }
</style>
