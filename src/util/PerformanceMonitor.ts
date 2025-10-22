export class PerformanceMonitor {
    private fps = 0
    private frameCount = 0
    private lastTime = performance.now()
    private fpsUpdateInterval = 500
    private lastFpsUpdate = 0
    private callbacks: ((fps: number, avgFps: number) => void)[] = []

    private fpsHistory: number[] = []
    private readonly historySize = 10 // 5 secondes (10 * 500ms)
    private averageFps = 60


    constructor(private enabled: boolean = true) {
        if (enabled) {
            this.startMonitoring()
        }
    }

    private startMonitoring() {
        const measureFPS = (currentTime: number) => {
            this.frameCount++
            
            if (currentTime - this.lastFpsUpdate >= this.fpsUpdateInterval) {
                const currentFps = Math.round((this.frameCount * 1000) / (currentTime - this.lastFpsUpdate))
                this.frameCount = 0
                this.lastFpsUpdate = currentTime

                this.updateFpsHistory(currentFps)
                this.fps = currentFps
                
                this.callbacks.forEach(callback => callback(this.fps, this.averageFps))
            }
            
            this.lastTime = currentTime
            requestAnimationFrame(measureFPS)
        }
        
        requestAnimationFrame(measureFPS)
    }

    private updateFpsHistory(currentFps: number) {
        this.fpsHistory.push(currentFps)
        
        if (this.fpsHistory.length > this.historySize) {
            this.fpsHistory.shift()

            this.averageFps = Math.round(
                this.fpsHistory.reduce((sum, fps) => sum + fps, 0) / this.fpsHistory.length
            )
        } else {
            this.averageFps = 120
        }
        
    }

    onFPSUpdate(callback: (fps: number, avgFps: number) => void) {
        this.callbacks.push(callback)
        return () => {
            const index = this.callbacks.indexOf(callback)
            if (index > -1) this.callbacks.splice(index, 1)
        }
    }

    getCurrentFPS(): number {
        return this.fps
    }

    dispose() {
        this.callbacks = []
    }
}

export const globalPerformanceMonitor = new PerformanceMonitor()