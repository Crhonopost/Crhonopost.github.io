<template>
    <div class="align">
        <div id="list">
            <div v-for="(project, index) in store.projects">
                <Transition :name="`projectItem${index % 2}`" appear>
                    <ProjectItem v-if="!store.projectOpened" :project="project"></ProjectItem>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectItem from '@/components/ProjectItem.vue'
import projectStore from "@/store/projectStore"

const store = projectStore()

</script>

<style scoped>

#list {
    width: fit-content;
    margin: auto;
}

#list > *{
    margin-bottom: 40px;
}

@media screen and (min-width: 650px){
    #list > *:nth-child(2n){
        transform: translateX(100px);
    }
    #list > *:nth-child(2n + 1){
        transform: translateX(-100px);
    }
}


@media screen and (max-width: 500px){
    #list{
        width: 100%;
    }

    #list > *{
        width: 100%;   
    }
}

.projectItem0-enter-active,
.projectItem0-leave-active,
.projectItem1-enter-active,
.projectItem1-leave-active {
  transition: transform 0.5s ease;
}

.projectItem0-enter-from {
  transform: translateX(1000px);
}
.projectItem1-enter-from {
  transform: translateX(-1000px);
}

.projectItem0-leave-to{
    transform: translateX(1500px);
}
.projectItem1-leave-to {
    transform: translateX(-1500px);
}



</style>