<script lang="ts" setup>
import { getStyle } from './script'

defineProps<{ activeIndex: number }>()
</script>

<template>
    <div class="scene">
        <div
            class="layer"
            v-for="(item, index) in $slots.default?.() ?? []"
            :key="index"
            :style="getStyle(index, activeIndex)"
            :inert="index !== activeIndex"
            :aria-hidden="index !== activeIndex"
            :class="{ inactive: index !== activeIndex }"
        >
            <component :is="item" />
        </div>
    </div>
</template>

<style scoped>
.scene {
    perspective: 1000px;
    width: auto;
    overflow: hidden;
    position: relative;
}

.layer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    transition:
        transform 0.3s,
        opacity 0.3s;
    width: 100%;
}

.layer.inactive {
    pointer-events: none;
}
</style>
