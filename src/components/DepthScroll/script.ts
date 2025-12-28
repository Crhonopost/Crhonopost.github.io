import { appStore } from '@/store/appStore'

const jumpDistance = 1000

export function initComponent() {

    function moveOneSlide(direction: 'f' | 'b') {
        let scrollPos = appStore.currentSlide
        scrollPos += direction === 'f' ? 1 : -1
        scrollPos = Math.max(0, scrollPos)
        appStore.setSlide(scrollPos)
    }

    function moveToSlide(position: number) {
        const nbSlides = document.querySelector('.scene')?.childElementCount || 0

        let scrollPos = position
        scrollPos = Math.min(Math.max(0, scrollPos), nbSlides)
        appStore.setSlide(scrollPos)
    }

    window.addEventListener('popstate', (event) => {
        if (event.state && typeof event.state.page === 'number') {
            appStore.setSlide(event.state.page)
        }
    })

    function getStyle(index: number) {
        const z = (index - appStore.currentSlide) * jumpDistance // simulated depth
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
        const scrollBackward = scrollDirection === 'b'
        if(scrollBackward){
            const projectSelected = appStore.selectedProject !== -1
            return appStore.currentSlide > 0 && !(appStore.currentSlide === 1 && !projectSelected)
        } else {
            return appStore.currentSlide + 1 < appStore.slidesCount
        }
    }

    function canScrollTo(position: number) {
        const projectSelected = appStore.selectedProject !== -1
        if(position < appStore.currentSlide){
            return position >= 0 && !(position === 0 && !projectSelected)
        } else {
            return position < appStore.slidesCount
        }
    }

    return {canScroll, canScrollTo, moveOneSlide, moveToSlide, getStyle }
}
