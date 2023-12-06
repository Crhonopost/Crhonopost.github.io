<template>
    <div id="navLinks">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
    #navLinks {
        display: flex;
        justify-content: space-between;
        width: 200px;
        padding: 10px 0;
    }
</style>