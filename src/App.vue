<template>
  <div class="backGradient mainFrame" id="app">
    <div id="backgroundShapes">  
      <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(0, 146, 158, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(69, 123, 169, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M12.9,-11C20.3,-5.5,32.3,-2.7,33.6,1.3C34.9,5.3,25.4,10.6,18,16.5C10.6,22.3,5.3,28.7,-3,31.8C-11.4,34.8,-22.7,34.4,-26.5,28.6C-30.2,22.7,-26.3,11.4,-23.2,3.1C-20.2,-5.3,-18,-10.5,-14.2,-16C-10.5,-21.5,-5.3,-27.3,-1.3,-26C2.7,-24.8,5.5,-16.5,12.9,-11Z" width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;" stroke-width="0" stroke="url(#sw-gradient)"></path>              </svg>
    </div>
    <nav>
      <Navigation />
    </nav>
    <div class="mainContent">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  margin: 0%;
  padding: 0%;
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0f172a;
}

nav {
  flex: 1;
  height: 100vh;
}

nav>* {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
}

nav a {
  font-weight: bold;
  color: #94a3b8;
}

nav a.router-link-exact-active {
  color: #dfe6f0;
}

.mainContent {
  z-index: 1;
  flex: 2;
}

.whiteText {
  color: #dfe6f0;
}

.greyText {
  color: #94a3b8;
}

.backGradient {
  background-color: #0f172a;
}

.backColor {
  background-color: #0f172a;
}

.frontColor {
  background-color: rgb(148, 163, 184);
}

.mainFrame {
  display: flex;
  flex-direction: row;
  width: 100%;
}

#backgroundShapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

#backgroundShapes > *{
  z-index: 0;
  position: absolute;
  max-height: 100vh;
}


</style>

<script setup lang="ts">
import Navigation from "@/components/NavComponent.vue"
</script>