<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProjectSummary from './ProjectSummary.vue'
import EngineRenderPipeline from './EngineRenderPipeline.vue'
import EnginePassComparison from './EnginePassComparison.vue'
import EngineCommandQueue from './EngineCommandQueue.vue'
import EngineRenderGraph from './EngineRenderGraph.vue'

const { t } = useI18n()
</script>

<template>
    <ProjectSummary
        title="Galaxy Engine"
        :context="t('projects.engine.context')"
        :technologies="['C++', 'OpenGL', 'GLSL']"
        :links="[{ url: 'https://github.com/Godon-t/galaxy-engine', name: 'GitHub' }]"
    >
        <div class="engine-content">
            <div class="engine-introduction row">
                <section class="engine-overview">
                    <h2>{{ t('projects.engine.overview_title') }}</h2>
                    <figure class="engine-editor">
                        <img class="round" src="/projects/gameengine/new_editor.png" :alt="t('projects.engine.editor_alt')" />
                        <figcaption>{{ t('projects.engine.editor_caption') }}</figcaption>
                    </figure>
                    <div class="engine-copy">
                        <p>{{ t('projects.engine.overview_desc') }}</p>
                        <i18n-t keypath="projects.engine.overview_render" tag="p">
                            <template #pbr><strong>{{ t('projects.engine.rendering_terms.pbr') }}</strong></template>
                            <template #transparency><strong>{{ t('projects.engine.rendering_terms.transparency') }}</strong></template>
                            <template #shadows><strong>{{ t('projects.engine.rendering_terms.shadows') }}</strong></template>
                            <template #culling><strong>{{ t('projects.engine.rendering_terms.culling') }}</strong></template>
                        </i18n-t>
                    </div>
                </section>

                <section class="engine-section engine-architecture">
                    <h2>{{ t('projects.engine.architecture_title') }}</h2>
                    <p>{{ t('projects.engine.architecture_desc') }}</p>
                    <p>{{ t('projects.engine.renderer_desc') }}</p>
                    <p>{{ t('projects.engine.resources_desc') }}</p>
                </section>
            </div>

            <section class="engine-section engine-rendering">
                <h2>{{ t('projects.engine.graph_title') }}</h2>
                <section class="renderer-part">
                    <h3>{{ t('projects.engine.renderer_sections.previous') }}</h3>
                    <p>{{ t('projects.engine.renderer_commands_desc') }}</p>
                    <EngineCommandQueue />
                </section>
                <section class="renderer-part">
                    <h3>{{ t('projects.engine.renderer_sections.redesign') }}</h3>
                    <p>{{ t('projects.engine.renderer_passes_desc') }}</p>
                    <p>{{ t('projects.engine.graph_desc') }}</p>
                    <EngineRenderGraph />
                </section>
                <section class="renderer-part">
                    <h3>{{ t('projects.engine.renderer_sections.current') }}</h3>
                    <EngineRenderPipeline />
                    <EnginePassComparison />
                    <p>{{ t('projects.engine.graph_goal') }}</p>
                </section>
            </section>

            <section class="engine-section">
                <h2>{{ t('projects.engine.progress_title') }}</h2>
                <p>{{ t('projects.engine.progress_desc') }}</p>
            </section>

            <section class="engine-section engine-prototype divider">
                <h2>{{ t('projects.engine.prototype_title') }}</h2>
                <p>{{ t('projects.engine.prototype_desc') }}</p>
                <div class="engine-gallery">
                    <figure>
                        <img class="round" src="/projects/gameengine/main_scene.png" :alt="t('projects.engine.prototype_alt')" />
                        <figcaption>{{ t('projects.engine.prototype_caption') }}</figcaption>
                    </figure>
                    <figure>
                        <img class="round" src="/projects/gameengine/init.gif" :alt="t('projects.engine.camera_caption_0')" />
                        <figcaption>{{ t('projects.engine.camera_caption_0') }}</figcaption>
                    </figure>
                    <figure>
                        <img class="round" src="/projects/gameengine/moving.gif" :alt="t('projects.engine.camera_caption_1')" />
                        <figcaption>{{ t('projects.engine.camera_caption_1') }}</figcaption>
                    </figure>
                </div>
            </section>
        </div>
    </ProjectSummary>
</template>

<style scoped>
.engine-content,
.engine-section {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.engine-content {
    gap: 2rem;
}

.engine-section {
    gap: 0.8rem;
}

.engine-rendering {
    gap: 1.25rem;
}

.renderer-part {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    min-width: 0;
    padding: 0.25rem 0 0.25rem 1.25rem;
}

.engine-rendering .renderer-part > h3 {
    margin-top: 0;
}

.engine-introduction {
    display: flow-root;
    min-width: 0;
}

.engine-overview h2 {
    margin-bottom: 0.8rem;
}

.engine-overview .engine-editor {
    float: inline-end;
    width: min(56%, 42rem);
    margin: 0 0 1rem 1.5rem;
}

.engine-copy > p + p,
.engine-architecture > p {
    margin-top: 0.8rem;
}

.engine-architecture {
    display: block;
    margin-top: 2rem;
}

.engine-content h2 {
    font-size: clamp(1.25rem, 2vw, 1.6rem);
    font-weight: 600;
}

.engine-content h3 {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.engine-content p {
    max-width: 85ch;
    text-align: left;
    font-size: 1rem;
}

.engine-introduction p {
    max-width: none;
}

.engine-copy :deep(strong) {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: var(--color-accent);
    text-decoration-thickness: var(--panel-border-width);
    text-underline-offset: 0.2em;
}

.engine-content figure {
    min-width: 0;
    margin: 0;
}

.engine-content img {
    display: block;
    width: 100%;
    height: auto;
}

.engine-content figcaption {
    margin-top: 0.6rem;
    font-size: 0.85rem;
    line-height: 1.5;
}

.engine-prototype {
    padding-top: 1.5rem;
    border-block-end: 0;
    border-block-start: var(--divider-width) solid var(--divider-color);
}

.engine-gallery {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: start;
    gap: 1rem;
}

.engine-gallery img {
    height: 220px;
    object-fit: contain;
}

@media (max-width: 1000px) {
    .engine-overview {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .engine-overview h2 {
        margin-bottom: 0;
    }

    .engine-copy {
        order: 1;
    }

    .engine-overview .engine-editor {
        order: 2;
        float: none;
        width: 100%;
        margin: 0.7rem 0 0;
    }
}

@media (max-width: 700px) {
    .renderer-part {
        padding-left: 0.8rem;
    }

    .engine-gallery {
        grid-template-columns: minmax(0, 1fr);
    }
}
</style>
