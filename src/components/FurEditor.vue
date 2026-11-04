<script setup lang="ts">
import { useTemplateRef, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

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
import { ShapeEnum, type FurProperties, type FurRender } from '@/types'

import { useI18n } from 'vue-i18n'
import { capitalizeFirst } from '@/util/util'
import { startVisibleAnimationLoop } from '@/util/visibleAnimationLoop'
const { t } = useI18n()

const canva = useTemplateRef('viewport')
function getHexColor(color: THREE.Vector3): string {
    return '#' + [color.x, color.y, color.z]
        .map((channel) => Math.round(THREE.MathUtils.clamp(channel, 0, 1) * 255).toString(16).padStart(2, '0'))
        .join('')
}

function setGradientColor(index: number, event: Event) {
    if (!(event.target instanceof HTMLInputElement)) return
    const rgb = Number.parseInt(event.target.value.slice(1), 16)
    furPropertiesRef.value.colors[index].color.set(
        ((rgb >> 16) & 255) / 255,
        ((rgb >> 8) & 255) / 255,
        (rgb & 255) / 255,
    )
}

const radius = ref(1)
let resizeObserver: ResizeObserver | undefined

let scene: THREE.Scene | undefined
let camera: THREE.PerspectiveCamera | undefined
let renderer: THREE.WebGLRenderer | undefined
const delta = ref(0)
let stopAnimation: (() => void) | undefined

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
const activePointer = ref<number | null>(null)
const pointerPosition = new THREE.Vector2()

function updateObjRotation() {
    if (!camera) return

    const rotationMatrix = new THREE.Matrix4()
    rotationMatrix.makeRotationFromEuler(new THREE.Euler(rotation.value.x, rotation.value.y, 0, "YXZ"))
    furRender.fur.setRotationFromMatrix(rotationMatrix)
}

function startRotation(event: PointerEvent) {
    if (!event.isPrimary || event.button !== 0 || !camera || activePointer.value !== null) return

    event.preventDefault()
    activePointer.value = event.pointerId
    pointerPosition.set(event.clientX, event.clientY)
    previousRotation.set(0, 0)
    canva.value?.setPointerCapture(event.pointerId)
}

function stopRotation(event: PointerEvent) {
    if (event.pointerId !== activePointer.value) return

    activePointer.value = null
    previousRotation.set(0, 0)
    if (canva.value?.hasPointerCapture(event.pointerId)) {
        canva.value.releasePointerCapture(event.pointerId)
    }
}

function handlePointerMotion(event: PointerEvent) {
    if (event.pointerId !== activePointer.value || !camera) return
    if ((event.buttons & 1) === 0) {
        stopRotation(event)
        return
    }

    event.preventDefault()
    const movementX = event.clientX - pointerPosition.x
    const movementY = event.clientY - pointerPosition.y
    pointerPosition.set(event.clientX, event.clientY)

    const sensitivity = 0.005
    rotationDiff.value.x = (movementX - previousRotation.x) * sensitivity
    rotationDiff.value.y = (movementY - previousRotation.y) * sensitivity
    previousRotation.set(movementX, movementY)

    rotation.value.x += movementY * sensitivity
    rotation.value.y += movementX * sensitivity

    updateObjRotation()
}

const furPropertiesRef: Ref<FurProperties> = ref(baseProps())
let furRender: FurRender

function resizeViewport() {
    if (!camera || !canva.value || !renderer) return
    const width = Math.max(1, canva.value.clientWidth)
    const height = Math.max(1, canva.value.clientHeight)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
}

function initRender(canva: HTMLCanvasElement, context: WebGL2RenderingContext) {
    const width = canva.clientWidth
    const height = canva.clientHeight
    canva.width = width
    canva.height = height

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ canvas: canva, context })
    renderer.setSize(width, height, false)

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

    function animate(frameDelta: number) {
        delta.value = frameDelta

        if (furRender && furPropertiesRef) {
            lerpedDiff.value = furRender.furPhysic.update(delta.value, rotationDiff.value)
            rotationDiff.value = new THREE.Vector2(0, 0)

            furPropertiesRef.value.rotationalForce = lerpedDiff.value
            updateUniforms(furRender)
        }
        if (scene && camera) renderer?.render(scene, camera)
    }
    stopAnimation = startVisibleAnimationLoop(renderer, animate)
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
        resizeObserver = new ResizeObserver(resizeViewport)
        resizeObserver.observe(canva.value)
    } else {
        console.error('Canvas reference is not an HTMLCanvasElement')
    }
})

onBeforeUnmount(() => {
    resizeObserver?.disconnect()
    stopAnimation?.()
    renderer?.dispose()
})

</script>

<template>
    <div id="frame">
        <h1>{{ capitalizeFirst(t('titles.fur_editor')) }}</h1>
        <div id="fur-editor">
            <div id="shape-editor">
                <fieldset class="panel panel--inset control-group">
                    <legend>Controls</legend>
                    <div class="control-grid">
                        <label class="control" for="fur-mesh">
                            <span>Model</span>
                            <select id="fur-mesh" v-model="selectedMesh" @change="changeMesh">
                                <option>Fox</option>
                                <option>Sphere</option>
                            </select>
                        </label>
                        <label class="control" for="fur-strand-shape">
                            <span>Strand</span>
                            <select id="fur-strand-shape" v-model="selectedStrandShape"
                                @change="() => changeShape(furRender, selectedStrandShape)">
                                <option v-for="shape in Object.values(ShapeEnum)" :key="shape" :value="shape">
                                    {{ shape }}
                                </option>
                            </select>
                        </label>
                    </div>

                    <div class="control-grid">
                        <label class="control full-width" for="fur-density">
                            <span class="control-caption">Density <output>{{ furPropertiesRef.scale }}</output></span>
                            <input id="fur-density" type="range" v-model.number="furPropertiesRef.scale"
                                min="1" max="1000" step="1" />
                        </label>
                        <div class="control thickness-control" role="group" aria-labelledby="fur-thickness-label">
                            <span id="fur-thickness-label">Thickness</span>
                            <div class="thickness-values">
                                <label for="fur-thickness-base">
                                    <span class="thickness-key base-key"></span>
                                    Base <output>{{ furPropertiesRef.thicknessBot.toFixed(2) }}</output>
                                </label>
                                <label for="fur-thickness-tip">
                                    <span class="thickness-key tip-key"></span>
                                    Tip <output>{{ furPropertiesRef.thicknessTop.toFixed(2) }}</output>
                                </label>
                            </div>
                            <div class="dual-range" :style="{
                                '--thickness-start': ((Math.min(furPropertiesRef.thicknessBot, furPropertiesRef.thicknessTop) - 0.01) / 0.99 * 100) + '%',
                                '--thickness-end': ((Math.max(furPropertiesRef.thicknessBot, furPropertiesRef.thicknessTop) - 0.01) / 0.99 * 100) + '%',
                            }">
                                <input id="fur-thickness-base" class="thickness-base" type="range"
                                    v-model.number="furPropertiesRef.thicknessBot" min="0.01" max="1" step="0.01" />
                                <input id="fur-thickness-tip" class="thickness-tip" type="range"
                                    v-model.number="furPropertiesRef.thicknessTop" min="0.01" max="1" step="0.01" />
                            </div>
                        </div>
                    </div>

                    <div class="control-grid">
                        <label class="control" for="fur-curvature">
                            <span class="control-caption">Curvature <output>{{ furPropertiesRef.curvature }}</output></span>
                            <input id="fur-curvature" type="range" v-model.number="furPropertiesRef.curvature"
                                min="1" max="20" step="0.5" />
                        </label>
                        <label class="control" for="fur-roughness">
                            <span class="control-caption">Roughness <output>{{ furPropertiesRef.displacementStrength }}</output></span>
                            <input id="fur-roughness" type="range" v-model.number="furPropertiesRef.displacementStrength"
                                min="0" max="0.5" step="0.01" />
                        </label>

                        <label class="control" for="fur-length">
                            <span class="control-caption">Length <output>{{ furPropertiesRef.totalHeight }}</output></span>
                            <input id="fur-length" type="range" v-model.number="furPropertiesRef.totalHeight"
                                min="0.001" max="1" step="0.001" @change="() => updateFur(furRender)" />
                        </label>
                        <label class="control" for="fur-layers">
                            <span class="control-caption">Layers <output>{{ furPropertiesRef.nbInstances }}</output></span>
                            <input id="fur-layers" type="range" v-model.number="furPropertiesRef.nbInstances"
                                min="2" max="100" step="1" @change="() => updateFur(furRender)" />
                        </label>
                    </div>

                    <div class="control-grid color-controls">
                        <label class="control" :class="{ 'full-width': !furPropertiesRef.useColorTexture }" for="fur-color-mode">
                            <span>Color</span>
                            <select id="fur-color-mode" v-model="furPropertiesRef.useColorTexture">
                                <option :value="true">Texture</option>
                                <option :value="false">Gradient</option>
                            </select>
                        </label>
                        <label v-if="furPropertiesRef.useColorTexture" class="control" for="fur-texture-scale">
                            <span class="control-caption">Texture scale <output>{{ furPropertiesRef.colorTextureScale }}</output></span>
                            <input id="fur-texture-scale" type="range" v-model.number="furPropertiesRef.colorTextureScale"
                                min="0.01" max="10" step="0.01" />
                        </label>
                        <template v-else>
                            <label v-for="(color, index) in furPropertiesRef.colors" :key="index"
                                class="control" :for="'fur-color-' + index">
                                <span class="control-caption">
                                    {{ index > 0 ? 'Tip' : 'Base' }}
                                    <output>{{ getHexColor(color.color) }}</output>
                                </span>
                                <input :id="'fur-color-' + index" type="color" :value="getHexColor(color.color)"
                                    @input="setGradientColor(index, $event)" />
                            </label>
                        </template>
                    </div>
                </fieldset>
            </div>

            <div class="panel panel--frame fur-viewport">
                <canvas
                    ref="viewport"
                    :aria-label="capitalizeFirst(t('titles.fur_editor'))"
                    :class="{ rotating: activePointer !== null }"
                    @pointerdown="startRotation"
                    @pointermove="handlePointerMotion"
                    @pointerup="stopRotation"
                    @pointercancel="stopRotation"
                    @lostpointercapture="stopRotation"
                    @dragstart.prevent
                ></canvas>
            </div>

        </div>
    </div>
</template>

<style>
#fur-editor {
    display: grid;
    grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
    gap: 16px;
    width: 100%;
    min-width: 0;
    padding: 16px;
    accent-color: var(--color-accent);
}

#frame {
    width: 100%;
}

#shape-editor {
    display: grid;
    gap: 12px;
    min-width: 0;
}

#fur-editor .control-group {
    min-width: 0;
    margin: 0;
    padding: 12px;
}

#fur-editor legend {
    padding: 0 6px;
    font-size: 0.85rem;
    font-weight: 600;
}

#fur-editor .control-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px 14px;
    padding-bottom: 12px;
}

#fur-editor .control-grid:last-child {
    padding-bottom: 0;
}

#fur-editor .control {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    font-size: 0.8rem;
    line-height: 1.3;
}

#fur-editor .control-caption,
#fur-editor .thickness-values,
#fur-editor .thickness-values label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
}

#fur-editor output {
    font-variant-numeric: tabular-nums;
    color: var(--color-text);
    font-weight: 600;
}

#fur-editor .full-width,
#fur-editor .thickness-control {
    grid-column: 1 / -1;
}

#fur-editor select {
    appearance: none;
    width: 100%;
    min-height: 36px;
    padding: 6px 28px 6px 8px;
    border: var(--control-border-width) solid var(--control-border-color);
    border-radius: var(--control-radius);
    font: inherit;
    color: var(--color-text);
    background-color: var(--control-background);
    background-image:
        linear-gradient(45deg, transparent 50%, var(--color-text) 50%),
        linear-gradient(135deg, var(--color-text) 50%, transparent 50%);
    background-position: right 13px center, right 8px center;
    background-size: 5px 5px;
    background-repeat: no-repeat;
    cursor: pointer;
}

#fur-editor select:hover {
    border-color: var(--color-accent);
}

#fur-editor select option {
    color: var(--color-text);
    background-color: var(--control-option-background);
}

#fur-editor input[type='range']:not(.vacp-range-input) {
    display: block;
    width: 100%;
    min-width: 0;
    height: 20px;
    margin: 0;
    accent-color: var(--color-accent);
    cursor: pointer;
}

#fur-editor :is(select, input, button):focus-visible {
    outline: var(--focus-width) solid var(--color-accent);
    outline-offset: var(--focus-offset);
    border-radius: var(--control-radius);
}

#fur-editor .thickness-values {
    font-size: 0.75rem;
}

#fur-editor .thickness-values label {
    cursor: pointer;
}

#fur-editor .thickness-key {
    width: 9px;
    height: 9px;
    border: var(--control-border-width) solid var(--color-text);
    border-radius: 50%;
    background: var(--color-accent);
}

#fur-editor .tip-key {
    background: var(--color-accent-deep);
    border-radius: 2px;
    transform: rotate(45deg);
}

#fur-editor .dual-range {
    position: relative;
    height: 28px;
}

#fur-editor .dual-range::before {
    content: '';
    position: absolute;
    inset: 11px 9px;
    border-radius: 6px;
    background: linear-gradient(to right,
        var(--control-track-background) var(--thickness-start),
        var(--color-accent) var(--thickness-start),
        var(--color-accent) var(--thickness-end),
        var(--control-track-background) var(--thickness-end));
}

#fur-editor .dual-range input {
    position: absolute;
    inset: 0;
    height: 28px;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    pointer-events: none;
}

#fur-editor .dual-range input:focus-visible {
    z-index: 2;
}

#fur-editor .dual-range input::-webkit-slider-runnable-track {
    height: 6px;
    background: transparent;
}

#fur-editor .dual-range input::-moz-range-track {
    height: 6px;
    background: transparent;
}

#fur-editor .dual-range input::-moz-range-progress {
    background: transparent;
}

#fur-editor .dual-range input::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    margin-top: -6px;
    border: var(--control-thumb-border-width) solid var(--color-text);
    border-radius: 50%;
    background: var(--color-accent);
    pointer-events: auto;
    cursor: ew-resize;
}

#fur-editor .dual-range input::-moz-range-thumb {
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    border: var(--control-thumb-border-width) solid var(--color-text);
    border-radius: 50%;
    background: var(--color-accent);
    pointer-events: auto;
    cursor: ew-resize;
}

#fur-editor .dual-range .thickness-tip::-webkit-slider-thumb {
    border-radius: 4px;
    background: var(--color-accent-deep);
    transform: rotate(45deg);
}

#fur-editor .dual-range .thickness-tip::-moz-range-thumb {
    border-radius: 4px;
    background: var(--color-accent-deep);
    transform: rotate(45deg);
}

#fur-editor .fur-viewport {
    position: relative;
    min-width: 0;
    min-height: 420px;
    overflow: hidden;
}

#fur-editor canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    cursor: grab;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
}

#fur-editor canvas.rotating {
    cursor: grabbing;
}

#fur-editor input[type='color'] {
    width: 100%;
    height: 32px;
    padding: 3px;
    border: var(--control-border-width) solid var(--control-border-color);
    border-radius: var(--control-radius);
    background: var(--control-background);
    cursor: pointer;
}

#fur-editor input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
}

#fur-editor input[type='color']::-webkit-color-swatch {
    border: 0;
    border-radius: 4px;
}

#fur-editor input[type='color']::-moz-color-swatch {
    border: 0;
    border-radius: 4px;
}

@media (max-width: 1000px) {
    #fur-editor {
        grid-template-columns: minmax(0, 1fr);
    }

    #fur-editor .fur-viewport {
        grid-row: 1;
        min-height: clamp(280px, 45vh, 420px);
    }
}

@media (max-width: 580px) {
    #frame h1 {
        font-size: xx-large;
    }

    #fur-editor {
        padding: 0;
    }
}
</style>
