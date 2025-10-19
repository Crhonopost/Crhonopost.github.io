<script setup lang="ts">
import { capitalizeFirst } from '@/util/util'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
    <div id="apropos">
        <div class="glass" id="apropos-text">
            <h1>{{ capitalizeFirst(t('titles.about')) }}</h1>
            <p>
                {{ t('contents.about') }}
            </p>
        </div>
    </div>
</template>

<style scoped>
#apropos {
    display: flex;
    align-items: center;
    justify-content: center;
}

#apropos-text {
    width: 60%;
}
</style>
