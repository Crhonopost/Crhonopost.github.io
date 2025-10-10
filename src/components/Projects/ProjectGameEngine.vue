<script lang="ts" setup>
import ProjectSummary from '@/components/Projects/ProjectSummary.vue'
</script>

<template>
    <ProjectSummary
        title="Star Engine"
        context="During the second semester of my first year of master's degree in Imagine at the
                Faculty of Sciences, I worked on a game engine project. Being passionate about video
                game creation, it was an excellent experience. Limited by the submission date, there
                is still much to add."
        :technologies="['C++', 'OpenGL', 'GLSL', 'ImGUI']"
        :links="[{ url: 'https://github.com/Crhonopost/Star-engine', name: 'Github' }]"
    >
        <div class="project_learning">
            <h2>Learning</h2>
            <p>
                My objective was to implement the most general-purpose engine possible, drawing
                inspiration from what has been done in the Godot engine in challenging situations.
                This project provided an opportunity to implement an entity-component system for
                managing entities within scenes. The engine integrates PBR (physically based
                rendering), a concise editor for quick debugging (which I am currently reworking),
                and a physics management system (collision detection between different shapes: AABB,
                OOBB, sphere, plane, ray) to integrate forces with a position resolution phase. The
                engine also includes a nearly functional solution for managing animations.
            </p>
        </div>
        <div class="project_next_steps">
            <h2>Next Steps</h2>
            <p>
                As it was my first big and complex C++ project, I need to start a new engine from
                scratch as I learned a lot from the many mistakes I made. Among the tasks I plan to
                prioritize are:
            </p>
            <ul>
                <li>Write tools for logging, debugging, and profiling</li>
                <li>Decouple engine core features from the editor and runtime environments</li>
                <li>
                    Design renderer and physics modules to be highly modular and isolated, enabling
                    easier optimization
                </li>
                <li>
                    Introduce abstractions for window management and other subsystems to support
                    multiplatform development
                </li>
                <li>Enhance resource management for better performance and scalability</li>
                <li>Implement robust scene serialization and deserialization</li>
                <li>Add support for scripting languages (e.g., Lua)</li>
                <li>Redesign the animation system for flexibility and reliability</li>
                <li>Improve lighting, starting with proper shadow implementation</li>
            </ul>
        </div>
    </ProjectSummary>
</template>

<style>
@import url('@/components/Projects/style.css');
</style>
