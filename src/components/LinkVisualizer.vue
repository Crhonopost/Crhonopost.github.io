<template>
    <div class="link">
        <a v-if="!link.iconPath" :href="link.url">{{ linkName }}</a>
        <a v-else :href="link.url">
            <img :src="link.iconPath" :alt="linkName">
        </a>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@/types';
import { computed } from 'vue';

const props = defineProps<{
    link: Link
}>()

const linkName = computed(() => props.link.name ? props.link.name : props.link.url)
</script>

<style scoped>
.link > a {
    color: white;
    text-decoration: none;
}
.link img{
    width: 50px;
    height: 50px;
}
</style>