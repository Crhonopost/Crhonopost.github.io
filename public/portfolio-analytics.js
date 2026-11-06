// Loaded before Umami: enrich its request payload without changing the address bar.
(() => {
    const channels = new Map([
        ['linkedin', { source: 'linkedin', medium: 'social', campaign: 'portfolio' }],
        ['github', { source: 'github', medium: 'social', campaign: 'portfolio' }],
        ['cv', { source: 'cv', medium: 'pdf', campaign: 'portfolio', content: 'cv' }],
        ['cv-linkedin', { source: 'linkedin', medium: 'pdf', campaign: 'stage', content: 'cv' }],
        ['cv-candidature', { source: 'candidature', medium: 'pdf', campaign: 'stage', content: 'cv' }],
    ])

    window.portfolioBeforeSend = (type, payload) => {
        if (type !== 'event' || typeof payload?.url !== 'string') return payload

        let url
        try {
            url = new URL(payload.url, window.location.origin)
        } catch {
            return payload
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
