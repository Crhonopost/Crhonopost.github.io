<template>
    <svg v-if="!displayNav" class="clickable glass bread" id="nav2" @click="() => hideNav=false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8H19M5 16H19M3 12H21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    <div id="nav" v-if="displayNav" class="glass">
        <svg v-if="mobile" class="clickable bread" @click="() => hideNav=true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9999 9L8.99994 15M9.00006 9L10.5 10.5M15.0001 15L12 12M20 16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <div id="siteLinks">            
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="contact">Contact</RouterLink>
        </div>

        <Switch :choices="[
            {
                content: 'Français',
                method() {
                    i18n.locale.value = 'fr'
                    },
            },
            {
                content: 'English', 
                method() {
                    i18n.locale.value = 'en'
                    },
            }]" :chosen="0" />
        
        <div id="extraLinks">            
            <a href="https://github.com/Crhonopost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="logo" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/nathan-souvignet-a10732230/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="logo" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
            </a>
            <a href="./assets/CV.pdf">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="none" class="logo" aria-hidden="true">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.656 12.115a3 3 0 0 1 5.682-.015M13 5h3m-3 3h3m-3 3h3M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm6.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Switch from './Switch.vue';
import { i18n } from '@/i18n/translations';


const mobile = ref(false)
const hideNav = ref(true)
const displayNav = computed(() => {
    return !mobile.value || !hideNav.value
})


const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)

const handleResize = () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight

    if(windowWidth.value < 1020){
        mobile.value = true
    }
    else {
        hideNav.value = true
        mobile.value = false
    }
}

onMounted(() => {
    if(window.innerWidth < 1020){
        mobile.value = true
    }
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

</script>

<style scoped>
#nav {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1020px){
    #nav {
        position: fixed;
        left: 20px;
        top: 150px;
    }
}


#nav>*{
    margin-top: 10px;
}

#siteLinks {
    height: 80%;
    padding: 20px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
}

#siteLinks > * {
    margin-bottom: 20px;
}

a {
    text-decoration: none;
}

#extraLinks {
    display: flex;
    flex-direction: row;
    align-self: center;
}

#extraLinks>a {
    margin: 10px;
}

.logo {
    height: 30px;
    width: 30px;
}

.bread {
    width: 50px;
    height: 50px;
}
</style>
