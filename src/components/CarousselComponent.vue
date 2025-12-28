<script setup lang="ts">
import { onUnmounted, ref } from 'vue';

defineProps<{ images: { path: string; desc: string }[] }>()


const isMobile = ref(window.innerWidth < 1000)
const update = () => (isMobile.value = window.innerWidth < 1000)
window.addEventListener('resize', update)
onUnmounted(() => window.removeEventListener('resize', update))
</script>
<template>
    <div class="caroussel" :class="{'column': isMobile}">
        <div v-for="(image, index) in images" :key="index" class="caroussel-item column">
            <img :src="image.path" :alt="image.desc" class="round" />
            <p>{{ image.desc }}</p>
        </div>
    </div>
</template>

<style scoped>
.caroussel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 10px;
    padding: 10px;
    width: auto;
    height: 400px; /* Adjust height as needed */
}

.caroussel-item {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.caroussel-item > img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    flex-shrink: 0;
}

.caroussel-item > p {
    flex: 0 0 auto;
    margin: 0;
    padding: 8px 4px;
    text-align: center;
    min-height: 3.6em; /* Ensure descriptions occupy consistent height (~2 lines) */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
}
</style>
