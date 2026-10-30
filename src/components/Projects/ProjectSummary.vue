<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import TechnologieTagComponent from './TechnologieTagComponent.vue'
import { isScrollable } from '@/util/util'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'

const { t } = useI18n()

defineProps<{
    title: string
    context: string
    technologies: string[]
    links: { url: string; name: string }[]
}>()

const projectSummary = ref<HTMLElement | null>(null)
onMounted(() => {
    if (projectSummary.value && isScrollable(projectSummary.value)) {
        projectSummary.value.addEventListener('wheel', (evt) => {
            evt.stopPropagation()
        })
    }
})


const isMobile = ref(window.innerWidth < 1300)
const update = () => (isMobile.value = window.innerWidth < 1300)
window.addEventListener('resize', update)
onUnmounted(() => window.removeEventListener('resize', update))

</script>
<template>
    <div class="glass item project_whole column" ref="projectSummary">
        <div :class="{'row': !isMobile, 'column': isMobile}" id="project-header">
            <h1>{{ title }}</h1>
            <div class="project_context">
                <h2>{{ capitalizeFirst(t('titles.context')) }}</h2>
                <p>{{ context }}</p>
            </div>
            <div class="end-align project_technologies" :class="{'row': isMobile, 'column': !isMobile}">
                <div class="column">
                    <h2>{{ capitalizeFirst(t('titles.technologies')) }}</h2>
                    <div class="technologies_list column">
                        <TechnologieTagComponent
                            v-for="tech in technologies"
                            :key="tech"
                            :name="tech"
                        />
                    </div>
                </div>
                <div class="project_links" v-if="links.length > 0">
                    <h2>{{ capitalizeFirst(t('titles.links')) }}</h2>
                    <ul>
                        <li v-for="link in links" :key="link.url">
                            <a :href="link.url">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="separator_h"></div>
        <div class="other">
            <component v-for="(item, index) in $slots.default?.() ?? []" :key="index" :is="item" />
        </div>
    </div>
</template>

<style>
#project-header {
    margin-top: 50px;
}
.project_whole {
    height: 100%;
    overflow: auto;
}

.project_whole h1 {
    height: auto;
    margin-left: 40px;
}

.project_context {
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 800px;
}

.project_context > h2 {
    text-align: center;
}

.project_technologies {
    padding: 30px;
    margin-top: auto;
    flex: 0;
}

.technologies_list {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}

.row > column {
    flex: 0.6;
}

.other {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: var(--terciary-bg-color); */
}

.other > * {
    width: 100%;
}

.project_links {
    width: 100%;
}

.project_links a {
    white-space: nowrap;
}

@media (max-width: 1300px) {
    .project_context p {
        padding-left: 40px;
    }
}
@media (max-width: 580px) {
    #project-header > h1 {
        font-size: xx-large;
    }
}

</style>
