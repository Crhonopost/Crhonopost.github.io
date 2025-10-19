<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
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

const { locale } = useI18n()

function switchLanguage(lang: string) {
    locale.value = lang
    showLang.value = false
}

const showLang = ref(false)
</script>

<template>
    <div id="navbar">
        <div class="glass column">
            <a href="https://github.com/Crhonopost">Github</a>
            <a href="cv">CV</a>
            <a href="https://www.linkedin.com/in/nathan-souvignet-a10732230/">LinkedIn</a>
            <!-- Email -->
            <a href="mailto:nath.souvignet@gmail.com">Email</a>
        </div>

        <div id="lang">
            <CustomButton content="language" @click="showLang = !showLang" :disable="false" />
            <div :class="{ slideIn: showLang }" v-if="showLang">
                <CustomButton content="en" @click="switchLanguage('en')" :disable="false" />
                <CustomButton content="fr" @click="switchLanguage('fr')" :disable="false" />
            </div>
        </div>

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
    </div>
</template>

<style scoped>
#navbar {
    height: 100vh;
    width: fit-content;
    display: flex;
    flex-direction: column;
}

#lang > div:nth-child(2) {
    position: absolute;
}

#lang div {
    width: 50px;
    height: 50px;
    z-index: 1;
}

#progress > * {
    width: 50px;
    height: 50px;
}

#navbar > div {
    line-height: 1.5;
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

.slideIn {
    animation: slideIn 0.25s forwards;
}
@keyframes slideIn {
    from {
        opacity: 0%;
        translate: 0 -80px;
    }
    to {
        opacity: 100%;
        translate: 0 0;
    }
}
</style>
