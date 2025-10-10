import { ref } from 'vue'

const jumpDistance = 1000

export function initComponent() {
    const scrollPosition = ref(0)

    function moveOneSlide(direction: 'f' | 'b') {
        scrollPosition.value += direction === 'f' ? jumpDistance : -jumpDistance
        scrollPosition.value = Math.max(0, scrollPosition.value)
    }

    function getStyle(index: number) {
        const z = index * jumpDistance - scrollPosition.value // simulated depth
        const scale = 1 - z / (jumpDistance * 2)
        const horizonFactor = 0.1 // adjust this for how high the horizon is (0 = center, 1 = top)

        let opacity = 1
        const zNear = -100
        if (z < zNear) {
            const distanceFromZNear = zNear - z
            opacity = Math.max(0, 1 - distanceFromZNear / 100)
        } else if (z > 500) {
            opacity = Math.max(0, 1 - (z - 500) / 200)
        }

        return {
            transform: `
                translate(-50%, -50%)
                translateY(${-z * horizonFactor}px)
                translateZ(${-z}px)
                scale(${scale})
            `,
            opacity,
            zIndex: index,
        }
    }

    function canScroll(scrollDirection: 'f' | 'b') {
        const nbSlides = document.querySelector('.scene')?.childElementCount || 0
        const maxScroll = (nbSlides - 1) * jumpDistance
        const newScrollPosition = scrollPosition.value + (scrollDirection === 'f' ? jumpDistance : -jumpDistance);
        return newScrollPosition >= 0 && newScrollPosition <= maxScroll;
    }

    return { scrollPosition, canScroll, moveOneSlide, getStyle }
}
