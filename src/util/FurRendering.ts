import roundShape from '@/assets/shapes/shape_round.png'
import squareShape from '@/assets/shapes/shape_square.png'
import pinataShape from '@/assets/shapes/shape_pinata.png'

import fragmentShader from '@/assets/shaders/fur/fragment.glsl?raw'
import vertexShader from '@/assets/shaders/fur/vertex.glsl?raw'

import * as THREE from 'three'
import { SecondOrderDynamics } from '@/util/SecondOrder'
import { ShapeEnum, type FurProperties, type FurRender } from '@/types'

function getEmptyTexture(): THREE.Texture {
    const width = 10
    const height = 10

    const size = width * height
    const data = new Uint8Array(4 * size)
    const color = new THREE.Color(0, 0, 0)

    const r = Math.floor(color.r * 255)
    const g = Math.floor(color.g * 255)
    const b = Math.floor(color.b * 255)

    for (let i = 0; i < size; i++) {
        const stride = i * 4
        data[stride] = r
        data[stride + 1] = g
        data[stride + 2] = b
        data[stride + 3] = 255
    }

    // used the buffer to create a DataTexture
    const texture = new THREE.DataTexture(data, width, height)
    texture.needsUpdate = true

    return texture
}

export function emptyTexture(furR: FurRender, name: string = 'heightMap') {
    furR.furMaterial.uniforms[name].value = getEmptyTexture()
}

export function loadTexture(furR: FurRender, path: string, name: string = 'heightMap') {
    furR.furMaterial.uniforms[name].value = new THREE.TextureLoader().load(path, (tex) => {
        tex.needsUpdate = true
        tex.wrapS = THREE.RepeatWrapping
        tex.wrapT = THREE.RepeatWrapping
        tex.minFilter = THREE.LinearFilter
        tex.magFilter = THREE.LinearFilter
        tex.generateMipmaps = false
    })
}

export function changeShape(furR: FurRender, shape: ShapeEnum) {
    let shapePath: string = ''
    if (shape === ShapeEnum.ROUND) {
        shapePath = roundShape
    } else if (shape === ShapeEnum.SQUARE) {
        shapePath = squareShape
    } else if (shape === ShapeEnum.PINATA) {
        shapePath = pinataShape
    } else {
        console.error('Shape not found')
        return
    }

    furR.furMaterial.uniforms.shapeTexture.value = new THREE.TextureLoader().load(
        shapePath,
        (tex) => {
            tex.wrapS = THREE.ClampToEdgeWrapping
            tex.wrapT = THREE.ClampToEdgeWrapping
            tex.minFilter = THREE.LinearFilter
            tex.magFilter = THREE.LinearFilter
            tex.generateMipmaps = false
            tex.needsUpdate = true
        },
    )
}

export const baseProps: () => FurProperties = () => ({
    scale: 300,
    colorTextureScale: 1,
    threshold: 0.5,
    thicknessTop: 0.01,
    thicknessBot: 0.85,
    curvature: 3,
    displacementStrength: 0.01,
    colors: [
        { color: new THREE.Vector3(0.0, 0.0, 0.0), stamp: 0.0 },
        { color: new THREE.Vector3(0.9, 0.5, 0.05), stamp: 1.0 },
    ],

    nbInstances: 30,
    totalHeight: 0.3,
    rotationalForce: new THREE.Vector2(0, 0),

    applyFog: false,
    uvOffset: new THREE.Vector2(0, 0),
    useColorTexture: false,
})

export function generateFurR(
    baseGeometry: THREE.BufferGeometry,
    props: FurProperties = baseProps(),
    clearColor: THREE.Color = new THREE.Color(),
): FurRender {
    const mat = new THREE.ShaderMaterial({
        uniforms: {
            voronoise: { value: getEmptyTexture() },
            heightMap: { value: getEmptyTexture() },
            shapeTexture: {
                value: new THREE.TextureLoader().load(squareShape, (tex) => {
                    tex.wrapS = THREE.RepeatWrapping
                    tex.wrapT = THREE.RepeatWrapping
                    tex.minFilter = THREE.LinearFilter
                    tex.magFilter = THREE.LinearFilter
                    tex.generateMipmaps = false
                }),
            },
            scale: { value: props.scale },
            colorTextureScale: { value: props.colorTextureScale },
            threshold: { value: props.threshold },
            thicknessBot: { value: props.thicknessBot },
            thicknessTop: { value: props.thicknessTop },
            curvature: { value: props.curvature },
            displacementStrength: { value: props.displacementStrength },
            rotationalForce: { value: props.rotationalForce },

            colors: {
                value: props.colors,
            },

            useColorTexture: { value: false },
            colorTexture: { value: getEmptyTexture() },
            clearColor: { value: clearColor },

            uvOffset: { value: props.uvOffset },
            applyFog: { value: props.applyFog },
        },
        vertexShader,
        fragmentShader,
    })

    const res: FurRender = {
        baseGeometry,
        properties: props,
        furMaterial: mat,
        fur: new THREE.InstancedMesh(baseGeometry, mat, 1),
        furPhysic: new SecondOrderDynamics(4, 0.35, 0, new THREE.Vector2(0, 0)),
    }

    updateFur(res)

    return res
}

export function updateUniforms(furR: FurRender): void {
    const { furMaterial: material, properties } = furR
    for (const key in properties) {
        if (material.uniforms[key]) {
            material.uniforms[key].value = properties[key as keyof FurProperties]
        }
    }
}

function initFur(furR: FurRender) {
    const geometry = new THREE.BufferGeometry().copy(furR.baseGeometry)
    const offsets = new Float32Array(furR.properties.nbInstances)
    for (let i = 0; i < furR.properties.nbInstances; i++) {
        offsets[i] = ((i / (furR.properties.nbInstances - 1)) * furR.properties.totalHeight) / 10
    }
    geometry.setAttribute('offset', new THREE.InstancedBufferAttribute(offsets, 1))

    const heights = new Float32Array(furR.properties.nbInstances)
    for (let i = 0; i < furR.properties.nbInstances; i++) {
        heights[i] = i / (furR.properties.nbInstances - 1)
    }
    geometry.setAttribute('height', new THREE.InstancedBufferAttribute(heights, 1))

    furR.fur.copy(new THREE.InstancedMesh(geometry, furR.furMaterial, furR.properties.nbInstances))
}

export function updateFur(furR: FurRender) {
    if (furR.fur) {
        furR.fur.dispose()
    }

    initFur(furR)
}
