<script lang="ts" setup>
const componentSignals = defineEmits<{
    (e: 'navigateBack'): void
    (e: 'navigateFront'): void
}>()

const props = defineProps<{
    orientation: 'vertical' | 'horizontal'
}>()

function handleWheel(evt: WheelEvent){
    if (evt.defaultPrevented || evt.ctrlKey || evt.metaKey || evt.shiftKey ||
        evt.deltaY === 0 || Math.abs(evt.deltaX) > Math.abs(evt.deltaY)) return

    const element = evt.currentTarget
    if (!(element instanceof HTMLElement)) return

    evt.preventDefault()
    evt.stopPropagation()
    
    const scrollStart = 1
    const scrollEnd = props.orientation === 'vertical' ? 
        element.scrollHeight - element.clientHeight - 1 :
        element.scrollWidth  - element.clientWidth  - 1
    const currentScroll = props.orientation === 'vertical' ? 
        element.scrollTop :
        element.scrollLeft
    
    if(currentScroll <= scrollStart && evt.deltaY < 0)
        componentSignals("navigateBack")
    else if(currentScroll >= scrollEnd && evt.deltaY > 0)
        componentSignals("navigateFront")
    else{
        if(props.orientation === 'vertical')
            element.scrollTop += evt.deltaY
        else
            element.scrollLeft += evt.deltaY
    }
}
</script>

<template>
    <div class="scroll-slide" tabindex="0" @wheel="handleWheel">
        <slot />
    </div>
</template>

<style scoped>
.scroll-slide {
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    overscroll-behavior: contain;
}

.scroll-slide:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: -2px;
}
</style>
