<script setup lang="ts">
import ProjectSummary from './ProjectSummary.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'

const { t } = useI18n()
</script>

<template>
    <ProjectSummary
        :title="capitalizeFirst(t('projects.rendering.title'))"
        context="In the context of my first year of master's degree, I had the opportunity to experiment on some rendering techniques.
        The first one being ray tracing (in deferred on the CPU) and the second being the render in real time of volumetric clouds with ray marching"
        :technologies="['C++', 'OpenGL', 'GLSL', 'ImGUI']"
        :links="[
            { url: 'https://github.com/TER-VOX/cloud', name: 'Volumetric clouds' },
            { url: 'https://github.com/Crhonopost/Ray-tracing', name: 'Ray tracing' },
        ]"
    >
        <div class="rendering-section row">
            <div class="column">
                <h2>Ray tracing</h2>
                <p>
                    During my first semester, I had the opportunity to work on the implementation of
                    a simple ray tracer including an acceleration structure implementation. I worked
                    on the implementation of ray tracing with ray-sphere, ray-plane, and
                    ray-triangle collisions. The solution implements various effects such as
                    refraction, reflection, and Beer-Lambert for lighting, as well as soft shadows.
                    I also implemented a BVH as an acceleration structure to speed up the rendering
                    of complex meshes.
                </p>
            </div>
            <img class="round" src="/projects/raytracing/refraction.png" alt="Refraction test" />
        </div>
        <div class="rendering-section row">
            <div>
                <img class="round" src="/projects/TER/moving_cloud.gif" alt="Animated cloud" />
            </div>
            <div class="column">
                <h2>Volume rendering</h2>
                <p>
                    This project was an opportunity to discover different approaches to modeling
                    (from noise, using particles) as well as rendering (using impostors to visualize
                    particles, ray marching of a volume). I also had the opportunity to experiment
                    with the geometry shader and compute shaders to minimize CPU-GPU communication
                    in order to render particles efficiently.
                </p>
            </div>
        </div>
    </ProjectSummary>
</template>

<style>
.rendering-section {
    width: 60%;
    margin: 20px;
}

.rendering-section .column {
    padding: 30px;
}

.rendering-section > div > * {
    flex: 1;
    height: 100%;
}

.rendering-section img {
    width: 300px;
    height: fit-content;
}
</style>
