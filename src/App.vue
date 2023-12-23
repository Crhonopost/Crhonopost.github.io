<template>
  <div class="backColor mainFrame">
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
  overflow: hidden;
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
}

nav>* {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

nav a {
  font-weight: bold;
  color: #94a3b8;
}

nav a.router-link-exact-active {
  color: #dfe6f0;
}

.mainContent {
  flex: 2;
}

.whiteText {
  color: #dfe6f0;
}

.greyText {
  color: #94a3b8;
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
  min-height: 100vh;
}
</style>

<script setup lang="ts">
import Navigation from "@/components/NavComponent.vue"
</script>