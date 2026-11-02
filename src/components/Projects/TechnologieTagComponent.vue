<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps<{
    name: string
}>()
</script>

<template>
    <div class="tag">
        <h4>{{ name }}</h4>
    </div>
</template>
