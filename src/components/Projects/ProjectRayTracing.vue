<script setup lang="ts">
import ProjectSummary from './ProjectSummary.vue'
</script>

<template>
    <ProjectSummary
        title="Ray Tracing"
        context="During my first semester, I had the opportunity to work on the implementation of a simple ray tracer including an acceleration structure implementation. I worked on the implementation of ray tracing with ray-sphere, ray-plane, and ray-triangle collisions. The solution implements various effects such as refraction, reflection, and Beer-Lambert for lighting, as well as soft shadows. I also implemented a BVH as an acceleration structure to speed up the rendering of complex meshes."
        :technologies="['C++']"
        :links="[{ url: 'https://github.com/Crhonopost/Ray-tracing', name: 'Github' }]"
    >
    </ProjectSummary>
</template>

<style>
@import url('@/components/Projects/style.css');
</style>
