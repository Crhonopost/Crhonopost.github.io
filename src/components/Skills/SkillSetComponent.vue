<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import SkillComponent from '@/components/Skills/SkillComponent.vue'
import { AnotationEnum, type Skill } from '@/types'
import { capitalizeFirst } from '@/util/util'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
    skills: Skill[]
}>()

const showWebRelated = ref(true)

ref<AnotationEnum>(AnotationEnum.NONE)
const skillSetRef = ref<HTMLElement | null>(null)
const columns = ref(1)

const getOffsetClass = (index: number) => {
    if (columns.value < 2) return ''
    // Row number (0-based)
    const row = Math.floor(index / columns.value)
    return row % 2 === 1 ? 'offset-row' : ''
}

const updateColumns = () => {
    if (skillSetRef.value) {
        const style = getComputedStyle(skillSetRef.value)
        const colCount = style.getPropertyValue('grid-template-columns').split(' ').length
        columns.value = colCount
    }
}

onMounted(() => {
    nextTick(updateColumns)
    window.addEventListener('resize', updateColumns)
})
</script>

<template>
    <div id="page">
        <div class="skill-set-header">
            <h2>{{ capitalizeFirst(t('titles.skills')) }}</h2>
            <p>{{ capitalizeFirst(t('descriptions.skills')) }}</p>
            <!-- <div id="filters">
                <p>Filters:</p>
                <CustomButton
                    class="btn"
                    content="Web related"
                    @click="() => (showWebRelated = !showWebRelated)"
                ></CustomButton>
            </div> -->
        </div>
        <div id="skill-set-container">
            <div class="skill-set">
                <div
                    v-for="(skill, index) in skills.filter((s) => !s.isWeb)"
                    :key="skill.name"
                    :class="getOffsetClass(index)"
                >
                    <SkillComponent
                        :name="skill.name"
                        :icon="skill.icon"
                        :anotation="skill.anotation"
                        :is-web="skill.isWeb"
                    />
                </div>
            </div>
            <div class="skill-set" v-show="showWebRelated">
                <div
                    v-for="(skill, index) in skills.filter((s) => s.isWeb)"
                    :key="skill.name"
                    :class="getOffsetClass(index)"
                >
                    <SkillComponent
                        :name="skill.name"
                        :icon="skill.icon"
                        :anotation="skill.anotation"
                        :is-web="skill.isWeb"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skill-set-header {
    text-align: center;
    margin-bottom: 20px;
}

#skill-set-container {
    display: flex;
    flex-direction: column;
}

#page {
    width: 100%;
}

.skill-set {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
    justify-content: center;
    /* padding-right: 50px; */
}
.offset-row {
    margin-left: 100px;
}

#filters {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#filters * {
    margin: 3px;
}

#filters p {
    margin-right: 10px;
}

.btn {
    width: 100px;
}

@media screen and (max-width: 900px) {
    .skill-set {
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
        padding-right: 0;
    }
    .offset-row {
        margin-left: 0;
    }
}
</style>
