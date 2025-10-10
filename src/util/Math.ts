import * as THREE from 'three'

function add(a: THREE.Vector2, b: THREE.Vector2): THREE.Vector2 {
    return new THREE.Vector2().copy(a).add(b)
}

function sub(a: THREE.Vector2, b: THREE.Vector2): THREE.Vector2 {
    return new THREE.Vector2().copy(a).sub(b)
}

function times(a: THREE.Vector2, b: THREE.Vector2): THREE.Vector2 {
    return new THREE.Vector2().copy(a).multiply(b)
}

function div(a: THREE.Vector2, b: THREE.Vector2): THREE.Vector2 {
    return new THREE.Vector2().copy(a).divide(b)
}

// Scalar

function addS(a: THREE.Vector2, b: number): THREE.Vector2 {
    return new THREE.Vector2().copy(a).addScalar(b)
}

function subS(a: THREE.Vector2, b: number): THREE.Vector2 {
    return new THREE.Vector2().copy(a).subScalar(b)
}

function timesS(a: THREE.Vector2, b: number): THREE.Vector2 {
    return new THREE.Vector2().copy(a).multiplyScalar(b)
}

function divS(a: THREE.Vector2, b: number): THREE.Vector2 {
    return new THREE.Vector2().copy(a).divideScalar(b)
}

export { add, addS, sub, subS, times, timesS, div, divS }
