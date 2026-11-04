<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { initComponent } from './script'

const canva = ref<HTMLCanvasElement | null>(null)

const { movePlaine, initRender, initScene, dispose, resize } = initComponent(canva)

function resizeViewport() {
    if (canva.value) {
        canva.value.width = window.innerWidth
        canva.value.height = window.innerHeight
        resize(window.innerWidth, window.innerHeight)
    }
}
onMounted(() => {
    window.addEventListener('resize', resizeViewport)

    if (canva.value instanceof HTMLCanvasElement) {
        canva.value.width = window.innerWidth
        canva.value.height = window.innerHeight

        const context = canva.value.getContext('webgl2')

        if (!context) {
            throw new Error('WebGL2 context not available')
        } else {
            initRender(canva.value, context)
            initScene(22, 0.8)
        }
    } else {
        console.error('Canvas reference is not an HTMLCanvasElement')
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeViewport)
    dispose()
})

defineExpose({
    movePlaine,
})
</script>
<template>
    <canvas ref="canva" class="fullscreen-canvas"></canvas>
</template>
<style src="./style.css" scoped></style>
