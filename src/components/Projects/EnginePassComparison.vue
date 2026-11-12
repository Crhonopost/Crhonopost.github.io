<script setup lang="ts">
import { computed, reactive, ref, useId } from 'vue'
import { useI18n } from 'vue-i18n'
import { enginePassCaptures, type EnginePassCapture, type EnginePassCaptureKey } from './enginePassCaptures'

const { t } = useI18n()
const comparisonId = useId()
const selected = ref<[EnginePassCaptureKey]>(['final'])
const mobileView = ref(0)
const failedSources = reactive(new Set<string>())
const views = computed(
    () => selected.value.map(
        key => enginePassCaptures.find(
            capture => capture.key === key)!))

function markFailed(capture: EnginePassCapture) {
    if (capture.src) failedSources.add(capture.src)
}
</script>

<template>
    <div class="pass-comparison" role="group" :aria-labelledby="`${comparisonId}-title`">
        <div class="comparison-heading">
            <h4 :id="`${comparisonId}-title`">{{ t('projects.engine.capture_comparison.title') }}</h4>
            <!-- <p>{{ t('projects.engine.capture_comparison.description') }}</p> -->
        </div>

        <div class="comparison-views">
            <figure
                v-for="(capture, index) in views"
                :id="`${comparisonId}-view-${index}`"
                :key="index"
                class="comparison-pane"
                :class="{ 'is-active': mobileView === index }"
            >
                <select :id="`${comparisonId}-select-${index}`" v-model="selected[index]" class="comparison-select">
                    <option v-for="option in enginePassCaptures" :key="option.key" :value="option.key">
                        {{ t(`projects.engine.capture_comparison.stages.${option.key}`) }}
                    </option>
                </select>
                <div
                    class="panel panel--frame capture-frame"
                    :class="{ 'capture-frame--empty': !capture.src || failedSources.has(capture.src) }"
                >
                    <a
                        v-if="capture.src && !failedSources.has(capture.src)"
                        :href="capture.src"
                        class="capture-image"
                        target="_blank"
                        rel="noopener"
                        :aria-label="t('projects.engine.capture_comparison.open_image', { stage: t(`projects.engine.capture_comparison.stages.${capture.key}`) })"
                    >
                        <img
                            :src="capture.src"
                            :alt="t('projects.engine.capture_comparison.image_alt', { stage: t(`projects.engine.capture_comparison.stages.${capture.key}`) })"
                            loading="lazy"
                            @error="markFailed(capture)"
                        />
                    </a>
                    <div v-else class="capture-placeholder">
                        <span>{{ t(`projects.engine.capture_comparison.${capture.src ? 'unavailable' : 'missing'}`) }}</span>
                    </div>
                </div>
            </figure>
        </div>
    </div>
</template>

<style scoped>
.pass-comparison,
.comparison-heading,
.comparison-pane {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.pass-comparison {
    gap: 1rem;
}

.comparison-heading {
    gap: 0.4rem;
}

.comparison-heading h4 {
    font-size: 1.05rem;
    font-weight: 600;
}

.comparison-heading p {
    font-size: 0.9rem;
    text-align: left;
}

.comparison-views {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.comparison-pane {
    gap: 0.5rem;
    margin: 0;
}

.comparison-pane label {
    font-size: 0.9rem;
    font-weight: 600;
}

.comparison-select {
    width: 100%;
    min-width: 0;
    padding: 0.45rem;
    border: var(--control-border-width) solid var(--control-border-color);
    border-radius: var(--control-radius);
    color: var(--color-text);
    background: var(--control-background);
    font: inherit;
}

.comparison-select option {
    background: var(--control-option-background);
}

.capture-frame {
    aspect-ratio: 16 / 9;
    min-width: 0;
    overflow: hidden;
    background: var(--panel-inset-background);
}

.capture-frame--empty {
    border-style: dashed;
}

.capture-image,
.capture-image img {
    display: block;
    width: 100%;
    height: 100%;
}

.capture-image img {
    object-fit: contain;
}

.capture-placeholder {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 0.9rem;
}

.comparison-switcher {
    display: none;
    gap: 0.5rem;
}

.comparison-switcher .button[aria-pressed='true'] {
    border-color: var(--panel-border-active-color);
    background: var(--button-hover-background);
}

.comparison-select:focus-visible,
.capture-image:focus-visible {
    outline: var(--focus-width) solid currentColor;
    outline-offset: var(--focus-offset);
}

.capture-image:focus-visible {
    outline-offset: calc(-1 * var(--focus-width));
}

@media (max-width: 700px) {
    .comparison-switcher {
        display: flex;
    }

    .comparison-views {
        grid-template-columns: minmax(0, 1fr);
    }

    .comparison-pane:not(.is-active) {
        display: none;
    }
}
</style>
