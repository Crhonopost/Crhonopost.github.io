<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CustomButton from '../CustomButton.vue'

const { locale } = useI18n()

function switchLanguage(lang: string) {
    locale.value = lang
    showLang.value = false
}

const showLang = ref(false)
</script>

<template>
    <div id="lang">
        <CustomButton v-if="!showLang" content="language" @click="showLang = !showLang" :disable="false" class="btn" />
        <div :class="{ slideIn: showLang }" v-if="showLang">
            <CustomButton content="en" @click="switchLanguage('en')" :disable="false" class="btn" />
            <CustomButton content="fr" @click="switchLanguage('fr')" :disable="false" class="btn" />
        </div>
    </div>
</template> 

<style>
#lang > div:nth-child(2) {
    position: relative;
}

.btn {
    width: 50px;
    height: 50px;
}

#lang div {
    z-index: 1;
}

.slideIn {
    animation: slideIn 0.25s forwards;
}
@keyframes slideIn {
    from {
        opacity: 0%;
        translate: 0 -80px;
    }
    to {
        opacity: 100%;
        translate: 0 0;
    }
}

@media (max-width: 480px) {
    #lang{
        align-content: end;
    }
    
    .slideIn {
        display: flex;
        flex-direction: column-reverse;
        align-content: end;
    }

    .btn {
        width: 80px;
        height: 80px;
    }
}
</style>