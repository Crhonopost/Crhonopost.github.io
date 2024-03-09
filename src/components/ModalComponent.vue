<template>
    <Transition name="modal">
        <div class="modal" v-if="store.projectOpened" @click="store.closeProject">
            <div class="glass" @click.stop>
                <div class="clickable glass" id="back" @click.stop="store.closeProject">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 12L7 12L11 16M9 10L11 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <ProjectView :project="store.selectedProject" />
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import projectStore from '@/store/projectStore';
import ProjectView from '@/views/ProjectView.vue';


const store = projectStore();
</script>

<style scoped lang="css">
#back {
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 10;
    left: 10px;
    top: 10px;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
    transform: translateY(1200px);
    opacity: 0%;
}

@media screen and (max-width: 1020px){
    .modal {
        margin-top: 50px;
    }
}
.modal {
    position: relative;
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
    margin-top: 40px;
}
</style>