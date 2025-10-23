<script setup lang="ts">
import { globalPerformanceMonitor } from '@/util/PerformanceMonitor'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import CustomButton from './CustomButton.vue';
import { useI18n } from 'vue-i18n';

const {t} = useI18n()

const emit = defineEmits<{
    (e: 'lowerResolution'): void
}>()

const averageFps = ref(60)
let frameStartTime = 0
const frameTime = ref(0)

const minFps = 40

const unsubscribe = globalPerformanceMonitor.onFPSUpdate((currentFps: number, avgFps: number) => {
    averageFps.value = avgFps
    
    if(averageFps.value > minFps && showPopup.value){
        showPopup.value = false
        popupShowed = false
    } else if(popupShowed) return

    if(averageFps.value > -1 && averageFps.value < minFps){
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

function optimize() {
    emit('lowerResolution')
    showPopup.value = false
}

function dismiss() {
    showPopup.value = false
}

const texts = computed(() => ({
  title: t('performances.title', { fps: averageFps.value }),
  optimize: t('performances.optimize'),
  proposition: t('performances.proposition'),
  note: t('performances.note')
}))
</script>

<template>
    <div id="performance-banner" v-if="showPopup" class="performance-banner">
        <div class="banner-content">
            <div class="banner-icon">⚡</div>
            <div class="banner-text">
                <span class="banner-title">
                    {{ texts.title }}
                </span>
                <span class="banner-description">
                    {{ texts.proposition }}
                </span>
                <span class="banner-description">
                    {{ texts.note }}
                </span>
            </div>
            <div class="banner-actions">
                <CustomButton 
                    :disable="false" 
                    :content="t('performances.optimize')" 
                    class="btn-optimize"
                    @click="optimize" 
                />
                <button class="btn-dismiss" @click="dismiss">
                    x
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.performance-banner {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 500px;
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    color: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);
    z-index: 10000;
    animation: slideDown 0.3s ease-out;
}

.banner-content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
}

.banner-icon {
    font-size: 20px;
    flex-shrink: 0;
}

.banner-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.banner-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
}

.banner-description {
    font-size: 12px;
    opacity: 0.9;
    line-height: 1.2;
}

.banner-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}

.btn-optimize {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
}

.btn-optimize:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
}

.btn-dismiss {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

.btn-dismiss:hover {
    background: rgba(255, 255, 255, 0.1);
}

@keyframes slideDown {
    from {
        transform: translateX(-50%) translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .performance-banner {
        top: 10px;
        width: 95%;
    }
    
    .banner-content {
        padding: 10px 12px;
        gap: 8px;
    }
    
    .banner-text {
        min-width: 0;
    }
    
    .banner-title {
        font-size: 13px;
    }
    
    .banner-description {
        font-size: 11px;
    }
    
    .btn-optimize {
        padding: 5px 10px;
        font-size: 11px;
    }
}

.performance-banner {
    animation: slideDown 0.3s ease-out, pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);
    }
    50% {
        box-shadow: 0 8px 32px rgba(255, 107, 107, 0.6);
    }
}

</style>