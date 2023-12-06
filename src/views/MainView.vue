<template>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n"

const {t} = useI18n();

const title = t('article1.title')
const content = t('article1.content')
</script>