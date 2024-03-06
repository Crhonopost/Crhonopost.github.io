<template>
  <div class="backGradient mainFrame" id="app">    
    <nav>
      <Navigation />
    </nav>
    <div class="mainContent">
      <div id="background">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="b" gradientTransform="rotate(-45 .5 .5)"><stop offset="0%" stop-color="#FF3CAC"/><stop offset="50%" stop-color="#784BA0"/><stop offset="100%" stop-color="#2b86c5"/></linearGradient><clipPath id="a"><path fill="currentColor" d="M804.5 607Q714 714 607 848t-277 63q-170-71-186-241t14-326q30-156 186-217.5t314.5-2.5Q817 183 856 341.5T804.5 607Z"/></clipPath></defs><g clip-path="url(#a)"><path fill="url(#b)" d="M804.5 607Q714 714 607 848t-277 63q-170-71-186-241t14-326q30-156 186-217.5t314.5-2.5Q817 183 856 341.5T804.5 607Z"/></g></svg>
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="b" gradientTransform="rotate(-45 .5 .5)"><stop offset="0%" stop-color="#FF9A8B"/><stop offset="50%" stop-color="#FF6A88"/><stop offset="100%" stop-color="#ff99ac"/></linearGradient><clipPath id="a"><path fill="currentColor" d="M731 581.5Q663 663 581.5 813t-254 91q-172.5-59-136-231.5t67-278Q289 289 394.5 268T647 226.5Q794 206 796.5 353T731 581.5Z"/></clipPath></defs><g clip-path="url(#a)"><path fill="url(#b)" d="M731 581.5Q663 663 581.5 813t-254 91q-172.5-59-136-231.5t67-278Q289 289 394.5 268T647 226.5Q794 206 796.5 353T731 581.5Z"/></g></svg>
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="b" gradientTransform="rotate(240 .5 .5)"><stop offset="0%" stop-color="#85FFBD"/><stop offset="100%" stop-color="#FFFB7D"/></linearGradient><clipPath id="a"><path fill="currentColor" d="M804.5 607Q714 714 607 848t-277 63q-170-71-186-241t14-326q30-156 186-217.5t314.5-2.5Q817 183 856 341.5T804.5 607Z"/></clipPath></defs><g clip-path="url(#a)"><path fill="url(#b)" d="M804.5 607Q714 714 607 848t-277 63q-170-71-186-241t14-326q30-156 186-217.5t314.5-2.5Q817 183 856 341.5T804.5 607Z"/></g></svg>
      </div>
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
  color: white;
  background-color: #0f172a;
}

@media screen and (max-width: 1020px){
  nav {
    position: fixed;
    left: 20px;
    top: 20px;
  }


  .mainContent {
    width: 100%;
  }
}


@media screen and (min-width: 1020px){
  nav {
    position: fixed;
    width: 18%;
  }

  nav>* {
    position: absolute;
    margin-top: 50%;
    right: 20px;
  }


  .mainContent {
    margin-left: 10%;
    width: 80%;
  }
}

nav {
  z-index: 3;
}

.mainContent > * {
  margin: auto;
  min-height: 100vh;
}

nav a {
  font-weight: bold;
  color: #94a3b8;
}

nav a.router-link-exact-active {
  color: #dfe6f0;
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
  background-color: white;
}

.mainFrame {
  display: flex;
  flex-direction: row;
}

#background {
  width: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
}

#background > *{
  position: absolute;
}


.clickable {
    cursor: pointer;
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

<script setup lang="ts">
import Navigation from "@/components/NavComponent.vue"
</script>