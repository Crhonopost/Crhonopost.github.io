<script setup lang="ts">
import { useId } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const graphId = useId()
</script>

<template>
    <figure class="panel panel--inset render-graph">
        <section class="graph-step" :aria-labelledby="`${graphId}-definition`">
            <div class="step-copy">
                <h4 :id="`${graphId}-definition`">
                    <span class="step-number" aria-hidden="true">01</span>
                    {{ t('projects.engine.render_graph.definition') }}
                </h4>
                <p>{{ t('projects.engine.render_graph.definition_desc') }}</p>
            </div>
            <div class="definition-diagram" role="group" :aria-label="t('projects.engine.render_graph.description')">
                <div class="pass-card">
                    <span class="card-kind">RenderPass</span>
                    <strong>{{ t('projects.engine.pipeline.graph.geometry') }}</strong>
                </div>
                <div class="access-link" aria-hidden="true">
                    <span>{{ t('projects.engine.render_graph.write') }}</span>
                    <span class="link-arrow">→</span>
                </div>
                <div class="resource-card definition-resource">
                    <span class="card-kind">{{ t('projects.engine.render_graph.textures') }}</span>
                    <strong>G-buffer</strong>
                    <span>{{ t('projects.engine.render_graph.gbuffer_contents') }}</span>
                </div>
                <div class="pass-card">
                    <span class="card-kind">RenderPass</span>
                    <strong>{{ t('projects.engine.render_graph.lighting') }}</strong>
                </div>
                <div class="access-link" aria-hidden="true">
                    <span>{{ t('projects.engine.render_graph.read') }}</span>
                    <span class="link-arrow">←</span>
                </div>
            </div>
        </section>

        <section class="graph-step" :aria-labelledby="`${graphId}-compilation`">
            <div class="step-copy">
                <h4 :id="`${graphId}-compilation`">
                    <span class="step-number" aria-hidden="true">02</span>
                    {{ t('projects.engine.render_graph.compilation') }}
                </h4>
                <p>{{ t('projects.engine.render_graph.compilation_desc') }}</p>
            </div>
            <div class="compilation-diagram">
                <div class="compiled-order" role="group" :aria-label="t('projects.engine.render_graph.order')">
                    <div class="pass-card">
                        <span class="card-kind">{{ t('projects.engine.render_graph.first') }}</span>
                        <strong>{{ t('projects.engine.pipeline.graph.geometry') }}</strong>
                    </div>
                    <span class="order-link" aria-hidden="true">→ <span>G-buffer</span> →</span>
                    <div class="pass-card">
                        <span class="card-kind">{{ t('projects.engine.render_graph.then') }}</span>
                        <strong>{{ t('projects.engine.render_graph.lighting') }}</strong>
                    </div>
                </div>
                <p class="future-resources">
                    <span>{{ t('projects.engine.render_graph.future') }}</span>
                    {{ t('projects.engine.render_graph.optimization') }}
                </p>
            </div>
        </section>

        <section class="graph-step" :aria-labelledby="`${graphId}-execution`">
            <div class="step-copy">
                <h4 :id="`${graphId}-execution`">
                    <span class="step-number" aria-hidden="true">03</span>
                    {{ t('projects.engine.render_graph.execution') }}
                </h4>
                <p>{{ t('projects.engine.render_graph.execution_desc') }}</p>
            </div>
            <div class="execution-diagram">
                <div class="invocation-card">
                    <span class="card-kind">Invocation</span>
                    <dl>
                        <div>
                            <dt>{{ t('projects.engine.render_graph.pass_reference') }}</dt>
                            <dd>{{ t('projects.engine.pipeline.graph.geometry') }}</dd>
                        </div>
                        <div>
                            <dt>{{ t('projects.engine.render_graph.parameters') }}</dt>
                            <dd>{{ t('projects.engine.render_graph.render_data') }}</dd>
                        </div>
                    </dl>
                </div>
                <div class="execution-backend">
                    <span class="link-arrow" aria-hidden="true">↓</span>
                    <span>{{ t('projects.engine.render_graph.backend') }}</span>
                </div>
            </div>
        </section>
        <figcaption>{{ t('projects.engine.render_graph.caption') }}</figcaption>
    </figure>
</template>

<style scoped>
.render-graph {
    --graph-accent: color-mix(in srgb, var(--color-accent) 65%, var(--color-text));
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-width: 0;
    margin: 0;
    padding: clamp(1rem, 2vw, 1.5rem);
}

.graph-step {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    align-items: center;
    gap: 1.5rem 2rem;
    min-width: 0;
}

.graph-step + .graph-step {
    padding-top: 1.5rem;
    border-top: var(--panel-border-width) solid var(--panel-border-color);
}

.step-copy h4 {
    display: flex;
    align-items: baseline;
    gap: 0.65rem;
    font-size: 1rem;
    font-weight: 600;
}

.step-number {
    color: var(--graph-accent);
    font-family: monospace;
    font-size: 0.85rem;
}

.render-graph .step-copy p {
    margin-top: 0.6rem;
    font-size: 0.9rem;
    line-height: 1.65;
    text-align: left;
}

.definition-diagram {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 4rem minmax(0, 1fr);
    align-items: center;
    gap: 0.75rem 0.5rem;
}

.pass-card,
.resource-card,
.invocation-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
    min-width: 0;
    padding: 0.75rem;
    border: var(--panel-border-width) solid var(--graph-accent);
    border-radius: 6px;
    background: color-mix(in srgb, var(--color-accent) 6%, transparent);
    font-size: 0.85rem;
    overflow-wrap: anywhere;
}

.pass-card strong,
.resource-card strong {
    font-weight: 600;
}

.card-kind {
    font-family: monospace;
    font-size: 0.72rem;
}

.definition-resource {
    grid-column: 3;
    grid-row: 1 / 3;
    align-self: stretch;
    border-color: var(--panel-border-active-color);
    border-style: dashed;
    background: var(--panel-inset-background);
}

.definition-resource > :last-child {
    font-size: 0.78rem;
    line-height: 1.6;
}

.access-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.7rem;
}

.link-arrow,
.order-link {
    color: var(--graph-accent);
    font-size: 1.2rem;
}

.compiled-order {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    gap: 0.65rem;
}

.order-link {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    white-space: nowrap;
}

.order-link span {
    color: var(--color-text);
    font-family: monospace;
    font-size: 0.75rem;
}

.render-graph .future-resources {
    margin-top: 0.85rem;
    font-size: 0.8rem;
    line-height: 1.6;
    text-align: left;
}

.future-resources > span {
    margin-right: 0.35rem;
    color: var(--graph-accent);
    font-weight: 600;
}

.invocation-card {
    gap: 0.6rem;
}

.invocation-card dl {
    display: grid;
    gap: 0.5rem;
}

.invocation-card dl > div {
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr);
    gap: 0.75rem;
}

.invocation-card dt {
    font-size: 0.78rem;
}

.invocation-card dd {
    margin: 0;
}

.execution-backend {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-top: 0.5rem;
    font-size: 0.8rem;
}

.render-graph figcaption {
    font-size: 0.8rem;
    line-height: 1.6;
}

@media (max-width: 1100px) {
    .graph-step {
        grid-template-columns: minmax(0, 1fr);
        gap: 1rem;
    }
}

@media (max-width: 450px) {
    .definition-diagram {
        grid-template-columns: minmax(0, 1fr) 3rem minmax(0, 1fr);
        gap: 0.6rem 0.3rem;
    }

    .pass-card,
    .resource-card,
    .invocation-card {
        padding: 0.6rem;
    }

    .compiled-order {
        grid-template-columns: minmax(0, 1fr);
        gap: 0.5rem;
    }

    .order-link {
        justify-content: center;
    }

    .invocation-card dl > div {
        grid-template-columns: minmax(0, 1fr);
        gap: 0.15rem;
    }
}
</style>
