import * as THREE from 'three'
import frag from '@/assets/shaders/godRay/fragment.glsl?raw'
import vert from '@/assets/shaders/godRay/vertex.glsl?raw'
import noise from '@/assets/noise/base_256.png'

export function getRay(length: number, baseRadius: number, endRadius: number) {
    const cylinderGeom = new THREE.CylinderGeometry(endRadius, baseRadius, length, 255)
    const cylinderMat = new THREE.ShaderMaterial({
        fragmentShader: frag,
        vertexShader: vert,
        transparent: true,
        side: THREE.DoubleSide,
        uniforms: {
            noiseTexture: {
                value: new THREE.TextureLoader().load(noise, (data) => {
                    data.wrapS = THREE.RepeatWrapping
                    data.wrapT = THREE.RepeatWrapping
                }),
            },
            delta: { value: 0 },
        },
    })

    return new THREE.Mesh(cylinderGeom, cylinderMat)
}
