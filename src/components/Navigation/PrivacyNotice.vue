<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
    useScope: 'local',
    messages: {
        fr: {
            privacy: 'Confidentialité',
            title: 'Confidentialité',
            close: 'Fermer',
            purpose: 'Par curiosité, j’utilise Umami pour savoir ce que les visiteurs consultent sur mon portfolio, sans chercher à les identifier.',
            hosting: 'Le suivi utilise les serveurs européens d’Umami. Les statistiques sont conservées au maximum 6 mois.',
            disable: 'Désactiver les statistiques',
            enable: 'Réactiver et recharger la page',
            storageWarning: 'Le navigateur ne permet pas de mémoriser ce changement. Une désactivation reste effective sur cette page, mais peut ne pas être conservée à la prochaine visite.',
            unavailable: 'Le réglage est indisponible pour le moment. Rechargez la page pour réessayer.',
        },
        en: {
            privacy: 'Privacy',
            title: 'Privacy',
            close: 'Close',
            purpose: 'Out of curiosity, I use Umami to see what visitors look at on my portfolio, without trying to identify them.',
            hosting: 'Tracking uses Umami’s European servers. Statistics are kept for up to 6 months.',
            disable: 'Disable statistics',
            enable: 'Re-enable and reload the page',
            storageWarning: 'Your browser cannot save this change. Disabling remains effective on this page, but the choice may not persist on your next visit.',
            unavailable: 'This setting is currently unavailable. Reload the page to try again.',
        },
    },
})

const dialog = ref<HTMLDialogElement | null>(null)
const disabled = ref(false)
const storageWarning = ref(false)
const unavailable = ref(false)

function refreshPreference() {
    disabled.value = window.portfolioAnalytics?.isDisabled() ?? false
}

function openNotice() {
    refreshPreference()
    dialog.value?.showModal()
}

function toggleStatistics() {
    const analytics = window.portfolioAnalytics
    if (!analytics) {
        unavailable.value = true
        return
    }
    const nextDisabled = !analytics.isDisabled()
    const saved = analytics.setDisabled(nextDisabled)
    refreshPreference()
    storageWarning.value = !saved
    unavailable.value = false
    // A tracker loaded with an opt-out may not have initialized its click listeners.
    if (!nextDisabled && saved) window.location.reload()
}

function onBackdropClick(event: MouseEvent) {
    if (event.target !== dialog.value || !dialog.value) return
    const rect = dialog.value.getBoundingClientRect()
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.value.close()
}

function onStorageChange(event: StorageEvent) {
    if (event.key === 'umami.disabled' || event.key === null) refreshPreference()
}

onMounted(() => {
    refreshPreference()
    window.addEventListener('storage', onStorageChange)
})
onUnmounted(() => window.removeEventListener('storage', onStorageChange))
</script>

<template>
    <div class="privacy-notice">
        <button type="button" class="privacy-link" aria-haspopup="dialog"
            aria-controls="privacy-dialog" @click="openNotice">{{ t('privacy') }}</button>
    </div>

    <Teleport to="body">
        <dialog id="privacy-dialog" ref="dialog" class="privacy-dialog"
            aria-labelledby="privacy-title" @click="onBackdropClick" @wheel.stop>
            <header class="privacy-heading">
                <h2 id="privacy-title">{{ t('title') }}</h2>
                <button type="button" class="button" @click="dialog?.close()">{{ t('close') }}</button>
            </header>
            <div class="privacy-copy">
                <p>{{ t('purpose') }}</p>
                <p>{{ t('hosting') }}</p>
            </div>
            <div class="privacy-controls">
                <button type="button" class="button" @click="toggleStatistics">
                    {{ t(disabled ? 'enable' : 'disable') }}
                </button>
                <p v-if="storageWarning" role="alert" class="privacy-footnote">{{ t('storageWarning') }}</p>
                <p v-if="unavailable" role="alert" class="privacy-footnote">{{ t('unavailable') }}</p>
            </div>
        </dialog>
    </Teleport>
</template>

<style scoped>
.privacy-notice {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
    margin-top: auto;
    padding-top: 0.75rem;
    max-width: 10rem;
    font-size: 0.75rem;
    line-height: 1.4;
    color: var(--color-text);
}

.privacy-link {
    padding: 0.4rem 0;
    border: 0;
    color: inherit;
    background: transparent;
    font: inherit;
    text-decoration: underline;
    text-underline-offset: 0.2em;
    cursor: pointer;
}

.privacy-link:focus-visible {
    outline: var(--focus-width) solid var(--color-accent);
    outline-offset: var(--focus-offset);
}

.privacy-dialog {
    position: fixed;
    inset: auto auto 1.25rem 1.25rem;
    margin: 0;
    width: min(26rem, calc(100vw - 2.5rem));
    max-width: none;
    max-height: calc(100dvh - 2.5rem);
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 1.25rem;
    border: var(--panel-border-width) solid var(--panel-border-color);
    border-radius: var(--panel-radius);
    color: var(--color-text);
    background: #152c25;
    font-family: var(--font-body);
}

.privacy-dialog::backdrop { background: rgb(0 0 0 / 35%); }

.privacy-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
}

.privacy-heading h2 { font-size: 1.1rem; font-weight: 600; }
.privacy-heading .button { flex-shrink: 0; }
.privacy-copy { display: grid; gap: 0.75rem; }
.privacy-dialog p { font-size: 0.9rem; text-align: left; }

.privacy-controls {
    display: grid;
    justify-items: start;
    gap: 0.75rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--panel-border-color);
}

.privacy-controls .privacy-footnote { font-size: 0.75rem; opacity: 0.85; }

@media (max-width: 700px) {
    .privacy-notice {
        flex: 0 0 100%;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        max-width: none;
        padding-top: 0.25rem;
    }

    .privacy-link { min-height: 44px; padding: 0.5rem 0.25rem; }

    .privacy-dialog {
        inset: auto 0.75rem max(0.75rem, env(safe-area-inset-bottom)) 0.75rem;
        width: auto;
        max-height: calc(100dvh - 2rem - env(safe-area-inset-bottom));
        padding: 1rem;
    }
}
</style>
