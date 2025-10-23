<script setup lang="ts">
import { useTemplateRef, onMounted, onUnmounted, ref, type Ref } from 'vue'

import * as THREE from 'three'

import noiseTexture from '@/assets/noise/base_256.png'
import leopardColor from '@/assets/patterns/leopard/color.jpg'
import model from '@/assets/models/fox/fox_realistic_wild_animal.glb'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import {
    changeShape,
    emptyTexture,
    generateFurR,
    loadTexture,
    updateFur,
    updateUniforms,
    baseProps,
} from '../util/FurRendering'
import { ColorPicker } from 'vue-accessible-color-picker'
import { ShapeEnum, type FurProperties, type FurRender } from '@/types'
import CustomButton from './CustomButton.vue'

import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
const { t } = useI18n()

const canva = useTemplateRef('viewport')
function getTextureButtonText(): string {
    const state = furPropertiesRef.value.useColorTexture ? 'Disable' : 'Enable'
    return state + ' color texture'
}

const radius = ref(1)
const frameRef = ref<HTMLElement>()

let scene: THREE.Scene | undefined
let camera: THREE.PerspectiveCamera | undefined
let renderer: THREE.WebGLRenderer | undefined
const delta = ref(0)
let lastTime = performance.now()

const rotation = ref({ x: 0, y: 0, z: 0 })

enum MeshTypeEnum {
    Plane = 'Plane',
    Sphere = 'Sphere',
    Fox = 'Fox',
}
const selectedMesh = ref<MeshTypeEnum>(MeshTypeEnum.Fox)
const selectedStrandShape = ref<ShapeEnum>(ShapeEnum.ROUND)

const leftOffset = 0

const rotationDiff = ref(new THREE.Vector2(0, 0))
const previousRotation = new THREE.Vector2(0, 0)
const lerpedDiff = ref(new THREE.Vector2(0, 0))

function updateObjRotation() {
    if (!camera) return

    const rotationMatrix = new THREE.Matrix4()
    rotationMatrix.makeRotationFromEuler(new THREE.Euler(rotation.value.x, rotation.value.y, 0))
    furRender.fur.setRotationFromMatrix(rotationMatrix)
}

function handleMouseMotion(event: MouseEvent) {
    if (event.buttons !== 1 || !camera) {
        return
    }

    const sensitivity = 0.005
    // camera.rotation.x -= event.movementY * sensitivity
    // camera.rotation.y -= event.movementX * sensitivity

    rotationDiff.value.x = (event.movementX - previousRotation.x) * sensitivity
    rotationDiff.value.y = (event.movementY - previousRotation.y) * sensitivity
    previousRotation.x = event.movementX
    previousRotation.y = event.movementY

    rotation.value.x += event.movementY * sensitivity
    rotation.value.y += event.movementX * sensitivity

    // updateCamPos()
    updateObjRotation()
}

const furPropertiesRef: Ref<FurProperties> = ref(baseProps())
let furRender: FurRender

window.onresize = function () {
    if (!camera || !canva.value || !renderer || !frameRef.value) return
    const width = frameRef.value.clientWidth
    const height = frameRef.value.clientHeight
    canva.value.width = width
    canva.value.height = height
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
}

function initRender(canva: HTMLCanvasElement, context: WebGL2RenderingContext) {
    const width = canva.clientWidth
    const height = canva.clientHeight
    canva.width = width
    canva.height = height

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ canvas: canva, context })
    renderer.setSize(width, height)

    camera.position.z = radius.value
    camera.position.x = leftOffset

    const baseGeometry = new THREE.SphereGeometry(0.5)
    furRender = generateFurR(baseGeometry)
    
    selectedMesh.value = MeshTypeEnum.Fox
    loadMesh(model)
    .then((m) => {
        m.geometry.rotateX(-90)
        furRender.baseGeometry = m.geometry
        emptyTexture(furRender)
        updateFur(furRender)
    })
    .catch((e) => console.error(e))

    furRender.properties.applyFog = false
    changeShape(furRender, selectedStrandShape.value)
    scene?.add(furRender.fur)
    loadTexture(furRender, leopardColor, 'colorTexture')
    loadTexture(furRender, noiseTexture, 'voronoise')
    furPropertiesRef.value = furRender.properties
    furPropertiesRef.value.useColorTexture = true
    furPropertiesRef.value.colorTextureScale = 5.75
    furPropertiesRef.value.thicknessTop = 0.1
    furPropertiesRef.value.thicknessBot = 1
    furPropertiesRef.value.scale = 245

    function animate() {
        delta.value = (performance.now() - lastTime) / 1000
        lastTime = performance.now()

        if (furRender && furPropertiesRef) {
            lerpedDiff.value = furRender.furPhysic.update(delta.value, rotationDiff.value)
            rotationDiff.value = new THREE.Vector2(0, 0)

            furPropertiesRef.value.rotationalForce = lerpedDiff.value
            updateUniforms(furRender)
        }
        if (scene && camera) renderer?.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)
    canva.addEventListener('mousemove', handleMouseMotion)
    updateObjRotation()
}

async function loadMesh(modelUrl: string): Promise<THREE.Mesh> {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()
        loader.load(modelUrl, (gltf) => {
            gltf.scene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    resolve(child as THREE.Mesh)
                }
            })
            reject(new Error('No mesh found in GLTF'))
        })
    })
}

function changeMesh() {
    if (selectedMesh.value == MeshTypeEnum.Fox) {
        loadMesh(model)
            .then((m) => {
                m.geometry.rotateX(-90)
                furRender.baseGeometry = m.geometry
                emptyTexture(furRender)
                updateFur(furRender)
            })
            .catch((e) => console.error(e))
    } else if (selectedMesh.value == MeshTypeEnum.Plane) {
        furRender.baseGeometry = new THREE.PlaneGeometry(5, 5, 40, 40)

        loadTexture(furRender, noiseTexture)
        updateFur(furRender)
    } else if (selectedMesh.value == MeshTypeEnum.Sphere) {
        furRender.baseGeometry = new THREE.SphereGeometry(0.5)
        emptyTexture(furRender)
        updateFur(furRender)
    }
}

onMounted(() => {
    if (canva.value instanceof HTMLCanvasElement) {
        if (!canva.value) {
            throw new Error('Invalid canvas element provided')
        }

        const context = canva.value.getContext('webgl2')
        if (!context) {
            throw new Error('WebGL2 context not available')
        }

        initRender(canva.value, context)
        camera?.updateProjectionMatrix()
    } else {
        console.error('Canvas reference is not an HTMLCanvasElement')
    }
})

onUnmounted(() => {
    // Clean up event listener
    canva.value?.removeEventListener('mousemove', handleMouseMotion)
})

const showColorPicker = ref(false)
</script>

<template>
    <div id="frame" ref="frameRef">
        <h1>{{ capitalizeFirst(t('titles.fur_editor')) }}</h1>
        <div id="fur-editor">
            <!-- <p>Distance from camera: {{ radius }}</p>
            <input type="range" v-model="radius" min="0.1" max="5" step="0.01" @input="updateCamPos" /> -->
            <div id="shape-editor" ref="shape-editor">
                <p>Fur shape:</p>
                <select v-model="selectedMesh" @change="changeMesh">
                    <option>Fox</option>
                    <!-- <option>Plane</option> -->
                    <option>Sphere</option>
                </select>
                <p>Strand shape:</p>
                <select
                    v-model="selectedStrandShape"
                    @change="() => changeShape(furRender, selectedStrandShape)"
                >
                    <option
                        v-for="shape in Object.values(ShapeEnum)"
                        :key="shape"
                        :value="shape"
                        :selected="shape === selectedStrandShape"
                    >
                        {{ shape }}
                    </option>
                </select>
                <p>Scale: {{ furPropertiesRef.scale }}</p>
                <input type="range" v-model="furPropertiesRef.scale" min="1" max="1000" step="1" />
                <p>Thickness bottom: {{ furPropertiesRef.thicknessBot }}</p>
                <input
                    type="range"
                    v-model="furPropertiesRef.thicknessBot"
                    min="0.01"
                    max="1"
                    step="0.01"
                />
                <p>Thickness top: {{ furPropertiesRef.thicknessTop }}</p>
                <input
                    type="range"
                    v-model="furPropertiesRef.thicknessTop"
                    min="0.01"
                    max="1"
                    step="0.01"
                />
                <p>Threshold: {{ furPropertiesRef.threshold }}</p>
                <input
                    type="range"
                    v-model="furPropertiesRef.threshold"
                    min="0"
                    max="1"
                    step="0.01"
                />
                <p>Number of Instances: {{ furPropertiesRef.nbInstances }}</p>
                <input
                    type="range"
                    v-model="furPropertiesRef.nbInstances"
                    min="1"
                    max="100"
                    step="1"
                    @change="() => updateFur(furRender)"
                />
                <p>Total Height: {{ furPropertiesRef.totalHeight }}</p>
                <input
                    type="range"
                    v-model="furPropertiesRef.totalHeight"
                    min="0.001"
                    max="1"
                    step="0.001"
                    @change="() => updateFur(furRender)"
                />
                <!-- <p>Rotational x: {{ furPropertiesRef.rotationalForce }}</p>
                <input
                    type="range"
                    v-model="furPropertiesRef.rotationalForce"
                    min="-0.5"
                    max="0.5"
                    step="0.01"
                /> -->
                <p>Curvature: {{ furPropertiesRef.curvature }}</p>
                <input
                    type="range"
                    v-model="furPropertiesRef.curvature"
                    min="1"
                    max="20"
                    step="0.5"
                />
                <p>Roughness: {{ furPropertiesRef.displacementStrength }}</p>
                <input
                    type="range"
                    v-model="furPropertiesRef.displacementStrength"
                    min="0"
                    max="0.5"
                    step="0.01"
                />
            </div>
            <canvas ref="viewport"></canvas>
            <div id="color-editor" ref="color-editor">
                <CustomButton
                    content="colorize"
                    @click="() => (showColorPicker = !showColorPicker)"
                    :disable="false"
                ></CustomButton>
                <div v-if="showColorPicker">
                    <CustomButton
                        :content="getTextureButtonText()"
                        @click="
                            furPropertiesRef.useColorTexture = !furPropertiesRef.useColorTexture
                        "
                        :disable="false"
                    />
                    <div v-if="furPropertiesRef.useColorTexture">
                        <p>Color texture scale: {{ furPropertiesRef.colorTextureScale }}</p>
                        <input
                            type="range"
                            v-model="furPropertiesRef.colorTextureScale"
                            min="0.01"
                            max="10"
                            step="0.01"
                        />
                    </div>
                    <div v-else>
                        <div v-for="(color, index) in furPropertiesRef.colors" :key="index">
                            <p>{{ index > 0 ? 'End' : 'Base' }} Color</p>
                            <ColorPicker
                                v-if="showColorPicker"
                                class="picker"
                                default-format="rgb"
                                @color-change="
                                    (data) => {
                                        if (!furPropertiesRef) return

                                        const { rgb } = data.colors
                                        color.color.x = rgb.r / 255
                                        color.color.y = rgb.g / 255
                                        color.color.z = rgb.b / 255
                                    }
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url('vue-accessible-color-picker/styles');
.picker {
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    height: fit-content;
}
.picker *:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.picker *:nth-child(2) {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
.picker button {
    display: none;
}

.picker > *:last-child {
    display: none;
}

#fur-editor {
    padding: 20px;
    border-radius: 10px;
    overflow-y: auto;
    min-width: 300px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#color-editor {
    pointer-events: auto;
    width: fit-content;
    z-index: 1;
}
#shape-editor {
    pointer-events: auto;
    position: relative;
    z-index: 1;
}

canvas {
    pointer-events: auto;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
}

#fur-editor {
    position: relative;
    z-index: 0;
    height: fit-content;
    /* your existing styles */
}

#frame {
    position: relative;
    width: 100%;
    height: fit-content;
    pointer-events: none;
}


@media (max-width: 580px) {    
    #frame h1 {
        font-size: xx-large;
    }
}
</style>
