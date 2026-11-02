<script setup lang="ts">
import { capitalizeFirst } from '@/util/util'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
    <div id="apropos">
        <div class="panel" id="apropos-text">
            <h1>{{ capitalizeFirst(t('titles.about')) }}</h1>
            <p>{{ t('contents.about.profile') }}</p>
            <p>{{ t('contents.about.hobby') }}</p>
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
    max-height: inherit;
    overflow-y: auto;
}

#apropos-text p {
    text-align: left;
}

#apropos-text p + p {
    margin-top: 1rem;
}

@media (max-width: 1250px) {
    #apropos-text {
        width: 100%;
    }   
}

@media (max-width: 480px) {
    #apropos-text {
        font-size: small;
    }   
}
</style>
