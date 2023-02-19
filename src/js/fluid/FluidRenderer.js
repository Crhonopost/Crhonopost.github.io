class FluidRenderer{
    constructor(fpsTarget, canva){
        this.fpsTarget = fpsTarget
        this.deltaTarget = 1000/fpsTarget;
        this.ctx = canva.getContext('webgl');
        this.ctx.clearColor(0,0,0,1);
        this.ctx.clear(this.ctx.COLOR_BUFFER_BIT | this.ctx.DEPTH_BUFFER_BIT);
    }

    start(){
        this.previousTime = performance.now();
    }

    run(){
        let currentTime = performance.now();
        let delta = (currentTime - previousTime) / (1000*60); // pas sur

        updateCanva(p);
        previousTime = currentTime;
        setTimeout(run, this.deltaTarget);
    }
}