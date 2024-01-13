<template>
    <div class="whiteText projectView">
        <div id="carousselDisplay" v-if="project.caroussel && project.caroussel.length > 0">
            <GlassComponent v-if="!carousselVisible">
                <div id="openCaroussel" @click.stop="carousselVisible = true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 10V6C4 4.89543 4.89543 4 6 4H12M4.02693 18.329C4.18385 19.277 5.0075 20 6 20H18C19.1046 20 20 19.1046 20 18V14.1901M4.02693 18.329C4.00922 18.222 4 18.1121 4 18V15M4.02693 18.329L7.84762 14.5083C8.52765 13.9133 9.52219 13.8481 10.274 14.3494L10.7832 14.6888C11.5078 15.1719 12.4619 15.1305 13.142 14.5864L15.7901 12.4679C16.4651 11.9279 17.4053 11.8855 18.1228 12.3484C18.2023 12.3997 18.2731 12.4632 18.34 12.5301L20 14.1901M20 14.1901V6C20 4.89543 19.1046 4 18 4H17M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
                </div>
            </GlassComponent>
            <Caroussel @close-caroussel="carousselVisible = false" :images="project.caroussel" :visible="carousselVisible" id="caroussel"></Caroussel>
        </div>
        <div>
            <h1>Résumé</h1>
            <p>{{ project.shortDescription }}</p>
        </div>
        <div>
            <h1>Contexte</h1>
            <p>{{ project.context }}</p>
        </div>
        <div>
            <h1>Description</h1>
            <p>{{ project.description }}</p>
        </div>
        <div>
            <h1>Difficultés</h1>
            <p>{{ project.difficulties }}</p>
        </div>
        <div>
            <h1>Expérience gagnée</h1>
            <p>{{ project.experience }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Caroussel from "@/components/Caroussel.vue";
import GlassComponent from "@/components/GlassComponent.vue";
import { Project } from "@/types";
import { ref } from "vue";

const props = defineProps<{
    project: Project
}>()

let carousselVisible = ref<boolean>(false)

</script>

<style scoped>
#openCaroussel {
    width: 50px;
    height: 50px;
    padding-bottom: 0px;
}
#carousselDisplay {
    position: absolute;
    left: 90%;
}
.projectView {
    width: 70%;
    max-width: 1000px;
    margin: auto;
}
.projectImg {
    max-width: 600px;
}
</style>