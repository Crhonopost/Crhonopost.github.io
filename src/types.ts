import * as THREE from 'three'
import type { SecondOrderDynamics } from '@/util/SecondOrder'

export interface Skill {
    name: string
    icon: string
    anotation: AnotationEnum
    isWeb: boolean
}

export enum AnotationEnum {
    LANGUAGE = 'language',
    TOOL = 'tool',
    NONE = 'none',
}

export enum ShapeEnum {
    ROUND = 'ROUND',
    SQUARE = 'SQUARE',
    PINATA = 'PINATA',
}

export interface GradientValue {
    color: THREE.Vector3
    stamp: number
}

export interface FurProperties {
    scale: number
    colorTextureScale: number
    threshold: number
    nbInstances: number
    totalHeight: number
    thicknessTop: number
    thicknessBot: number
    curvature: number
    displacementStrength: number
    colors: GradientValue[]
    useColorTexture: boolean
    rotationalForce: THREE.Vector2
    applyFog: boolean
    uvOffset: THREE.Vector2
}

export interface FurRender {
    properties: FurProperties
    furMaterial: THREE.ShaderMaterial
    fur: THREE.InstancedMesh
    baseGeometry: THREE.BufferGeometry
    furPhysic: SecondOrderDynamics
}
