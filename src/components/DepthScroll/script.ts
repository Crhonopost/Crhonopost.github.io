const jumpDistance = 1000

export function getStyle(index: number, activeIndex: number) {
    const z = (index - activeIndex) * jumpDistance
    const scale = Math.max(0.5, 1 - z / (jumpDistance * 2))
    const horizonFactor = 0.1

    let opacity = 1
    if (z < -100) {
        opacity = Math.max(0, 1 - (-100 - z) / 100)
    } else if (z > 500) {
        opacity = Math.max(0, 1 - (z - 500) / 200)
    }

    return {
        transform: `translate(-50%, -50%) translateY(${-z * horizonFactor}px) translateZ(${-z}px) scale(${scale})`,
        opacity,
        zIndex: index,
    }
}
