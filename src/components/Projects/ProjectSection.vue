<script setup lang="ts">
defineProps<{
    title: string
    desc: string | undefined
    imagePath: string
    imageAlt: string | undefined
    imageFirst: boolean
}>()
</script>

<template>
    <div class="project-section row">
        <img class="round" :src="imagePath" :alt="imageAlt" v-if="imageFirst" />
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
        <img class="round" :src="imagePath" :alt="imageAlt" v-if="!imageFirst" />
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
</style>
