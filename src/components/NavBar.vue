<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
import { onMounted, ref } from 'vue'
const movedSignal = defineEmits<{
    (e: 'moved', idx: number): void
}>()

defineProps<{
    canMoveForward: boolean
    canMoveBackward: boolean
    pageCount: number
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
</script>

<template>
    <div id="navbar">
        <div class="glass">
            <a href="https://github.com/Crhonopost">Github</a>
            <a href="cv">CV</a>
            <a href="https://www.linkedin.com/in/nathan-souvignet-a10732230/">LinkedIn</a>
            <!-- Email -->
            <a href="mailto:nath.souvignet@gmail.com">Email</a>
        </div>

        <div id="progress">
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
    </div>
</template>

<style scoped>
#navbar {
    height: 100vh;
    width: fit-content;
    display: flex;
    flex-direction: column;
}

#progress > * {
    width: 50px;
    height: 50px;
}

#navbar > div {
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 5px;
    margin: 5px;
    width: fit-content;
}

#progress {
    flex: 1;
    display: flex;
    justify-content: center;
}

#progress > div {
    margin: 5px;
}
</style>
