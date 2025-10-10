<script setup lang="ts">
defineProps<{ images: string[] }>()
</script>
<template>
    <div class="caroussel">
        <img
            v-for="(image, index) in images"
            :key="index"
            class="caroussel-item"
            :src="image"
            alt="Caroussel Image"
        />
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
    flex: none;
    scroll-snap-align: start;
}
</style>
