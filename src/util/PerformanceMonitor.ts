export class PerformanceMonitor {
    private fps = 0
    private frameCount = 0
    private lastTime = performance.now()
    private fpsUpdateInterval = 500
    private lastFpsUpdate = 0
    private callbacks: ((fps: number) => void)[] = []

    constructor(private enabled: boolean = true) {
        if (enabled) {
            this.startMonitoring()
        }
    }

    private startMonitoring() {
        const measureFPS = (currentTime: number) => {
            this.frameCount++
            
            if (currentTime - this.lastFpsUpdate >= this.fpsUpdateInterval) {
                this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastFpsUpdate))
                this.frameCount = 0
                this.lastFpsUpdate = currentTime
                
                this.callbacks.forEach(callback => callback(this.fps))
            }
            
            this.lastTime = currentTime
            requestAnimationFrame(measureFPS)
        }
        
        requestAnimationFrame(measureFPS)
    }

    onFPSUpdate(callback: (fps: number) => void) {
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