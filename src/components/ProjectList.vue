<template>
    <div id="list">
        <div v-for="(project, index) in store.projects">
            <Transition :name="`projectItem${index % 2}`" appear>
                <ProjectItem v-if="!store.projectOpened" :project="project"></ProjectItem>
            </Transition>
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
    overflow: hidden;
}
#list > *{
    margin-bottom: 40px;
}

#list > *:nth-child(2n){
    margin-left: 200px;
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