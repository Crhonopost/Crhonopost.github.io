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

<style scoped>
.tag {
    background-color: #34553d;
    border-radius: 5px;
    color: #64f58d;
    height: 25px;
    width: fit-content;
    font-size: smaller;
    align-content: center;

    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 4px;
    padding-right: 4px;
}
</style>
