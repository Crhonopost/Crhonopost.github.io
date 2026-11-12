<script setup lang="ts">
import { capitalizeFirst } from '@/util/util'
import { useI18n } from 'vue-i18n'
import StudiesCard from './Experience/StudiesCard.vue'
import ScrollSlide from './DepthScroll/ScrollSlide.vue'
import { computed } from 'vue'

const componentSignals = defineEmits<{
    (e: 'navigateBack'): void
    (e: 'navigateFront'): void
}>()

const { t, tm } = useI18n()

const jobs = computed(() => [
    {
        key: 'job_xlim',
        company: 'XLIM',
        location: 'Poitiers',
        date: `${capitalizeFirst(t('dates.april'))} – ${t('dates.august')} 2026`,
    },
    {
        key: 'job_andragogy',
        company: 'Andragogy',
        location: 'Sète',
        date: `${capitalizeFirst(t('dates.april'))} – ${t('dates.june')} 2024`,
    },
    {
        key: 'job_kapix',
        company: 'Kapix',
        location: 'Montpellier',
        date: `${capitalizeFirst(t('dates.april'))} 2023 – ${t('dates.january')} 2024`,
    },
])

function contributionsFor(job: string) {
    return tm(`experiences.professional.${job}.contributions`) as string[]
}
</script>

<template>
    <ScrollSlide
        id="experiences"
        class="panel panel--solid"
        orientation="vertical"
        aria-labelledby="background-title"
        @navigate-back="componentSignals('navigateBack')"
        @navigate-front="componentSignals('navigateFront')"
    >
        <h1 id="background-title">{{ capitalizeFirst(t('titles.background')) }}</h1>

        <section aria-labelledby="studies-title">
            <h2 id="studies-title">{{ capitalizeFirst(t('titles.studies')) }}</h2>
            <div class="studies divider">
                <StudiesCard
                    date="2024–2026"
                    location="Faculté des sciences de Montpellier"
                    :title="t('experiences.studies.master')"
                />
                <StudiesCard
                    date="2021–2024"
                    location="IUT de Montpellier"
                    :title="t('experiences.studies.but')"
                >
                <p id="track">{{ t('experiences.studies.track') + " (" + t('experiences.studies.track_description') + ")"}}</p>
                </StudiesCard>
            </div>
        </section>

        <section aria-labelledby="professional-title">
            <h2 id="professional-title">{{ capitalizeFirst(t('titles.professional')) }}</h2>
            <div class="jobs">
                <details
                    v-for="job in jobs"
                    :key="job.key"
                    class="panel panel--inset experience"
                    name="professional-experience"
                    :open="job.key === 'job_xlim'"
                >
                    <summary>
                        <span class="experience-heading">
                            <strong>{{ job.company }}</strong>
                            <span class="experience-role">
                                {{ capitalizeFirst(t(`experiences.professional.${job.key}.title`)) }}
                            </span>
                        </span>
                        <span class="experience-meta">
                            <span>{{ job.location }}</span>
                            <span>{{ job.date }}</span>
                        </span>
                        <span class="chevron" aria-hidden="true"></span>
                    </summary>
                    <div class="experience-content">
                        <p>{{ t(`experiences.professional.${job.key}.desc`) }}</p>
                        <ul>
                            <li v-for="(contribution, index) in contributionsFor(job.key)" :key="index">
                                {{ contribution }}
                            </li>
                        </ul>
                    </div>
                </details>
            </div>
        </section>
    </ScrollSlide>
</template>

<style scoped>
#experiences {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: min(960px, calc(100% - 30px));
    max-height: 80vh;
    max-height: 80dvh;
    margin: 15px auto;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
}

#experiences h1 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
}

#experiences h2 {
    margin-bottom: 0.65rem;
    font-size: 1.05rem;
    font-weight: 600;
}

#experiences p {
    text-align: left;
}

.studies {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    padding-bottom: 1rem;
}

#track {
    font-size: 0.85rem;
}

.jobs {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.experience {
    padding: 0;
}

.experience > summary {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto 0.75rem;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1rem;
    list-style: none;
    cursor: pointer;
    border-radius: inherit;
}

.experience > summary::-webkit-details-marker {
    display: none;
}

.experience-heading {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.2rem 0.75rem;
}

.experience-heading strong {
    font-size: 1.1rem;
    font-weight: 600;
}

.experience-role {
    font-size: 0.95rem;
}

.experience-meta {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    text-align: right;
    font-variant-numeric: tabular-nums;
    opacity: 0.85;
}

.chevron {
    width: 0.5rem;
    height: 0.5rem;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(-45deg);
}

.experience[open] .chevron {
    transform: rotate(45deg);
}

.experience-content {
    padding: 0 1rem 1rem;
    font-size: 1rem;
}

.experience-content p {
    margin-bottom: 0.6rem;
    font-size: inherit;
}

.experience-content ul {
    display: grid;
    gap: 0.3rem;
    padding-left: 1.2rem;
}

@media (max-width: 700px) {
    #experiences {
        max-height: calc(100dvh - 150px);
        padding: 1rem;
    }

    .studies {
        grid-template-columns: 1fr;
    }

    .experience > summary {
        grid-template-columns: minmax(0, 1fr) 0.75rem;
        gap: 0.35rem 0.75rem;
    }

    .experience-heading {
        flex-direction: column;
        align-items: flex-start;
    }

    .experience-meta {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.2rem 0.75rem;
        grid-column: 1;
        text-align: left;
    }

    .chevron {
        grid-column: 2;
        grid-row: 1 / 3;
    }
}
</style>
