<script setup lang="ts">
import { onMounted, onUnmounted, ref} from 'vue';


const emit = defineEmits<{
    (e: 'clickedOutside'): void
}>()

const menu = ref<HTMLElement | null>(null)

function handleClickOutside(e: MouseEvent) {
    if (menu.value && !menu.value.contains(e.target as Node)) {
    emit('clickedOutside')
  }
}


onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
    <div ref="menu" class="panel column">
        <a href="https://github.com/Crhonopost" target="_blank"
            data-umami-event="profile-click" data-umami-event-profile="github">Github</a>
        <a href="cv.pdf" target="_blank" data-umami-event="cv-open">CV</a>
        <a href="https://www.linkedin.com/in/nathan-souvignet-a10732230/" target="_blank"
            data-umami-event="profile-click" data-umami-event-profile="linkedin">LinkedIn</a>
        <!-- Email -->
        <a href="mailto:nath.souvignet@gmail.com" data-umami-event="contact-click"
            data-umami-event-method="email">Email</a>
    </div>
</template>
