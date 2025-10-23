<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import QuickLinks from './QuickLinks.vue';
import LangSelection from './LangSelection.vue';
const movedSignal = defineEmits<{
    (e: 'moved', idx: number): void
}>()

defineProps<{
    canMoveForward: boolean
    canMoveBackward: boolean
}>()

const navIdx = ref(0)

function setNavIdx(pos: number) {
    navIdx.value = pos
}
defineExpose({
    setNavIdx,
})

onMounted(() => {
    document.addEventListener(
        'wheel',
        (evt) => {
            const scrollDirection = evt.deltaY < 0 ? 1 : -1
            navIdx.value += scrollDirection
            movedSignal('moved', navIdx.value)
            evt.preventDefault()
        },
        { passive: false },
    )
})

const showQuickLinks = ref(false)
const isMobile = ref(window.innerWidth < 700)
const update = () => (isMobile.value = window.innerWidth < 700)
window.addEventListener('resize', update)
onUnmounted(() => window.removeEventListener('resize', update))

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
        
        <div id="progress" class="column">
            <CustomButton
            :disable="!canMoveForward"
            content="arrow_drop_up"
            @click="
                    () => {
                        navIdx++
                        movedSignal('moved', navIdx)
                    }
                    "
            />
            <CustomButton
            :disable="!canMoveBackward"
            content="arrow_drop_down"
            @click="
                    () => {
                        navIdx--
                        movedSignal('moved', navIdx)
                    }
                    "
            />
        </div>

        <LangSelection v-if="isMobile" />
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

#progress > * {
    width: 50px;
    height: 50px;
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

#progress > div {
    margin: 5px;
}


@media (max-width: 700px) {
    #navbar {
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: end;
    }
}
</style>
