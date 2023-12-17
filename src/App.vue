<template>
  <div class="backColor">
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0f172a;
  min-height: 100vh;
}

nav a {
  font-weight: bold;
  color: #94a3b8;
}

nav a.router-link-exact-active {
  color: #dfe6f0;
}

.mainContent {
  margin-left: 110px;
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
</style>

<script setup lang="ts">
import Navigation from "@/components/NavComponent.vue"
</script>