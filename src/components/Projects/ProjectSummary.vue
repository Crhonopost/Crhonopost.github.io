<script lang="ts" setup>
import TechnologieTagComponent from './TechnologieTagComponent.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import ScrollSlide from '../DepthScroll/ScrollSlide.vue'

const { t } = useI18n()

const componentSignals = defineEmits<{
    (e: 'navigateBack'): void
}>()

defineProps<{
    title: string
    context: string
    technologies: string[]
    links: { url: string; name: string }[]
}>()
</script>

<template>
    <ScrollSlide
        class="panel project_whole"
        orientation="vertical"
        role="article"
        :aria-label="title"
        @navigate-back="componentSignals('navigateBack')"
    >
        <header class="project-header divider">
            <div class="project-heading">
                <h1>{{ title }}</h1>
                <div class="project-meta">
                    <div v-if="technologies.length" class="project-meta-group">
                        <span class="project-meta-label">{{ capitalizeFirst(t('titles.technologies')) }}</span>
                        <ul class="technologies-list" :aria-label="t('titles.technologies')">
                            <li v-for="tech in technologies" :key="tech">
                                <TechnologieTagComponent :name="tech" />
                            </li>
                        </ul>
                    </div>
                    <nav v-if="links.length" class="project-meta-group" :aria-label="t('titles.links')">
                        <span class="project-meta-label">{{ capitalizeFirst(t('titles.links')) }}</span>
                        <ul class="project-links">
                            <li v-for="link in links" :key="link.url">
                                <a class="button" :href="link.url"
                                    data-umami-event="project-link-click"
                                    :data-umami-event-destination="link.url">{{ link.name }}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <aside v-if="context" class="project-context divider divider--vertical">
                <h2>{{ capitalizeFirst(t('titles.context')) }}</h2>
                <p>{{ context }}</p>
            </aside>
        </header>

        <div class="project-body">
            <div class="other">
                <slot />
            </div>
        </div>
    </ScrollSlide>
</template>

<style scoped>
.project_whole.scroll-slide {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: calc(100% - 30px);
    max-height: 80vh;
    max-height: 80dvh;
    padding: clamp(1rem, 2vw, 2rem);
}

.project-header {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    align-items: start;
    gap: clamp(1.5rem, 3vw, 3rem);
    padding-bottom: 1.25rem;
}

.project-heading {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
}

.project-heading:only-child {
    grid-column: 1 / -1;
}

.project-header h1 {
    margin: 0;
    font-size: clamp(1.75rem, 3vw, 3rem);
    line-height: 1.2;
    overflow-wrap: anywhere;
}

.project-meta {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.project-meta-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 1rem;
    min-width: 0;
}

.project-meta-label {
    flex: 0 0 7rem;
    font-size: 0.9rem;
    font-weight: 600;
}

.technologies-list,
.project-links {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
    margin: 0;
    padding: 0;
    list-style: none;
}

.project-links li {
    min-width: 0;
}

.project-links a {
    padding: 0.25rem 0.6rem;
    font-size: 0.9rem;
    overflow-wrap: anywhere;
}

.project-body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 0;
}

.project-context {
    justify-self: end;
    max-width: 55ch;
    min-width: 0;
    padding-left: 1.25rem;
}

.project-context h2 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
}

.project-context p {
    text-align: left;
    font-size: 0.95rem;
    line-height: 1.65;
}

.other {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    min-width: 0;
}

.other > :deep(*) {
    width: 100%;
    min-width: 0;
}

@media (max-width: 1100px) {
    .project-header {
        grid-template-columns: minmax(0, 1fr);
        gap: 1.25rem;
    }

    .project-context {
        justify-self: start;
        max-width: 75ch;
        padding-left: 0;
        border-inline-start: 0;
    }
}

@media (max-width: 700px) {
    .project_whole.scroll-slide {
        max-height: calc(100dvh - 150px);
    }

    .project-meta-group {
        flex-direction: column;
        align-items: flex-start;
    }

    .project-meta-label {
        flex-basis: auto;
    }

    .technologies-list,
    .project-links {
        flex: auto;
    }
}
</style>
