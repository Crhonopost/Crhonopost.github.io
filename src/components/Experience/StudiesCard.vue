<script setup lang="ts">
defineProps<{
    date: string
    location: string
    description: string
}>()
</script>

<template>
    <div class="studies-card">
        <div>
            <h3>{{ date }}</h3>
            <h3>{{ location }}</h3>
        </div>
        <h2>{{ description }}</h2>
    </div>
</template>

<style scoped>
.studies-card {
    display: flex;
    flex-direction: column;
    margin: 15px;
}

.studies-card div {
    display: flex;
    flex-direction: row;
}

.studies-card > div > h3 {
    margin-right: 15px;
}
.studies-card > div > h3:nth-child(2) {
    font-weight: bold;
}

.studies-card > div > * {
    align-content: center;
}

@media (max-width: 1400px) {
    .studies-card {
        margin: 5px;
    }
    .studies-card h3 {
        margin: 0;
    }
    .studies-card h2 {
        font-size: small;
    }
}
</style>
