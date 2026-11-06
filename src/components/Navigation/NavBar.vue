<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import QuickLinks from './QuickLinks.vue';
import LangSelection from './LangSelection.vue';
import PrivacyNotice from './PrivacyNotice.vue'
const movedSignal = defineEmits<{
    (e: 'moved', idx: number): void
}>()

const props = defineProps<{
    canMoveForward: boolean
    canMoveBackward: boolean
    activePage: number
    pageCount: number
    projectListPage: number
}>()

const { t } = useI18n()
const showProjectName = computed(() => props.activePage == props.pageCount)

function move(direction: -1 | 1) {
    if (direction === 1 ? !props.canMoveForward : !props.canMoveBackward) return
    const destination = showProjectName.value && direction === -1
        ? props.projectListPage
        : props.activePage + direction
    movedSignal('moved', destination)
}

let lastWheelTime = -Infinity
let wheelDelta = 0
function handleWheel(event: WheelEvent) {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey ||
        event.deltaY === 0 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
    if (!(event.target instanceof Element)) return
    // Keep native input and scrolling behavior inside the content, even at its edges.
    if (event.target.closest('canvas, input, select, textarea, button, [contenteditable="true"]')) return
    for (let element: Element | null = event.target; element; element = element.parentElement) {
        const style = getComputedStyle(element)
        if ((/(auto|scroll)/.test(style.overflowY) && element.scrollHeight > element.clientHeight) ||
            (/(auto|scroll)/.test(style.overflowX) && element.scrollWidth > element.clientWidth)) return
    }

    event.preventDefault()
    const now = performance.now()
    const elapsed = now - lastWheelTime
    lastWheelTime = now
    // Trackpad inertia belongs to the same gesture. Require a short pause before another panel.
    if (elapsed < 180 && wheelDelta === 0) return
    if (elapsed >= 180 || Math.sign(wheelDelta) !== Math.sign(event.deltaY)) wheelDelta = 0
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1
    wheelDelta += event.deltaY * unit
    if (Math.abs(wheelDelta) < 40) return
    move(wheelDelta > 0 ? 1 : -1)
    wheelDelta = 0
}

onMounted(() => document.addEventListener('wheel', handleWheel, { passive: false }))

const showQuickLinks = ref(false)
const isMobile = ref(window.innerWidth < 700)
const update = () => (isMobile.value = window.innerWidth < 700)
window.addEventListener('resize', update)
onUnmounted(() => {
    window.removeEventListener('resize', update)
    document.removeEventListener('wheel', handleWheel)
})

</script>

<template>
    <div id="navbar">
        <QuickLinks v-if="!isMobile || showQuickLinks" @clicked-outside="() => {
            if(isMobile && showQuickLinks){
                showQuickLinks = false
            }
        }" />
        <CustomButton v-if="isMobile && !showQuickLinks" content="account_circle" :disable="false" @click.stop="showQuickLinks = true" id="profile-btn" />
        
        <LangSelection v-if="!isMobile" />
        
        <nav id="progress" class="column" :aria-label="t('navigation.panels')">
            <button class="button button--panel panel-button" type="button" :disabled="!canMoveBackward" @click="move(-1)">
                <span class="material-symbols-outlined" aria-hidden="true">arrow_drop_up</span>
                <span>{{ t(activePage === pageCount ? 'navigation.back_to_projects' : 'navigation.previous') }}</span>
            </button>
            <div class="panel-position" aria-live="polite">
                <span v-if="showProjectName">{{ capitalizeFirst(t('navigation.project_detail')) }}</span>
                <div v-if="!showProjectName">
                    <div v-for="pageIdx in pageCount" v-bind:key="pageIdx" :class="['dot', activePage + 1 == pageIdx ? 'dot-full' : 'dot-empty']">
                    </div>
                </div>
            </div>
            <button class="button button--panel panel-button" type="button" :disabled="!canMoveForward" @click="move(1)">
                <span>{{ t('navigation.next') }}</span>
                <span class="material-symbols-outlined" aria-hidden="true">arrow_drop_down</span>
            </button>
        </nav>

        <LangSelection v-if="isMobile" />
        <PrivacyNotice />
    </div>
</template>

<style scoped>
#navbar {
    height: 100vh;
    width: fit-content;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

#profile-btn{
    width: 80px;
    height: 80px;
}

.dot {
    border-radius: 100%;
    width: 10px;
    height: 10px;
    margin: 5px;
}

.dot-full {
    background-color: var(--color-text);
}

.dot-empty {
    background-color: var(--color-accent);
    opacity: 20%;
}

.panel-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    font: inherit;
    cursor: pointer;
}

.panel-position {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 8px 0;
}

#navbar > div {
    line-height: 1.5;
    place-items: center;
}

#progress {
    flex: 1;
    display: flex;
    justify-content: center;
}


@media (max-width: 700px) {
    #navbar {
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: end;
        padding: 10px 10px max(10px, env(safe-area-inset-bottom));
    }

    #progress {
        flex-direction: row;
        align-items: center;
        gap: 4px;
    }

    .panel-button {
        font-size: 12px;
    }

    .panel-position {
        font-size: 12px;
    }
}
</style>
