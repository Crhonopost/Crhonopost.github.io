<template>
    <canvas ref="canva" width="800" height="800"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';


const canva = ref(null)

onMounted(() => {
    const regl = require('regl')(canva.value)


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

    const updateLife = regl({
    frag: `
    precision mediump float;
    uniform sampler2D prevPressure;
    uniform vec2 resolution;
    varying vec2 uv;
    
    vec4 diffusion() {
        vec2 pixelDiff = 1. / resolution;
        vec4 up = texture2D(prevPressure, vec2(uv.x, uv.y - pixelDiff.y));
        vec4 down = texture2D(prevPressure, vec2(uv.x, uv.y + pixelDiff.y));
        vec4 left = texture2D(prevPressure, vec2(uv.x - pixelDiff.x, uv.y));
        vec4 right = texture2D(prevPressure, vec2(uv.x + pixelDiff.x, uv.y));

        return (up + down + left + right) / 4.;
    }
    
    void main() {
        gl_FragColor = diffusion();
    }`,

    framebuffer: ({tick}: {tick: number}) => pressure[(tick + 1) % 2]
    })

    const setupQuad = regl({
    frag: `
    precision mediump float;
    uniform sampler2D prevPressure;
    uniform vec2 resolution;
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
        resolution: [800, 800]
    },

    depth: { enable: false },

    count: 3
    })

    regl.frame(() => {
    setupQuad(() => {
        regl.draw()
        updateLife()
    })
    })
})


</script>