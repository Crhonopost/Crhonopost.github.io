<script setup lang="ts">
import ProjectSummary from './ProjectSummary.vue'
import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import ProjectSection from './ProjectSection.vue'

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
        <ProjectSection
            title="Ray tracing"
            desc="During my first semester, I had the opportunity to work on the implementation of
            a simple ray tracer including an acceleration structure implementation. I worked
            on the implementation of ray tracing with ray-sphere, ray-plane, and
            ray-triangle collisions. The solution implements various effects such as
            refraction, reflection, and Beer-Lambert for lighting, as well as soft shadows.
            I also implemented a BVH as an acceleration structure to speed up the rendering
            of complex meshes."
            image-path="/projects/raytracing/refraction.png"
            image-alt="Refraction test"
            :image-first="false"
        />

        <ProjectSection
            title="Volume rendering"
            desc="This project was an opportunity to discover different approaches to modeling
            (from noise, using particles) as well as rendering (using impostors to visualize
            particles, ray marching of a volume). I also had the opportunity to experiment
            with the geometry shader and compute shaders to minimize CPU-GPU communication
            in order to render particles efficiently."
            image-path="/projects/TER/moving_cloud.gif"
            image-alt="Animated cloud"
            :image-first="true"
        />
    </ProjectSummary>
</template>
