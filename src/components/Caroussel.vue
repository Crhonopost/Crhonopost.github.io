<template>
    <FullScreen v-if="imgFullscreen" @close="close()">
        <div style="margin: 10px;">
            <img v-if="isImage(openedLink)" :src="openedLink" style="max-width: 90%;">
            <video v-if="isMP4(openedLink)" autoplay loop>
                <source :src="openedLink" type="video/mp4">
            </video>
        </div>
    </FullScreen>
    <div v-if="visible" class="glass">
        <img src="assets/svg/close.svg" class="closeCaroussel clickable" @click.stop="() => emits('closeCaroussel')" />
        <div id="carousselComponent">
            <div class="cImage" v-for="path in props.images" :src="path" @click="open(path)">
                <img v-if="isImage(path)" :src="path">
                <video v-if="isMP4(path)" autoplay loop>
                    <source :src="path" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FullScreen from "@/components/FullScreen.vue"

const props = defineProps<{
    images: string[],
    visible: boolean
    }>()

const emits = defineEmits(['closeCaroussel'])

const imagesExtensions = ['png', 'PNG', 'jpeg']
function isImage(path: string) {
    const extension = path.split('.').pop();
    return imagesExtensions.some((value) => value === extension)
}

function isMP4(path: string) {
    const extension = path.split('.').pop();
    return extension === 'mp4'
}

function open(src: string){
    imgFullscreen.value = true
    openedLink.value = src
}

function close(){
    imgFullscreen.value = false
}


const imgFullscreen = ref(false)
const openedLink = ref("")

</script>

<style scoped>
.closeCaroussel{
    float: right;
    width: 50px;
    height: 50px;
    margin: 5px;
}
#carousselComponent {
    padding: 10px;;
}
.cImage > * {
    border-radius: 16px;
    max-width: 400px;
}
</style>