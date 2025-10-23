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

.caroussel-item > img {
    height: 100%;
    object-fit: contain;
}
</style>
