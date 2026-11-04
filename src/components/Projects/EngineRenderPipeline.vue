<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const stages = [
    { key: 'shadows' },
    { key: 'pbr', passes: ['opaque', 'transparent'] },
    { key: 'lighting' },
    { key: 'composition' },
    { key: 'textured', passes: ['textures', 'texture_alpha'] },
]
</script>

<template>
    <figure class="panel panel--inset engine-pipeline">
        <ol class="pipeline-stages">
            <li v-for="(stage, index) in stages" :key="stage.key">
                <div class="panel panel--frame pipeline-stage">
                    <h3>
                        <span class="stage-number" aria-hidden="true">{{ index + 1 }}</span>
                        {{ t(`projects.engine.pipeline.${stage.key}_title`) }}
                    </h3>
                    <div v-if="stage.passes" class="pipeline-subpasses">
                        <div v-for="pass in stage.passes" :key="pass" class="pipeline-pass" :data-pass="pass">
                            <strong>{{ t(`projects.engine.pipeline.${pass}_title`) }}</strong>
                            <p>{{ t(`projects.engine.pipeline.${pass}_desc`) }}</p>
                        </div>
                    </div>
                    <p v-else class="pipeline-pass" :data-pass="stage.key">
                        {{ t(`projects.engine.pipeline.${stage.key}_desc`) }}
                    </p>
                </div>
                <span v-if="index < stages.length - 1" class="stage-arrow" aria-hidden="true">→</span>
            </li>
        </ol>
        <div class="panel panel--frame pipeline-extensions">
            <strong>{{ t('projects.engine.pipeline.extensions_title') }}</strong>
            <p>{{ t('projects.engine.pipeline.extensions_desc') }}</p>
        </div>
        <figcaption>
            <p>{{ t('projects.engine.pipeline.caption') }}</p>
            <p>{{ t('projects.engine.pipeline.transparency_note') }}</p>
        </figcaption>
    </figure>
</template>

<style scoped>
.engine-pipeline {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    margin: 0;
}

.pipeline-stages {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
}

.pipeline-stages > li {
    display: flex;
    flex: 1;
    min-width: 0;
}

.pipeline-stage {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.7rem;
    min-width: 0;
    padding: 0.8rem;
}

.pipeline-stage h3 {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 600;
}

.pipeline-subpasses {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.engine-pipeline strong {
    font-weight: 600;
}

.engine-pipeline p,
.pipeline-subpasses strong {
    font-size: 0.9rem;
    line-height: 1.5;
}

.engine-pipeline p {
    text-align: left;
}

.pipeline-subpasses p,
.pipeline-extensions p {
    margin-top: 0.3rem;
}

.stage-number {
    font-size: 0.8rem;
    font-variant-numeric: tabular-nums;
}

.stage-arrow {
    align-self: center;
    padding-inline: 0.4rem;
    font-size: 1.3rem;
}

.pipeline-extensions {
    padding: 0.8rem;
    border-style: dashed;
}

figcaption {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 0.85rem;
    line-height: 1.5;
}

.engine-pipeline figcaption p {
    font-size: inherit;
    line-height: inherit;
}

@media (max-width: 1199px) {
    .pipeline-stages,
    .pipeline-stages > li {
        flex-direction: column;
    }

    .stage-arrow {
        padding-block: 0.3rem;
        transform: rotate(90deg);
    }
}

@media (min-width: 700px) and (max-width: 1199px) {
    .pipeline-stage {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
    }

    .pipeline-subpasses {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>
