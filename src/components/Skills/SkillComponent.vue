<script setup lang="ts">
import type { Skill } from '@/types'
import { defineProps } from 'vue'

defineProps<Skill>()
</script>

<template>
    <div class="glass skill">
        <img :src="icon" :alt="name" :title="name" class="skill-icon" />
    </div>
</template>

<style scoped>
.skill {
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.skill img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 900px) {
    .skill {
        width: 100px;
        height: 100px;
    }
    
    .skill img {
        width: 100%;
        height: 100%;
    }
}

@media (max-width: 530px) {
.skill {
        width: 80px;
        height: 80px;
    }
}
</style>
