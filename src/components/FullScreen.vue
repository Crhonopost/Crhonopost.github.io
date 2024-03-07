<template>
    <div class="modal" @click="emit('close')">
        <div class="glass">
            <img src="assets/svg/close.svg" class="closeBtn clickable" @click.stop="() => emit('close')" />
            <slot></slot>    
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"])
</script>

<style scoped lang="css">

@media screen and (max-width: 1020px){
    .modal {
        margin-top: 50px;
    }
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
}

.modal > * {
    height: fit-content;
    width: fit-content;

    max-width: 90%;

    margin-top: 40px;
}

.closeBtn{
    float: right;
    width: 50px;
    height: 50px;
    margin: 5px;
}
</style>