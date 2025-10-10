<script setup lang="ts">
import { capitalizeFirst } from '@/util/util'
import { useI18n } from 'vue-i18n'
import StudiesCard from './Experience/StudiesCard.vue'

const { t } = useI18n()
</script>

<template>
    <div id="experiences">
        <div class="glass">
            <h1>{{ capitalizeFirst(t('titles.studies')) }}</h1>
            <StudiesCard
                date="2024 - 2026"
                location="Faculté des sciences de Montpellier"
                description="Master Imagine"
            />
            <div class="separator_h"></div>
            <StudiesCard
                date="2021 - 2024"
                location="IUT de Montpellier"
                description="BUT Informatique (parcours Réalisation
            d'Application: Développement, Validation)"
            />
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
                date="april - june 2024"
                location="Andragogy (Sète)"
                description="web developer internship"
            />
            <div class="separator_h"></div>
            <StudiesCard
                date="april 2023 - january 2024"
                location="Kapix (Montpellier)"
                description="web developer internship"
            />
        </div>
    </div>
</template>

<style scoped>
#experiences {
    display: flex;
}

#experiences > div {
    width: 100%;
}

div {
    margin: 10px;
}

#pro {
    width: fit-content;
    height: fit-content;
}

@media screen and (max-width: 900px) {
    #experiences {
        flex-direction: column;
        padding: 10px;
    }
}
</style>
