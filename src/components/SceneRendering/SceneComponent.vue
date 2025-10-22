<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { initComponent } from './script'

const canva = ref<HTMLCanvasElement | null>(null)

const { movePlaine, initRender, initScene, clearScene, resize } = initComponent(canva)

function optimize(){
    clearScene()
    initScene(15, 0.7)
}
onMounted(() => {
    window.addEventListener('resize', () => {
        if (canva.value) {
            canva.value.width = window.innerWidth
            canva.value.height = window.innerHeight
            resize(window.innerWidth, window.innerHeight)
        }
    })

    if (canva.value instanceof HTMLCanvasElement) {
        canva.value.width = window.innerWidth
        canva.value.height = window.innerHeight

        const context = canva.value.getContext('webgl2')

        if (!context) {
            throw new Error('WebGL2 context not available')
        } else {
            initRender(canva.value, context)
            initScene(45, 1)
        }
    } else {
        console.error('Canvas reference is not an HTMLCanvasElement')
    }
})

defineExpose({
    movePlaine,
    optimize
})
</script>
<template>
    <canvas ref="canva" class="fullscreen-canvas"></canvas>
</template>
<style src="./style.css" scoped></style>
