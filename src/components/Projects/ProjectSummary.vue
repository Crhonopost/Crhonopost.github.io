<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import TechnologieTagComponent from './TechnologieTagComponent.vue'
import { isScrollable } from '@/util/util'

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
    <div class="glass item project_whole" ref="projectSummary">
        <div class="row">
            <div class="column round">
                <h1>{{ title }}</h1>
                <div class="project_context">
                    <h2>Context</h2>
                    <p>{{ context }}</p>
                </div>
            </div>
            <div class="column round">
                <div>
                    <h2>Technologies</h2>
                    <div class="project_technologies">
                        <TechnologieTagComponent
                            v-for="tech in technologies"
                            :key="tech"
                            :name="tech"
                        />
                    </div>
                </div>
                <div class="project_links">
                    <h2>Links</h2>
                    <ul>
                        <li v-for="link in links" :key="link.url">
                            <a :href="link.url">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="other round">
            <div class="separator_h"></div>
            <div class="layer" v-for="(item, index) in $slots.default?.() ?? []" :key="index">
                <component :is="item" />
            </div>
        </div>
    </div>
</template>

<style>
@import url('@/components/Projects/style.css');

.project_whole {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    /* background-color: var(--secondary-bg-color); */
}
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.project_technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.other {
    margin-top: 20px;
    padding: 0px;
    /* background-color: var(--terciary-bg-color); */
}
</style>
