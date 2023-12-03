<template>
  <router-view />
  <main-view
  :title="title"
  :content="$t('article1.content')">
  </main-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script setup lang="ts">
import MainView from './views/MainView.vue';
import {useI18n} from "vue-i18n"

const {t} = useI18n();

const title = t('article1.title')
</script>
