<script setup lang="ts">
defineProps<{
    date: string
    location: string
    title: string
    description?: string
}>()
</script>

<template>
    <article class="studies-card">
        <p class="study-date">{{ date }}</p>
        <h3>{{ title }}</h3>
        <p class="study-location">{{ location }}</p>
        <p v-if="description">{{ description }}</p>
        <slot />
    </article>
</template>

<style scoped>
.studies-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    min-width: 0;
}

.studies-card h3 {
    font-size: 1.1rem;
    font-weight: 600;
}

.studies-card p {
    font-size: 0.9rem;
    text-align: left;
}

.study-date {
    font-variant-numeric: tabular-nums;
}

.study-date,
.study-location {
    opacity: 0.85;
}
</style>
