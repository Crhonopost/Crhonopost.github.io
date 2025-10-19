<script setup lang="ts">
import ProjectSection from './ProjectSection.vue'
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
        <ProjectSection
            title="Behavior tree"
            desc="I created a behavior tree plugin for Godot 4.2 mono, which is available on the Asset
                Library. It allows you to create complex AI behaviors in a visual way, making it
                easier to manage and understand the logic behind AI actions. The plugin is
                straightforward and does not have much optimization."
            image-path="./projects/games/illu_behavior.png"
            image-alt="Typical use of the behavior tree using composition in godot."
            :image-first="false"
        />

        <ProjectSection
            title="Dicecraft"
            desc="I participated in a game jam where, as a team of 3, we created a game called
                Dicecraft. The game is about crafting dice in order to manipulate randomness and
                maximize combos and units spawn quantities to fight against an AI. The game lacks
                content and polish, but it was a fun project and the core mechanics are solid."
            image-path="./projects/games/dice_throw_edited.png"
            image-alt="You must protect the left while attacking the right by throwing your dice on the board."
            :image-first="true"
        />

        <ProjectSection
            title="Other projects"
            desc="I have worked on several other projects, but they act more as experiments or proofs
                of concept rather than full-fledged games. These projects include various mechanics
                from 2D platformers about time control to magic spells programming. The illustration on the left come from my spell programming game.
                On the right is the interface to create spell. The result can be seen on the left in the scene. 3 symbols expand the water shape as we can see."
            image-path="./projects/games/glyphes.png"
            image-alt="Spell creation game illustration"
            :image-first="false"
        />
    </ProjectSummary>
</template>
