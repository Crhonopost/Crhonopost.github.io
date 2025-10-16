<script setup lang="ts">
defineProps<{ images: { path: string; desc: string }[] }>()
</script>
<template>
    <div class="caroussel">
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
    width: 100%;
    height: 400px; /* Adjust height as needed */
}

.caroussel-item {
}

.caroussel-item > img {
    height: 100%;
}
</style>
