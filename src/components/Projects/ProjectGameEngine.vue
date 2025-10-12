<script lang="ts" setup>
import ProjectSummary from '@/components/Projects/ProjectSummary.vue'
import CarousselComponent from '../CarousselComponent.vue'
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
        <div class="project_section">
            <div>
                <h2>Learning</h2>
                <p>
                    My goal was to build a general purpose game engine. Through this project, I
                    implemented an <strong>Entity-Component System</strong>,
                    <strong>PBR rendering</strong>, a lightweight <strong>editor</strong> for
                    debugging, and an early <strong>physics system</strong> handling collisions
                    (AABB, OBB, spheres, planes, rays, and rigid bodies collision reactions). It was
                    my first large-scale C++ project — a challenging but extremely rewarding
                    experience.
                </p>

                <CarousselComponent
                    :images="[
                        './projects/gameengine/main_scene.png',
                        './projects/gameengine/init.gif',
                        './projects/gameengine/moving.gif',
                    ]"
                    class="caroussel"
                />
            </div>
        </div>

        <div class="project_section">
            <div>
                <h2>Next Steps</h2>
                <p>
                    The first version taught me a lot — enough to start fresh with a cleaner
                    foundation. The upcoming V2 focuses on a stronger architecture that gives me
                    more flexibility for experimentation. This second iteration takes inspiration
                    from Godot’s design, emphasizing inheritance and composition over a pure ECS
                    approach.
                </p>
                <ul>
                    <li>Independent renderer exposing a clear API</li>
                    <li>Better resource and scene serialization management</li>
                    <li>Improved logging and debugging tools</li>
                    <li>Physics rework and scripting support</li>
                    <li>Global illumination with light probes</li>
                </ul>

                <p>
                    Below is a preview of the new editor interface, built on a more structured
                    architecture. Next goal: global illumination implementation
                </p>
            </div>

            <img
                id="new_editor"
                src="/projects/gameengine/new_editor.png"
                alt="New editor interface"
            />
        </div>
    </ProjectSummary>
</template>

<style>
@import url('@/components/Projects/style.css');

#new_editor {
    width: 80%;
    object-fit: cover;
    object-position: left;
    border-radius: 15px;
}

.project_section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project_section > div {
    width: 80%;
}
</style>
