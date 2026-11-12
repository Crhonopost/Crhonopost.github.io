<script setup lang="ts">
import { useId } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const pipelineId = useId()
const passes = [
    { key: 'environment_conversion', x: 244, y: 90, width: 196, height: 88, name: 'conversion', notes: ['conversion_note'] },
    { key: 'irradiance_convolution', x: 380, y: 220, width: 190, height: 80, name: 'convolution', notes: ['convolution_note'] },
    { key: 'specular_prefilter', x: 676, y: 220, width: 190, height: 80, name: 'prefilter', notes: ['prefilter_note'] },
    { key: 'shadows', x: 38, y: 518, width: 188, height: 84, name: 'shadows', notes: ['shadows_note'] },
    { key: 'pbr', x: 38, y: 674, width: 188, height: 116, name: 'geometry', notes: ['opaque', 'transparent'] },
    { key: 'lighting', x: 582, y: 670, width: 210, height: 94, name: 'lighting', notes: ['lighting_note'] },
    { key: 'composition', x: 582, y: 900, width: 210, height: 82, name: 'composition', notes: ['composition_note'] },
]
const resources = [
    { key: 'equirectangular_hdr', x: 38, y: 106, width: 164, name: 'hdr' },
    { key: 'environment_cubemap', x: 484, y: 106, width: 180, name: 'cubemap' },
    { key: 'irradiance_map', x: 392, y: 334, width: 166, name: 'irradiance' },
    { key: 'specular_map', x: 688, y: 334, width: 166, name: 'specular' },
    { key: 'shadow_maps', x: 278, y: 534, width: 190, name: 'shadow_maps' },
    { key: 'lit_image', x: 602, y: 804, width: 170, name: 'lit_image' },
    { key: 'final_image', x: 850, y: 913, width: 206, name: 'final_image' },
]
const gbuffer = ['albedo', 'normals', 'materials', 'depth']
// Resource edges also connect passes whose invocations run outside the frame.
const edges = [
    { from: 'equirectangular_hdr', to: 'environment_conversion', path: 'M202 134 H244' },
    { from: 'environment_conversion', to: 'environment_cubemap', path: 'M440 134 H484', write: true },
    { from: 'environment_cubemap', to: 'irradiance_convolution', path: 'M574 162 V190 H475 V220' },
    { from: 'environment_cubemap', to: 'specular_prefilter', path: 'M574 162 V190 H771 V220' },
    { from: 'irradiance_convolution', to: 'irradiance_map', path: 'M475 300 V334', write: true },
    { from: 'specular_prefilter', to: 'specular_map', path: 'M771 300 V334', write: true },
    { from: 'irradiance_map', to: 'lighting', path: 'M475 390 V450 H628 V670', retained: true },
    { from: 'specular_map', to: 'lighting', path: 'M771 390 V472 H738 V670', retained: true },
    { from: 'environment_cubemap', to: 'composition', path: 'M664 134 H1080 V870 H688 V900', retained: true },
    { from: 'shadows', to: 'shadow_maps', path: 'M226 560 H278', write: true },
    { from: 'shadow_maps', to: 'lighting', path: 'M468 562 H540 V698 H582' },
    { from: 'pbr', to: 'gbuffer', path: 'M226 732 H278', write: true },
    { from: 'gbuffer', to: 'lighting', path: 'M488 732 H582' },
    { from: 'lighting', to: 'lit_image', path: 'M687 764 V804', write: true },
    { from: 'lit_image', to: 'composition', path: 'M687 860 V900' },
    { from: 'depth', to: 'composition', path: 'M488 786 H520 V941 H582' },
    { from: 'composition', to: 'final_image', path: 'M792 941 H850', write: true },
]
</script>

<template>
    <figure class="panel panel--inset engine-pipeline">
        <header class="pipeline-header">
            <strong class="graph-name">RenderGraph</strong>
            <div class="graph-legend" aria-hidden="true">
                <span class="legend-pass">{{ t('projects.engine.pipeline.graph.pass') }}</span>
                <span class="legend-resource">{{ t('projects.engine.pipeline.graph.resource') }}</span>
                <span><span class="write-arrow">→</span> {{ t('projects.engine.pipeline.graph.write') }}</span>
                <span>→ {{ t('projects.engine.pipeline.graph.read') }}</span>
            </div>
        </header>
        <div class="pipeline-viewport" tabindex="0" role="group" :aria-label="t('projects.engine.pipeline.graph.label')">
            <svg class="pipeline-graph" viewBox="0 0 1120 1000" role="img" :aria-labelledby="`${pipelineId}-title ${pipelineId}-description`">
                <title :id="`${pipelineId}-title`">{{ t('projects.engine.pipeline.graph.label') }}</title>
                <desc :id="`${pipelineId}-description`">{{ t('projects.engine.pipeline.graph.description') }}</desc>
                <defs>
                    <marker v-for="access in ['write', 'read']" :id="`${pipelineId}-${access}`" :key="access" viewBox="0 0 8 8" refX="8" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                        <path :class="`${access}-head`" d="M0 0 L8 4 L0 8 Z" />
                    </marker>
                </defs>

                <g class="graph-lanes" aria-hidden="true">
                    <rect class="graph-lane graph-lane--preparation" x="12" y="12" width="1096" height="396" rx="10" />
                    <text x="38" y="46" class="lane-title">{{ t('projects.engine.pipeline.graph.preparation') }}</text>
                    <text x="38" y="69" class="lane-note">{{ t('projects.engine.pipeline.graph.preparation_note') }}</text>
                    <rect class="graph-lane" x="12" y="428" width="1096" height="566" rx="10" />
                    <text x="38" y="462" class="lane-title">{{ t('projects.engine.pipeline.graph.frame') }}</text>
                    <text x="38" y="485" class="lane-note">{{ t('projects.engine.pipeline.graph.frame_note') }}</text>
                </g>

                <g aria-hidden="true">
                    <path v-for="edge in edges" :key="`${edge.from}-${edge.to}`"
                        class="graph-edge" :class="{ 'graph-edge--write': edge.write, 'graph-edge--retained': edge.retained }"
                        :data-from="edge.from" :data-to="edge.to" :d="edge.path"
                        :marker-end="`url(#${pipelineId}-${edge.write ? 'write' : 'read'})`" />
                    <text x="890" y="125" class="edge-label">Skybox</text>
                    <text x="530" y="884" class="edge-label">{{ t('projects.engine.pipeline.graph.depth') }}</text>
                </g>

                <g v-for="pass in passes" :key="pass.key" class="pass-node" :data-pass="pass.key" :transform="`translate(${pass.x} ${pass.y})`">
                    <title>{{ t(`projects.engine.pipeline.graph.${pass.name}_desc`) }}</title>
                    <rect :width="pass.width" :height="pass.height" rx="6" />
                    <text x="14" y="32" class="node-name">{{ t(`projects.engine.pipeline.graph.${pass.name}`) }}</text>
                    <text v-for="(note, index) in pass.notes" :key="note" x="14" :y="60 + index * 26" class="node-note">{{ t(`projects.engine.pipeline.graph.${note}`) }}</text>
                </g>
                <g v-for="resource in resources" :key="resource.key" class="resource-node" :data-resource="resource.key" :transform="`translate(${resource.x} ${resource.y})`">
                    <rect :width="resource.width" height="56" rx="5" />
                    <text :x="resource.width / 2" y="34" class="node-name" text-anchor="middle">{{ t(`projects.engine.pipeline.graph.${resource.name}`) }}</text>
                </g>
                <g class="resource-node gbuffer-node" data-resource="gbuffer" transform="translate(278 644)">
                    <rect width="210" height="172" rx="5" />
                    <text x="14" y="29" class="node-name">G-buffer</text>
                    <path d="M0 42 H210" />
                    <text v-for="(resource, index) in gbuffer" :key="resource" :data-resource="resource" x="14" :y="59 + index * 28" class="node-note">{{ t(`projects.engine.pipeline.graph.${resource}`) }}</text>
                </g>
            </svg>
        </div>
        <span class="pipeline-scroll-hint" aria-hidden="true">{{ t('projects.engine.pipeline.graph.scroll_hint') }} →</span>
        <figcaption>
            <p>{{ t('projects.engine.pipeline.caption') }}</p>
            <p>{{ t('projects.engine.pipeline.transparency_note') }}</p>
        </figcaption>
    </figure>
</template>

<style scoped>
.engine-pipeline {
    --graph-accent: color-mix(in srgb, var(--color-accent) 65%, var(--color-text));
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    margin: 0;
    padding: clamp(0.75rem, 2vw, 1.5rem);
    container-type: inline-size;
}

.pipeline-header,
.graph-legend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 0.85rem;
}

.pipeline-header {
    justify-content: space-between;
}

.graph-name {
    font-family: monospace;
    font-size: 1.05rem;
    font-weight: 600;
}

.graph-legend {
    font-size: 0.75rem;
}

.legend-pass,
.legend-resource {
    padding: 0.15rem 0.5rem;
    border: var(--panel-border-width) solid var(--graph-accent);
    border-radius: 4px;
}

.legend-pass {
    background: color-mix(in srgb, var(--color-accent) 8%, var(--panel-inset-background));
}

.legend-resource {
    border-color: var(--panel-border-active-color);
    border-style: dashed;
}

.write-arrow {
    color: var(--graph-accent);
}

.pipeline-viewport {
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    border-radius: 6px;
}

.pipeline-viewport:focus-visible {
    outline: var(--focus-width) solid currentColor;
    outline-offset: var(--focus-offset);
}

.pipeline-graph {
    display: block;
    width: 100%;
    min-width: 56rem;
    height: auto;
}

.graph-lane {
    fill: var(--panel-inset-background);
    stroke: var(--panel-border-color);
    vector-effect: non-scaling-stroke;
}

.graph-lane--preparation {
    fill: color-mix(in srgb, var(--color-accent) 3%, var(--panel-inset-background));
    stroke-dasharray: 6 5;
}

.graph-edge {
    fill: none;
    stroke: var(--color-text);
    stroke-width: 1.4;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
}

.graph-edge--write {
    stroke: var(--graph-accent);
}

.graph-edge--retained {
    stroke-dasharray: 6 4;
}

.write-head {
    fill: var(--graph-accent);
}

.read-head {
    fill: var(--color-text);
}

.pass-node rect {
    fill: color-mix(in srgb, var(--color-accent-deep) 14%, #172c29);
    stroke: var(--graph-accent);
    vector-effect: non-scaling-stroke;
}

.resource-node rect {
    fill: #203530;
    stroke: var(--panel-border-active-color);
    stroke-dasharray: 4 3;
    vector-effect: non-scaling-stroke;
}

.gbuffer-node path {
    stroke: var(--panel-border-color);
    vector-effect: non-scaling-stroke;
}

.pipeline-graph text {
    fill: var(--color-text);
}

.lane-title {
    font-size: 20px;
    font-weight: 600;
}

.pipeline-graph .lane-note {
    fill: var(--graph-accent);
    font-size: 15px;
}

.node-name {
    font-size: 17px;
    font-weight: 600;
}

.node-note,
.edge-label {
    font-size: 15px;
}

.pipeline-scroll-hint {
    display: none;
    font-size: 0.75rem;
}

.engine-pipeline figcaption {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 0.85rem;
    line-height: 1.6;
}

.engine-pipeline figcaption p {
    font-size: inherit;
    line-height: inherit;
    text-align: left;
}

@container (max-width: 56rem) {
    .pipeline-scroll-hint {
        display: block;
    }
}
</style>
