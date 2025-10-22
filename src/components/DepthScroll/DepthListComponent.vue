<script lang="ts" setup>
import { initComponent } from './script'

const { getStyle, moveOneSlide, moveToSlide, canScroll, canScrollTo } = initComponent()

defineExpose({
    moveToSlide,
    moveOneSlide,
    canScroll,
    canScrollTo,
})
</script>

<template>
    <div class="scene">
        <div
            class="layer"
            v-for="(item, index) in $slots.default?.() ?? []"
            :key="index"
            :style="getStyle(index)"
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
</style>
