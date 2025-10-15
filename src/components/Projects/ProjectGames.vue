<script setup lang="ts">
import CarousselComponent from '../CarousselComponent.vue'
import ProjectSummary from './ProjectSummary.vue'
</script>

<template>
    <ProjectSummary
        title="Games"
        context="As a hobby I love making games. Most of the times it is more about implementing an idea rather than creating a full game"
        :technologies="['Godot', 'C#', 'GDScript']"
        :links="[
            { url: 'https://ohhnyx.itch.io/dicecraft', name: 'Game jam contribution' },
            {
                url: 'https://github.com/Crhonopost/Behavior_tree_4.2',
                name: 'Godot behavior tree plugin',
            },
        ]"
    >
        <div>
            <h2>Behavior tree</h2>
            <p>
                I created a behavior tree plugin for Godot 4.2 mono, which is available on the Asset
                Library. It allows you to create complex AI behaviors in a visual way, making it
                easier to manage and understand the logic behind AI actions. The plugin is
                straightforward and does not have much optimization.
            </p>
            <a href="https://github.com/Crhonopost/Behavior_tree_4.2">Github link</a>
        </div>

        <div>
            <h2>Dicecraft</h2>
            <p>
                I participated in a game jam where, as a team of 3, we created a game called
                Dicecraft. The game is about crafting dice in order to manipulate randomness and
                maximize combos and units spawn quantities. The game lacks content and polish, but
                it was a fun project and the core mechanics are solid.
            </p>
            <a href="https://ohhnyx.itch.io/dicecraft">Game link</a>
        </div>
        <div>
            <h2>Other projects</h2>
            <p>
                I have worked on several other projects, but they act more as experiments or proofs
                of concept rather than full-fledged games. These projects include various mechanics
                from magic spells programming to 2D platformers about time control.
            </p>
        </div>

        <CarousselComponent
            :images="[
                './projects/shelltexturing/fur.png',
                './projects/TER/moving_cloud.gif',
                './projects/gameengine/illu_game.png',
                './projects/raytracing/refraction.png',
            ]"
            class="caroussel"
        />
    </ProjectSummary>
</template>
