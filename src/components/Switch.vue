<template>
    <div @click="switchOption" id="switch" class="clickable">
        <p :hidden="chosen!==0">{{ choices[0].content }}</p>
        <p :hidden="chosen!==1">{{ choices[1].content }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface IChoice {
    content: string, 
    method: () => void
}

const chosen = ref<number>(0)

const props = defineProps<{choices: IChoice[]}>()


function switchOption() {
    chosen.value = (chosen.value + 1) % 2
    props.choices[chosen.value].method()
}

</script>

<style scoped>
#switch {
    color: white;
    text-align: center;
}
</style>