<script setup lang="ts">
import { capitalizeFirst } from '@/util/util'
import { useI18n } from 'vue-i18n'
import StudiesCard from './Experience/StudiesCard.vue'

const { t } = useI18n()

import ToolTip from 'v-tooltip-lite'
</script>

<template>
    <div id="experiences">
        <div class="glass column">
            <h1>{{ capitalizeFirst(t('titles.studies')) }}</h1>
            <StudiesCard
                date="2024 - 2026"
                location="Faculté des sciences de Montpellier"
                description="Master Imagine"
            />
            <div class="separator_h"></div>

            <ToolTip content="Réalisation d'Application, Développement et Validation">
                <template #trigger>
                    <StudiesCard
                        date="2021 - 2024"
                        location="IUT de Montpellier"
                        description="BUT Informatique (parcours RACDV)"
                    />
                </template>
            </ToolTip>

            <div class="separator_h"></div>
            <StudiesCard
                date="2021"
                location="Lycée Albert Einstein de Bagnols sur Cèze"
                description="Bac général options NSI et Mathématiques expertes"
            />
        </div>
        <div class="glass" id="pro">
            <h1>{{ capitalizeFirst(t('titles.professional')) }}</h1>
            <StudiesCard
                :date="`${capitalizeFirst(t('dates.april'))} - ${capitalizeFirst(t('dates.june'))} 2024`"
                location="Andragogy (Sète)"
                :description="capitalizeFirst(t('experiences.professional.job_andragogy'))"
            />
            <div class="separator_h"></div>
            <StudiesCard
                :date="`${capitalizeFirst(t('dates.april'))} 2023 - ${capitalizeFirst(t('dates.january'))} 2024`"
                location="Kapix (Montpellier)"
                :description="capitalizeFirst(t('experiences.professional.job_kapix'))"
            />
        </div>
    </div>
</template>

<style scoped>
@import url('v-tooltip-lite/style.css');

#experiences {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
}

#experiences > div {
    width: fit-content;
}

#pro {
    width: fit-content;
    height: fit-content;
}

@media (max-width: 900px) {
    #experiences {
        flex-direction: column;
        padding: 10px;
    }
}
</style>
