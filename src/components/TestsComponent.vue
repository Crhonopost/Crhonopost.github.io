<template>
    <canvas ref="canva" width="800" height="800"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';


const canva = ref(null)

onMounted(() => {
    const regl = require('regl')(canva.value)

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

    const vectors = (Array(2)).fill(0).map(() =>
    regl.framebuffer({
        color: regl.texture({
        radius: RADIUS,
        data: INITIAL_CONDITIONS,
        wrap: 'repeat'
        }),
        depthStencil: false
    }))


    const updateVectorField = regl({
        frag: `
        precision highp float;
        uniform sampler2D prevVector;
        uniform vec2 resolution;
        varying vec2 uv;

        // vec2 translateToVector(vec2 vector){
        //     return vector + vec2(0.5,0.5);
        // }

        void main(){
            if(uv.x > 0.45 && uv.x < 0.55 && 
            uv.y > 0.49 && uv.y < 0.51){
                vec2 vector = vec2(0.1, 0.);
                gl_FragColor = vec4(vector, 0., 0.);
            }
        }`,
        framebuffer: ({tick}: {tick: number}) => vectors[(tick + 1) % 2],
    })

    const updatePressure = regl({
    frag: `
    precision highp float;
    uniform sampler2D prevPressure;
    uniform sampler2D prevVector;
    uniform vec2 resolution;
    uniform float delta;
    varying vec2 uv;

    vec4 lerp(vec4 from, vec4 to, float delta){
        return from + (to - from) * delta;
    }

    vec2 translateFromVector(vec2 vector){
        return (vector * 2.) - 1.;
    }

    vec4 advection() {
        vec2 vector = texture2D(prevVector, uv).xy * delta;

        vector = translateFromVector(vector);

        return texture2D(prevPressure, uv - vector);
    }
    
    vec4 diffusion(vec2 pixelDiff, vec4 currentPressure) {
        vec4 up = texture2D(prevPressure, vec2(uv.x, uv.y - pixelDiff.y));
        vec4 down = texture2D(prevPressure, vec2(uv.x, uv.y + pixelDiff.y));
        vec4 left = texture2D(prevPressure, vec2(uv.x - pixelDiff.x, uv.y));
        vec4 right = texture2D(prevPressure, vec2(uv.x + pixelDiff.x, uv.y));

        vec4 average = (up + down + left + right) / 4.;

        return lerp(currentPressure, average, delta * 10.);
    }
    
    void main() {
        vec2 pixelDiff = 1. / resolution;

        vec4 newPressure = advection();

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
        resolution: [800, 800]
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