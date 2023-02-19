let canva = document.querySelector("canvas");
let ctx = canva.getContext('2d');
const fps = document.getElementById("fps");


let rowNum = 50;
let colNum = 50;

let dimmensionX = canva.width;
let dimmensionY = canva.height;

let viscosity = 10.5;

let p = [];
for(let i=0; i<rowNum; i++){
    let l = [];
    for(let j=0; j<colNum; j++){
        l.push(0);
    }
    p.push(l);
}

// Gauss seidel method to resolve density diffusion
function densityDiffusion(p0, viscosity, iteration, delta){
    let p = p0;

    for(let i=0; i<iteration; i++){
        for(let y=1; y<p.length-1; y++){
            for(let x=1; x<p[y].length-1; x++){
                let surrounding = (p[y-1][x] + p[y][x-1] + p[y+1][x] + p[y][x+1]) / 4;

                let k = surrounding * delta;

                p[y][x] = (p0[y][x] + k * surrounding) / (1+k);
            }
        }
    }

    return p;
}

function updateCanva(p){
    let cellSize = [dimmensionX/colNum, dimmensionY/rowNum];

    ctx = canva.getContext("2d");
    for(let y=0; y<p.length; y++){
        for(let x=0; x<p[y].length; x++){
            let color = `rgba(255,255,255, ${p[y][x]})`;
            ctx.fillStyle = color;

            ctx.fillRect(x * cellSize[0], y * cellSize[1], cellSize[0], cellSize[1]);
        }
    }
}

let previousTime = performance.now();
function frame(){
    let currentTime = performance.now();
    let delta = (currentTime - previousTime) / (1000*60);

    p = densityDiffusion(p, viscosity, 10, delta);

    updateCanva(p);
    fps.innerHTML = delta;
    previousTime = currentTime;
    setTimeout(frame, 100);
}


document.body.addEventListener("click", function() {
    p[20][20] = 1;
})