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

onMounted(() => {
    const regl = require('regl')({
        extensions: ['OES_texture_float', 'WEBGL_color_buffer_float'],
        canvas: canva.value
    })

    let prevTime = 0;


    const RADIUS = 512
    const INITIAL_CONDITIONS = (Array(RADIUS * RADIUS * 4)).fill(0).map(
    () => Math.random() > 0.9 ? 255 : 0)

    const pressure = (Array(2)).fill(0).map(() =>
    regl.framebuffer({
        color: regl.texture({
            radius: RADIUS,
            data: INITIAL_CONDITIONS,
            wrap: 'repeat'
            }),
        depthStencil: false
    }))

    const vecData = (Array(RADIUS * RADIUS * 4)).fill(0);

    const vectors = (Array(2)).fill(0).map(() =>
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
        varying vec2 uv;

        vec2 diffuseVector(vec2 pixelDiff, vec2 currentVector){
            vec2 up = texture2D(prevVector, vec2(uv.x, uv.y - pixelDiff.y)).xy;
            vec2 down = texture2D(prevVector, vec2(uv.x, uv.y + pixelDiff.y)).xy;
            vec2 left = texture2D(prevVector, vec2(uv.x - pixelDiff.x, uv.y)).xy;
            vec2 right = texture2D(prevVector, vec2(uv.x + pixelDiff.x, uv.y)).xy;
        
            vec2 average = (up + down + left + right) / 4.;

            float k = delta * viscosity;

            return (average + currentVector * k) / (1. + k);
        }

        vec2 advection() {
            vec2 vector = texture2D(prevVector, uv).xy * delta;

            return texture2D(prevVector, uv - vector).xy;
        }

        void main(){
            vec2 pixelDiff = 1./resolution;
            vec2 vector = vec2(0.);

            if(length(uv - addVectorLocation) < 0.05
            && leftClick > 0){
                vector = addVectorForce;
            }
            else {
                vec2 currentVector = advection();
                vector = diffuseVector(pixelDiff, currentVector);
            }
            
            gl_FragColor = vec4(vector, 0., 0.);
        }`,
        uniforms: {
            addVectorLocation: () => [currentMouseLocation.x, 
                                1 - currentMouseLocation.y],
            addVectorForce: () => [(currentMouseLocation.x - lastMouseLocation.x) * 20,
                                    (lastMouseLocation.y - currentMouseLocation.y) * 20],
            leftClick: () => leftClickPressed ? 1 : 0
        }
        ,
        framebuffer: ({tick}: {tick: number}) => vectors[(tick + 1) % 2],
    })

    const updatePressure = regl({
    frag: `
    precision highp float;
    uniform sampler2D prevPressure;
    uniform sampler2D prevVector;
    uniform vec2 resolution;
    uniform float delta;
    uniform float viscosity;
    varying vec2 uv;

    vec4 lerp(vec4 from, vec4 to, float delta){
        return from + (to - from) * delta;
    }

    vec4 advection() {
        vec2 vector = texture2D(prevVector, uv).xy * delta;

        return texture2D(prevPressure, uv - vector);
    }
    
    vec4 diffusion(vec2 pixelDiff, vec4 currentPressure) {
        vec4 up = texture2D(prevPressure, vec2(uv.x, uv.y - pixelDiff.y));
        vec4 down = texture2D(prevPressure, vec2(uv.x, uv.y + pixelDiff.y));
        vec4 left = texture2D(prevPressure, vec2(uv.x - pixelDiff.x, uv.y));
        vec4 right = texture2D(prevPressure, vec2(uv.x + pixelDiff.x, uv.y));

        vec4 average = (up + down + left + right) / 4.;

        float k = delta * viscosity;

        return (currentPressure + k * average) / (1. + k);
    }
    
    void main() {
        vec2 pixelDiff = 1. / resolution;

        vec4 newPressure = advection();
        // vec4 newPressure = texture2D(prevPressure, uv);

        gl_FragColor = diffusion(pixelDiff, newPressure);
    }`,

    framebuffer: ({tick}: {tick: number}) => pressure[(tick + 1) % 2]
    })

    const setupQuad = regl({
    frag: `
    precision mediump float;
    uniform sampler2D prevPressure;
    uniform sampler2D prevVector;
    uniform vec2 resolution;
    uniform float delta;
    varying vec2 uv;
    void main() {
        float state = texture2D(prevPressure, uv).r;
        gl_FragColor = vec4(vec3(state), 1);
    }`,

    vert: `
    precision mediump float;
    attribute vec2 position;
    varying vec2 uv;
    void main() {
        uv = 0.5 * (position + 1.0);
        gl_Position = vec4(position, 0, 1);
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
        viscosity: .5
    },

    depth: { enable: false },

    count: 3
    })

    regl.frame(() => {
        setupQuad(() => {
            regl.draw()
            updatePressure()
            updateVectorField()
        })
    })
})


</script>