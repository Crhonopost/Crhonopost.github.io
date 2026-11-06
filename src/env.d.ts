declare module '*.glb' {
    const src: string
    export default src
}

interface Window {
    portfolioAnalytics?: {
        isDisabled(): boolean
        setDisabled(disabled: boolean): boolean
    }
}
