<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
const movedSignal = defineEmits<{
    (e: 'moved', direction: 'f' | 'b'): void
}>()

defineProps<{
    canMoveForward: boolean
    canMoveBackward: boolean
}>()
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
                v-if="canMoveForward"
                content="arrow_drop_up"
                @click="movedSignal('moved', 'f')"
            />
            <CustomButton
                v-if="canMoveBackward"
                content="arrow_drop_down"
                @click="movedSignal('moved', 'b')"
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
