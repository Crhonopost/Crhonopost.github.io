// Loaded before Umami: enrich its request payload without changing the address bar.
(() => {
    const channels = new Map([
        ['linkedin', { source: 'linkedin', medium: 'social', campaign: 'portfolio' }],
        ['github', { source: 'github', medium: 'social', campaign: 'portfolio' }],
        ['cv', { source: 'cv', medium: 'pdf', campaign: 'portfolio', content: 'cv' }],
        ['cv-linkedin', { source: 'linkedin', medium: 'pdf', campaign: 'stage', content: 'cv' }],
        ['cv-candidature', { source: 'candidature', medium: 'pdf', campaign: 'stage', content: 'cv' }],
    ])
    let pageviewSent = false
    let disabledForThisPage = false

    function isDisabled() {
        if (disabledForThisPage) return true
        try {
            return Boolean(window.localStorage.getItem('umami.disabled'))
        } catch {
            return false
        }
    }

    window.portfolioAnalytics = {
        isDisabled,
        setDisabled(disabled) {
            // Keep an immediate opt-out even when browser storage is unavailable.
            disabledForThisPage = disabled
            try {
                if (disabled) window.localStorage.setItem('umami.disabled', '1')
                else window.localStorage.removeItem('umami.disabled')
                disabledForThisPage = false
                return true
            } catch {
                return false
            }
        },
    }

    window.portfolioBeforeSend = (type, payload) => {
        if (isDisabled()) return null
        if (type !== 'event' || typeof payload?.url !== 'string') return payload

        let url
        try {
            url = new URL(payload.url, window.location.origin)
        } catch {
            return payload
        }

        // The portfolio is one page: section changes should not create more pageviews.
        // Named click events remain independent of this per-document arrival count.
        if (!payload.name) {
            if (pageviewSent) return null
            pageviewSent = true
        }

        const channel = channels.get(url.searchParams.get('utm_source'))
        // Keep untagged visits and unfamiliar campaign links exactly as Umami received them.
        if (!channel) return payload

        url.searchParams.set('utm_source', channel.source)
        for (const key of ['medium', 'campaign', 'content']) {
            // Explicit UTM parameters in existing links take priority over these defaults.
            if (channel[key] && !url.searchParams.has(`utm_${key}`)) {
                url.searchParams.set(`utm_${key}`, channel[key])
            }
        }

        return {
            ...payload,
            url: /^https?:\/\//i.test(payload.url)
                ? url.href
                : `${url.pathname}${url.search}${url.hash}`,
        }
    }
})()
