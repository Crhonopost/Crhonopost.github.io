import * as THREE from 'three'
import { ref, type ShallowRef } from 'vue'
import leopardColor from '@/assets/patterns/leopard/color.jpg'
import {
    baseProps,
    changeShape,
    generateFurR,
    loadTexture,
    updateUniforms,
} from '@/util/FurRendering'
import { ShapeEnum, type FurProperties, type FurRender } from '@/types'
import { getRay } from '@/util/GodRay'

export function initComponent(canva: Readonly<ShallowRef<HTMLCanvasElement | null>>) {
    let scene: THREE.Scene | undefined
    let camera: THREE.PerspectiveCamera | undefined
    let renderer: THREE.WebGLRenderer | undefined
    const delta = ref(0)
    let lastTime = performance.now()

    const furs: FurRender[] = []
    const grassRef = ref<FurProperties>(baseProps())
    const rotationInfo = new THREE.Vector2()
    const godRayMats: THREE.ShaderMaterial[] = []

    const currentSpeed = new THREE.Vector2(0, 0)
    function movePlaine(direction: 'front' | 'back') {
        const dir = new THREE.Vector2(0, direction == 'front' ? 1 : -1)
        currentSpeed.add(dir.multiplyScalar(1))

        rotationInfo.setX(direction == 'front' ? 0.1 : -0.1)
    }

    function lerp(from: number, to: number, t: number) {
        const diff = to - from
        return from + diff * t
    }

    function animate() {
        delta.value = (performance.now() - lastTime) / 1000
        lastTime = performance.now()

        grassRef.value.uvOffset.y += currentSpeed.y * delta.value
        if (grassRef.value.uvOffset.y < 0) grassRef.value.uvOffset.y += 1
        else if (grassRef.value.uvOffset.y > 1) grassRef.value.uvOffset.y -= 1
        currentSpeed.y = lerp(currentSpeed.y, 0, delta.value * 10)

        moved(delta.value, rotationInfo)
        rotationInfo.setX(0)
        rotationInfo.setY(0)

        furs.forEach((fur) => {
            updateUniforms(fur)
        })

        godRayMats.forEach((ray) => {
            ray.uniforms.delta.value += delta.value * 0.01
        })

        if (scene && camera) renderer?.render(scene, camera)
    }

    function initRender(canva: HTMLCanvasElement, context: WebGL2RenderingContext) {
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, canva.width / canva.height, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({ canvas: canva, context })
        renderer.setSize(canva.width, canva.height)

        renderer.setAnimationLoop(animate)

        renderer.setClearColor(new THREE.Color(31 / 255, 71 / 255, 59 / 255)) //0.196, 0.557, 0.431))

        // canva.addEventListener('mousemove', handleMouseMotion)
    }

    function initScene() {
        camera?.translateZ(1)
        grassRef.value.scale = 2500
        grassRef.value.threshold = 0.1
        grassRef.value.displacementStrength = 0.01
        grassRef.value.thicknessBot = 1
        grassRef.value.thicknessTop = 1
        grassRef.value.totalHeight = 1
        grassRef.value.nbInstances = 45
        grassRef.value.colors[0].color = new THREE.Vector3(0.078, 0.22, 0.173)
        grassRef.value.colors[1].color = new THREE.Vector3(0.325, 0.569, 0.235)
        grassRef.value.applyFog = true

        const grassGeo = new THREE.PlaneGeometry(10, 10)
            .rotateX(THREE.MathUtils.degToRad(-90))
            .rotateY(THREE.MathUtils.degToRad(10))
            .translate(0, -0.5, 0.5)
        const furRender = generateFurR(
            grassGeo,
            grassRef.value,
            renderer?.getClearColor(new THREE.Color()),
        )
        changeShape(furRender, ShapeEnum.ROUND)
        updateUniforms(furRender)
        scene?.add(furRender.fur)
        furs.push(furRender)
        loadTexture(furRender, leopardColor, 'colorTexture')

        const godRay1 = getRay(6, 1.5, 0.1)
        godRay1.translateZ(-3)
        godRay1.translateX(-4)
        godRay1.translateY(3)
        godRay1.rotateY(THREE.MathUtils.degToRad(90))
        // godRay1.rotateX(THREE.MathUtils.degToRad(10))
        godRayMats.push(godRay1.material)
        scene?.add(godRay1)
    }

    function moved(delta: number, direction: THREE.Vector2) {
        furs.forEach((fur) => {
            fur.properties.rotationalForce = fur.furPhysic.update(delta, direction)
        })
    }

    function resize(width: number, height: number) {
        if (!camera) return
        camera.aspect = width / height
        camera.updateProjectionMatrix()

        renderer?.setSize(width, height)
    }

    return { canva, delta, camera, movePlaine, initRender, initScene, resize }
}
