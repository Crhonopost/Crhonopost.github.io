<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { initComponent } from './script'

const canva = ref<HTMLCanvasElement | null>(null)

const { uniforms, movePlaine, updateMouse, initRender, dispose, resize } = initComponent(canva)

const pointerEvents = ['pointermove', 'pointerdown', 'pointerup', 'pointercancel'] as const

function resizeViewport() {
    resize(window.innerWidth, window.innerHeight)
}
onMounted(() => {
    if (canva.value instanceof HTMLCanvasElement) {
        const context = canva.value.getContext('webgl2', {
            antialias: false,
            depth: false,
            stencil: false,
        })

        if (!context) {
            throw new Error('WebGL2 context not available')
        } else {
            initRender(canva.value, context)
            window.addEventListener('resize', resizeViewport)
            pointerEvents.forEach((event) => {
                window.addEventListener(event, updateMouse, { passive: true })
            })
        }
    } else {
        console.error('Canvas reference is not an HTMLCanvasElement')
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeViewport)
    pointerEvents.forEach((event) => window.removeEventListener(event, updateMouse))
    dispose()
})

defineExpose({
    movePlaine,
    uniforms,
})
</script>
<template>
    <canvas ref="canva" class="fullscreen-canvas" aria-hidden="true"></canvas>
</template>
<style src="./style.css" scoped></style>
