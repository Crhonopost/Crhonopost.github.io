import * as THREE from 'three'
import type { ShallowRef } from 'vue'
import vertexShader from '@/assets/shaders/lavaLamp/vertex.glsl?raw'
import fragmentShader from '@/assets/shaders/lavaLamp/fragment.glsl?raw'
import { startVisibleAnimationLoop } from '@/util/visibleAnimationLoop'

export function initComponent(canva: Readonly<ShallowRef<HTMLCanvasElement | null>>) {
    const uniforms = {
        iTime: { value: 300 },
        iResolution: { value: new THREE.Vector3(1, 1, 1) },
        iMouse: { value: new THREE.Vector4() },
        uSmoothing: { value: 0.1 },
        uDepthLayerCount: { value: 3.0 },
        uThreshold: { value: 0.5 },
        uMaxDistance: { value: 1000 },
        uOrbit: { value: 700 },
        uFov: { value: 60 },
        uTravel: { value: 0 },
        uColorA: { value: new THREE.Color(60 / 255, 107 / 255, 87 / 255) },
        uColorB: { value: new THREE.Color(49 / 255, 89 / 255, 105 / 255) },
        uColorC: { value: new THREE.Color(62 / 255, 70 / 255, 101 / 255) },
        uColorNear: { value: 300 },
        uColorFar: { value: 1100 },
        uFogNear: { value: 350 },
        uFogFar: { value: 500 },
        uBackgroundColor: { value: new THREE.Vector3(12 / 255, 23 / 255, 28 / 255) },
    }

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
        glslVersion: THREE.GLSL3,
        vertexShader,
        fragmentShader,
        uniforms,
        depthTest: false,
        depthWrite: false,
    })
    const quad = new THREE.Mesh(geometry, material)
    quad.frustumCulled = false
    scene.add(quad)

    const pointer = new THREE.Vector2(0.5, 0.5)
    const drawingBufferSize = new THREE.Vector2()
    let renderer: THREE.WebGLRenderer | undefined
    let stopAnimation: (() => void) | undefined
    let travelSpeed = 0

    function movePlaine(direction: 'front' | 'back') {
        travelSpeed += direction === 'front' ? 500 : -500
    }

    function animate(delta: number) {
        uniforms.iTime.value += delta
        const decay = Math.exp(-5 * delta)
        uniforms.uTravel.value += (travelSpeed * (1 - decay)) / 5
        travelSpeed *= decay
        renderer?.render(scene, camera)
    }

    function updateMouse(event: PointerEvent) {
        const bounds = canva.value?.getBoundingClientRect()
        if (!bounds || bounds.width === 0 || bounds.height === 0) return

        pointer.set(
            THREE.MathUtils.clamp((event.clientX - bounds.left) / bounds.width, 0, 1),
            THREE.MathUtils.clamp(1 - (event.clientY - bounds.top) / bounds.height, 0, 1),
        )
        const mouse = uniforms.iMouse.value
        const resolution = uniforms.iResolution.value
        mouse.x = pointer.x * resolution.x
        mouse.y = pointer.y * resolution.y
        if (event.type === 'pointerdown') {
            mouse.z = mouse.x
            mouse.w = mouse.y
        } else if (event.type === 'pointerup' || event.type === 'pointercancel') {
            mouse.z = -Math.abs(mouse.z)
            mouse.w = -Math.abs(mouse.w)
        }
    }

    function resize(width: number, height: number) {
        if (!renderer) return
        renderer.setSize(Math.max(1, width), Math.max(1, height), false)
        renderer.getDrawingBufferSize(drawingBufferSize)
        uniforms.iResolution.value.set(drawingBufferSize.x, drawingBufferSize.y, 1)
        uniforms.iMouse.value.x = pointer.x * drawingBufferSize.x
        uniforms.iMouse.value.y = pointer.y * drawingBufferSize.y
    }

    function initRender(canvas: HTMLCanvasElement, context: WebGL2RenderingContext) {
        renderer = new THREE.WebGLRenderer({
            canvas,
            context,
            antialias: false,
            depth: false,
            stencil: false,
        })
        resize(window.innerWidth, window.innerHeight)
        renderer.render(scene, camera)
        stopAnimation = startVisibleAnimationLoop(renderer, animate)
    }

    function dispose() {
        stopAnimation?.()
        stopAnimation = undefined
        geometry.dispose()
        material.dispose()
        scene.clear()
        renderer?.dispose()
        renderer = undefined
    }

    return { uniforms, movePlaine, updateMouse, initRender, dispose, resize }
}
