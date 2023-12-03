<template>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
</template>

<script setup lang="ts">
    defineProps(['title', 'content'])
</script>