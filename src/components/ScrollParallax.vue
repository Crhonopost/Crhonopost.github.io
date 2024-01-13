<template>
  <div class="anime" :id="`anime${uid}`" :style="`top: ${center.top}; left: ${center.left}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs';
import {  getCurrentInstance, onMounted, ref } from 'vue';

const props = defineProps<{
  from: {x: number, y:number },
  to: {x: number, y:number},
  center: {top: string, left: string}
}>()

const uid = ref(0)

onMounted(() => {
  const currentInstance = getCurrentInstance()
  if(currentInstance)
  {
    uid.value = currentInstance.uid
  }

  const divAnimation = anime({
    targets: `#anime${uid.value}`,
    easing: 'linear',
    translateY: [props.from.y, props.to.y],
    autoplay: false,
    elasticity: 0
  });
  
  const scrollPercent = () => {
    const bodyST = document.body.scrollTop;
    const docST = document.documentElement.scrollTop;
    const docSH = document.documentElement.scrollHeight;
    const docCH = document.documentElement.clientHeight;
    
    
    return (docST + bodyST) / (docSH - docCH) * 100
  }
  
  window.onscroll = () => {
    divAnimation.seek((scrollPercent() / 100) * divAnimation.duration);
  };
})

</script>

<style scoped>
.anime {
  position: fixed;
}
</style>