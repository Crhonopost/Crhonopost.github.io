<template>
    <div class="tag">
        <h4>{{ props.title }}</h4>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['title'])
</script>

<style scoped>
.tag{
    background-color: #34553d;
    border-radius: 5px;
    color: #64F58D;
    height: 20px;
    max-width: 80px;
    font-size: smaller;
    margin: 0px;
    padding: 0px;
}

h4 {
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 4px;
    margin-right: 4px;
}
</style>