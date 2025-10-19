<script setup lang="ts">
const SYMBOL_NAMES = [
    'arrow_drop_down',
    'arrow_drop_up',
    'colorize',
    'unfold_more_double',
    'language',
] as const
type SymbolName = (typeof SYMBOL_NAMES)[number]

function isSymbol(name: string): name is SymbolName {
    return SYMBOL_NAMES.includes(name as SymbolName)
}

withDefaults(defineProps<{ content: SymbolName | string; disable: boolean }>(), { disable: false })
</script>

<template>
    <div class="button glass" :class="disable ? 'disable' : 'enable clickable'">
        <span v-if="isSymbol(content)" class="material-symbols-outlined">
            {{ content }}
        </span>
        <p v-else>
            {{ content }}
        </p>
    </div>
</template>

<style lang="css">
.button {
    border-radius: 30px;
    padding: 10px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: width 0.3s;

    user-select: none;
}

.enable:hover {
    background-color: var(--terciary-bg-color-t);
    transition: background-color 0.3s;
}

.disable {
    color: grey;
}
</style>
