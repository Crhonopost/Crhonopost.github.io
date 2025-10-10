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
            <h4>{{ date }}</h4>
            <h5>{{ location }}</h5>
        </div>
        <h4>{{ description }}</h4>
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

.studies-card > div > h4 {
    margin-right: 15px;
}
.studies-card > div > * {
    align-content: center;
}
</style>
