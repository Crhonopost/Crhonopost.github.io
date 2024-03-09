<template>
  <div class="backGradient mainFrame" id="app">
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
  background-image: url("/public/assets/svg/uuunion.svg");
  background-size: cover;
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
  /* position: absolute; */
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