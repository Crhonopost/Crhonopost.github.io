<script setup lang="ts">
import { globalPerformanceMonitor } from '@/util/PerformanceMonitor'
import { onMounted, onUnmounted, ref } from 'vue'
import CustomButton from './CustomButton.vue';

defineEmits<{
    (e: 'lowerResolution'): void
}>()

const fps = ref(60)
let frameStartTime = 0
const frameTime = ref(0)

const unsubscribe = globalPerformanceMonitor.onFPSUpdate((currentFps: number, averageFps: number) => {
    fps.value = averageFps
    if(fps.value < 200 && !popupShowed){
        showPopup.value = true
        popupShowed = true
    }
})

function updateFrameTime() {
    const now = performance.now()
    frameTime.value = Math.round(now - frameStartTime)
    frameStartTime = now
    requestAnimationFrame(updateFrameTime)
}



onMounted(() => {
    frameStartTime = performance.now()
    updateFrameTime()
})

onUnmounted(() => {
    unsubscribe()
})

const showPopup = ref(false)
let popupShowed = false
</script>

<template>
    <div id="popup" v-if="showPopup">
        <h1>Performance issues {{ `Average FPS: ${fps}` }}</h1>
        <p>Fluidity is more important than fidelity. Would you mind if I increase the website performances ?
            Although theses issues might disapear when switching to another explorer (chrome, zen, etc)
            It s only a temporal fix, I am looking into the root of the problem.
        </p>
        <div class="row">
            <CustomButton :disable="false" content="Yes optimize!" @click="$emit('lowerResolution')" />
            <CustomButton :disable="false" content="No thanks" @click="() => showPopup = false" />
        </div>
    </div>
</template>

<style>
#popup {
    width: 500px;
    background-color: red;
}
</style>