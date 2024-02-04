<template>
    <canvas ref="canva" width="1000" height="1000" style="position: fixed; left: 0px;"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const width = 1000
const height = 1000


const canva = ref(null)

let currentMouseLocation = {x: 0, y:0};
let lastMouseLocation = {x:0, y:0};
let leftClickPressed = false;

addEventListener("mousemove", (event) => {
    lastMouseLocation = currentMouseLocation
    currentMouseLocation = {x: event.clientX / width, y: event.clientY / height}
});

addEventListener("mousedown", (event) => {
    if(event.button == 0){
        leftClickPressed = true
    }
})
addEventListener("mouseup", (event) => {
    if(event.button == 0){
        leftClickPressed = false
    }
})

const jacobiFunc = `
vec4 jacobi(
        vec2 pixelDiff, 
        float alpha, 
        float rBeta, 
        sampler2D x, 
        sampler2D b
        ) {
        vec4 up = texture2D(x, uv - vec2(0., pixelDiff.y));
        vec4 down = texture2D(x, uv + vec2(0., pixelDiff.y));
        vec4 left = texture2D(x, uv - vec2(pixelDiff.x, 0.));
        vec4 right = texture2D(x, uv + vec2(pixelDiff.x, 0.));

        vec4 bC = texture2D(b, uv);

        return (up + down + left + right + alpha * bC) * rBeta;
    }`

const texBilInterp = `
vec4 texBilInterp(sampler2D tex, vec2 pos){
        vec2 pixelDiff = 1./resolution;

        vec2 blend = fract(pos * resolution);

        vec2 upperLeft = pos - (pixelDiff * 0.5); // upper left coord if pos is center of square


        vec4 x1 = texture2D(tex, upperLeft + vec2(0., 0.));
        vec4 x2 = texture2D(tex, upperLeft + vec2(pixelDiff.x, 0.));
        vec4 y1 = texture2D(tex, upperLeft + vec2(0., pixelDiff.y));
        vec4 y2 = texture2D(tex, upperLeft + vec2(pixelDiff.x, pixelDiff.y));

        vec4 x = mix(x1, x2, blend.x);
        vec4 y = mix(y1, y2, blend.x);

        return mix(x, y, blend.y);
    }`

const textNice = `
vec4 textureNice( sampler2D sam, vec2 uv )
{
    float textureResolution = resolution.x;
    uv = uv*textureResolution + 0.5;
    vec2 iuv = floor( uv );
    vec2 fuv = fract( uv );
    uv = iuv + fuv*fuv*(3.0-2.0*fuv);
    uv = (uv - 0.5)/textureResolution;
    return texture2D( sam, uv );
}`

onMounted(() => {
    let jacobiIterationCount = 0
    let maxJacobiCount = 50;

    const regl = require('regl')({
        extensions: ['OES_texture_float', 'WEBGL_color_buffer_float'],
        canvas: canva.value
    })

    let prevTime = 0;


    const RADIUS = 512
    const INITIAL_CONDITIONS = (Array(RADIUS * RADIUS * 4)).fill(0).map(
    () => Math.random() > 0.9 ? 255 : 0)

    const pressure = (Array(3)).fill(0).map(() =>
    regl.framebuffer({
        color: regl.texture({
            radius: RADIUS,
            data: INITIAL_CONDITIONS,
            wrap: 'repeat'
            }),
        depthStencil: false
    }))

    const jacobiVectors = (Array(2)).fill(0).map(() =>
    regl.framebuffer({
        color: regl.texture({
            radius: RADIUS,
            data: (Array(RADIUS * RADIUS * 4)).fill(0),
            wrap: 'repeat'
            }),
        depthStencil: false
    }))

    const jacobiPressure = (Array(2)).fill(0).map(() =>
    regl.framebuffer({
        color: regl.texture({
            radius: RADIUS,
            data: (Array(RADIUS * RADIUS * 4)).fill(0),
            wrap: 'repeat'
            }),
        depthStencil: false
    }))

    const vecData = (Array(RADIUS * RADIUS * 4)).fill(0);

    const vectors = (Array(3)).fill(0).map(() =>
    regl.framebuffer({
        color: regl.texture({
            radius: RADIUS,
            data: vecData,
            wrap: 'repeat',
            type: 'float32'
        }),
        depthStencil: false
    }))


    const updateVectorField = regl({
        frag: `
        precision highp float;
        uniform sampler2D prevVector;
        uniform vec2 resolution;
        uniform float delta;
        uniform float viscosity;
        uniform vec2 addVectorLocation;
        uniform vec2 addVectorForce;
        uniform int leftClick;
        uniform float vectorStrength;
        varying vec2 uv;

        ${textNice}

        vec4 advection() {
            vec2 vector = texture2D(prevVector, uv).xy * delta * vectorStrength;

            return textureNice(prevVector, uv - vector);
        }

        void main(){
            vec2 pixelDiff = 1./resolution;
            vec2 vector = vec2(0.);

            if(length(uv - addVectorLocation) < 0.05
                && leftClick > 0){
                vector = addVectorForce;
            }else {
                vector = advection().xy;
            }
            
            gl_FragColor = vec4(vector, 0., 0.);
        }`,
        uniforms: {
            addVectorLocation: () => [currentMouseLocation.x, 
                                1 - currentMouseLocation.y],
            addVectorForce: () => [(currentMouseLocation.x - lastMouseLocation.x),
                                    (lastMouseLocation.y - currentMouseLocation.y)],
            leftClick: () => leftClickPressed ? 1 : 0
        }
        ,
        framebuffer: ({tick}: {tick: number}) => vectors[2],
    })

    const updatePressure = regl({
    frag: `
    precision highp float;
    uniform sampler2D prevPressure;
    uniform sampler2D prevVector;
    uniform vec2 resolution;
    uniform float delta;
    uniform float viscosity;
    uniform float vectorStrength;
    varying vec2 uv;

    ${textNice}

    vec4 advection() {
        vec2 vector = texture2D(prevVector, uv).xy * delta * vectorStrength;

        return textureNice(prevPressure, uv - vector);
    }
    
    void main() {
        vec2 pixelDiff = 1. / resolution;

        vec4 newPressure = advection();

        gl_FragColor = newPressure;
    }`,

    framebuffer: ({tick}: {tick: number}) => pressure[2]
    })

    const viciousVectorsDiffusion = regl({
        frag: `
    precision highp float;
    uniform sampler2D prevVector;
    uniform sampler2D iterationVector;

    uniform vec2 resolution;
    uniform float delta;
    uniform float viscosity;
    varying vec2 uv;
    
    ${jacobiFunc}
    
    void main() {
        vec2 pixelDiff = 1. / resolution;

        float alpha = (viscosity * viscosity) / delta;
        float rBeta = 1. / (4. + alpha);


        vec2 vector = jacobi(pixelDiff, alpha, rBeta, prevVector, iterationVector).xy;
        gl_FragColor = vec4(vector, 0., 0.);
    }`,

    framebuffer: ({tick}: {tick: number}) => {
        if(jacobiIterationCount === maxJacobiCount){
            return vectors[(tick + 1) % 2]
        }
        else {
            return jacobiVectors[jacobiIterationCount % 2]
        }
    },
    uniforms: {
        iterationVector: ({tick}: {tick: number}) => {
            return jacobiVectors[(jacobiIterationCount + 1) % 2]
        },
        prevVector: () => vectors[2]
    }
    })

    const viciousPressureDiffusion = regl({
        frag: `
    precision highp float;
    uniform sampler2D prevPressure;
    uniform sampler2D iterationPressure;

    uniform vec2 resolution;
    uniform float delta;
    uniform float viscosity;
    varying vec2 uv;
    
    ${jacobiFunc}
    
    void main() {
        vec2 pixelDiff = 1. / resolution;

        float alpha = (viscosity * viscosity) / delta;
        float rBeta = 1. / (4. + alpha);


        gl_FragColor = jacobi(pixelDiff, alpha, rBeta, iterationPressure, prevPressure);
    }`,

    framebuffer: ({tick}: {tick: number}) => {
        if(jacobiIterationCount === maxJacobiCount){
            return pressure[(tick + 1) % 2]
        }
        else {
            return jacobiPressure[jacobiIterationCount % 2]
        }
    },
    uniforms: {
        iterationPressure: ({tick}: {tick: number}) => {
            return jacobiPressure[(jacobiIterationCount + 1) % 2]
        },
        prevPressure: () => pressure[2]
    }
    })

    const setupQuad = regl({
    vert: `
    precision mediump float;
    attribute vec2 position;
    varying vec2 uv;
    void main() {
        uv = 0.5 * (position + 1.);
        gl_Position = vec4(position, 0, 1);
    }`,

    frag: `
    precision mediump float;
    uniform sampler2D prevPressure;
    uniform sampler2D prevVector;
    uniform vec2 resolution;
    uniform float delta;
    uniform float vectorStrength;
    varying vec2 uv;
    void main() {
        // vec3 state = texture2D(prevVector, uv).rgb;
        // gl_FragColor = vec4(state.xy * 10., 0, 1.);
        vec3 state = texture2D(prevPressure, uv).rgb;
        gl_FragColor = vec4(vec3(state.r), 1);
    }`,


    attributes: {
        position: [ -4, -4, 4, -4, 0, 4 ]
    },

    uniforms: {
        prevPressure: ({tick}: {tick: number}) => pressure[tick % 2],
        prevVector: ({tick}: {tick: number}) => vectors[tick % 2],
        delta: ({time}: {time: number}) => {
            let tempPrevTime = prevTime;
            prevTime = time;
            return time - tempPrevTime;
        },
        resolution: [800, 800],
        viscosity: .15,
        vectorStrength: 100,
    },

    depth: { enable: false },

    count: 3
    })

    regl.frame(() => {
        setupQuad(() => {
            regl.draw()
            updatePressure()
            updateVectorField()
            while(jacobiIterationCount <= maxJacobiCount){
                viciousVectorsDiffusion()
                viciousPressureDiffusion()
                jacobiIterationCount ++
            }
            jacobiIterationCount = 0
        })
    })
})


</script>