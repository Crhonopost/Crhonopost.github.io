<script setup lang="ts">
const SYMBOL_NAMES = [
    'arrow_drop_down',
    'arrow_drop_up',
    'colorize',
    'unfold_more_double',
    'language',
    'account_circle',
] as const
type SymbolName = (typeof SYMBOL_NAMES)[number]

function isSymbol(name: string): name is SymbolName {
    return SYMBOL_NAMES.includes(name as SymbolName)
}

withDefaults(defineProps<{ content: SymbolName | string; disable: boolean }>(), { disable: false })
</script>

<template>
    <div class="button button--round" :class="disable ? 'disable' : 'enable'">
        <span v-if="isSymbol(content)" class="material-symbols-outlined">
            {{ content }}
        </span>
        <p v-else>
            {{ content }}
        </p>
    </div>
</template>
