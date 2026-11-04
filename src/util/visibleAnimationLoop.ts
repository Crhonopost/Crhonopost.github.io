interface AnimationLoopRenderer {
    setAnimationLoop(callback: ((time: number) => void) | null): void
}

export function startVisibleAnimationLoop(
    renderer: AnimationLoopRenderer,
    update: (delta: number) => void,
): () => void {
    let previousTime: number | undefined
    let disposed = false

    function animate(time: number) {
        if (disposed || document.hidden) return

        if (previousTime !== undefined) {
            // Keep a slow visible frame from becoming a large simulation jump.
            const delta = Math.min((time - previousTime) / 1000, 0.05)
            previousTime = time
            if (delta > 0) update(delta)
        } else {
            previousTime = time
        }
    }

    function updateVisibility() {
        previousTime = undefined
        renderer.setAnimationLoop(document.hidden ? null : animate)
    }

    document.addEventListener('visibilitychange', updateVisibility)
    updateVisibility()

    return () => {
        disposed = true
        document.removeEventListener('visibilitychange', updateVisibility)
        renderer.setAnimationLoop(null)
    }
}
