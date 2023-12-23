<template>
    <div class="presentation">
        <!-- <h1 class="whiteText">{{ title }}</h1> -->
        <p class="greyText">{{ content }}</p>
        <!-- ptetre une image de background -->
    </div>
</template>

<script setup lang="ts">
    defineProps(['title', 'content'])
</script>

<style scoped>
.presentation {
    max-width: 600px;
    padding: 10px;
    margin: 10px;
    text-align: left;
}
</style>