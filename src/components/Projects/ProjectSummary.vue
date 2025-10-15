<script lang="ts" setup>
import { onMounted, ref } from 'vue'
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
</script>
<template>
    <div class="glass item project_whole column" ref="projectSummary">
        <div class="row">
            <h1>{{ title }}</h1>
            <div class="project_context">
                <h2>{{ capitalizeFirst(t('titles.context')) }}</h2>
                <p>{{ context }}</p>
            </div>
            <div class="column end-align project_technologies">
                <div class="column round">
                    <h2>{{ capitalizeFirst(t('titles.technologies')) }}</h2>
                    <div class="technologies_list">
                        <TechnologieTagComponent
                            v-for="tech in technologies"
                            :key="tech"
                            :name="tech"
                        />
                    </div>
                    <div class="project_links">
                        <h2>{{ capitalizeFirst(t('titles.links')) }}</h2>
                        <ul>
                            <li v-for="link in links" :key="link.url">
                                <a :href="link.url">{{ link.name }}</a>
                            </li>
                        </ul>
                    </div>
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
.project_whole {
    height: 100%;
    overflow: auto;
}

.project_whole h1 {
    height: auto;
    margin-top: 40px;
    margin-left: 40px;
}

.project_context {
    width: 40%;
    margin-top: 50px;
}

.project_context > h2 {
    text-align: center;
}

.project_technologies {
    padding: 30px;
    padding-top: 50px;
    margin-top: auto;
}

.technologies_list {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}

.row > * {
    flex: 1;
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

.project_links a {
    white-space: nowrap;
}
</style>
