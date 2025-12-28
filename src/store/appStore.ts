import { reactive } from 'vue'

export interface AppStore {
    currentSlide: number
    projectsCount: number
    selectedProject: number
    setSlide: (n: number) => void
    setProjectsCount: (n: number) => void
    setSelectedProject: (n: number) => void
}

export const appStore = reactive<AppStore>({
    currentSlide: 1,
    projectsCount: 0,
    selectedProject: -1,
    slidesCount: 0,
    setSlidesCount(n: number) {
        this.slidesCount = n
    },
    setSlide(n: number) {
        this.currentSlide = n
    },
    setProjectsCount(n: number) {
        this.projectsCount = n
    },
    setSelectedProject(n: number) {
        this.selectedProject = n
    },
})

export default appStore
