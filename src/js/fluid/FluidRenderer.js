const height = window.innerHeight;
const width = window.innerWidth;

const app = new PIXI.Application({ width: width, height: height });

// // on charge les shaders
const mainFragmentShader = document.getElementById('mainFragmentShader').innerHTML;
const diffusionShader = document.getElementById('diffusionShader').innerHTML;

document.body.appendChild(app.view);


// //2 buffers pour switch entre les deux pour que le shader itère sur son propre résultat
let bufferA = PIXI.RenderTexture.create({ width: width, height: height });
let bufferB = PIXI.RenderTexture.create({ width: width, height: height });


const mainFilter = new PIXI.Filter('', mainFragmentShader);
mainFilter.uniforms.iChannel = bufferB;

let diffusionFilter = new PIXI.Filter('', diffusionShader);
diffusionFilter.uniforms.iChannel = bufferA;

const spriteB = new PIXI.Sprite(bufferB);

let containerA = new PIXI.Container();
containerA.filterArea = new PIXI.Rectangle(0, 0, width, height);
containerA.filters = [diffusionFilter];

app.stage.filterArea = new PIXI.Rectangle(0, 0, width, height);
app.stage.filters = [mainFilter];


app.ticker.add((delta) => {
    app.renderer.render(containerA, bufferB);
    app.renderer.render(spriteB, bufferA);

    mainFilter.uniforms.iChannel = bufferB;
});