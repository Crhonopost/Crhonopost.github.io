<template>
    <div :class="isHoverable? 'glassHover' : 'glass'" id="glassBase">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['isHoverable'])
</script>

<style scoped>

#glassBase {
    width: fit-content;
}

.glassHover:hover {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.3px);
    -webkit-backdrop-filter: blur(6.3px);
    border: 1px solid rgba(255, 255, 255, 0.19);
    padding: 0px;
}

.glassHover{
    padding:1px;
    margin: 11px;
}

.glass {
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.3px);
    -webkit-backdrop-filter: blur(6.3px);
    border: 1px solid rgba(255, 255, 255, 0.19);
}

</style>