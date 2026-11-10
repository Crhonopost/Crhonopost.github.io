<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const commands = [
    { name: 'setProgram', argument: 'PBR', state: 'program' },
    { name: 'setUniform', argument: 'model', state: 'uniform' },
    { name: 'attachTexture', argument: 'albedo', state: 'texture' },
    { name: 'draw', argument: 'mesh', state: 'draw' },
]
</script>

<template>
    <figure class="panel panel--inset command-diagram">
        <div class="command-heading">
            <strong>{{ t('projects.engine.command_diagram.queue') }}</strong>
            <span aria-hidden="true"></span>
            <strong>{{ t('projects.engine.command_diagram.state') }}</strong>
        </div>
        <ol class="command-queue">
            <li v-for="(command, index) in commands" :key="command.name">
                <div class="panel panel--frame command-operation">
                    <span class="command-index" aria-hidden="true">{{ index + 1 }}</span>
                    <code>{{ command.name }}<wbr />({{ command.argument }})</code>
                </div>
                <span class="command-arrow" aria-hidden="true">→</span>
                <div class="command-state" :class="{ 'command-state--draw': command.state === 'draw' }">
                    {{ t(`projects.engine.command_diagram.${command.state}`) }}
                </div>
            </li>
        </ol>
        <figcaption>{{ t('projects.engine.command_diagram.caption') }}</figcaption>
    </figure>
</template>

<style scoped>
.command-diagram {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 0;
    margin: 0;
}

.command-heading,
.command-queue > li {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 2rem minmax(0, 1fr);
    align-items: center;
}

.command-heading strong {
    font-size: 0.85rem;
    font-weight: 600;
}

.command-queue {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.command-operation,
.command-state {
    padding: 0.55rem 0.75rem;
    font-size: 0.85rem;
    line-height: 1.5;
}

.command-operation {
    display: flex;
    align-items: baseline;
    gap: 0.65rem;
}

.command-operation code {
    min-width: 0;
    overflow-wrap: anywhere;
}

.command-index {
    color: var(--color-accent);
    font-size: 0.75rem;
    font-variant-numeric: tabular-nums;
}

.command-arrow {
    text-align: center;
    color: var(--color-accent);
}

.command-state {
    align-self: stretch;
    display: flex;
    align-items: center;
    border-inline-start: var(--panel-border-width) dashed var(--panel-border-active-color);
    background: var(--panel-background);
}

.command-state--draw {
    border-inline-start-style: solid;
    border-inline-start-color: var(--color-accent);
    font-weight: 600;
}

.command-diagram figcaption {
    font-size: 0.85rem;
    line-height: 1.5;
}

@media (max-width: 700px) {
    .command-diagram {
        padding: 0.75rem;
    }

    .command-heading,
    .command-queue > li {
        grid-template-columns: minmax(0, 1fr) 1.25rem minmax(0, 1fr);
    }

    .command-operation,
    .command-state {
        padding: 0.5rem;
        font-size: 0.75rem;
    }

    .command-operation {
        gap: 0.4rem;
    }
}

@media (max-width: 400px) {
    .command-heading,
    .command-queue > li {
        grid-template-columns: minmax(0, 1.25fr) 1rem minmax(0, 1fr);
    }

    .command-index {
        display: none;
    }
}
</style>
