// ref: https://www.youtube.com/watch?v=KPoeNZZ6H4s&ab_channel=t3ssel8r

import * as THREE from 'three'
import { add, divS, sub, timesS } from './Math'

const PI = 3.14159265359

export class SecondOrderDynamics {
    xp: THREE.Vector2
    y: THREE.Vector2
    yd: THREE.Vector2

    k1: number
    k2: number
    k3: number
    constructor(f: number = 4, z: number = 0.35, r: number = 0, x0: THREE.Vector2) {
        const twoPIf = 2 * PI * f

        this.k1 = z / (PI * f)
        this.k2 = 1 / (twoPIf * twoPIf)
        this.k3 = (r * z) / twoPIf

        this.xp = x0.clone()
        this.y = x0.clone()
        this.yd = new THREE.Vector2(0, 0)
    }

    update(t: number, x: THREE.Vector2, xd?: THREE.Vector2): THREE.Vector2 {
        if (!Number.isFinite(t) || t <= 0) return this.y

        if (!xd) {
            xd = divS(sub(x, this.xp), t)
            this.xp = x.clone()
        }

        // Integrate long visible frames in small steps to keep the spring stable.
        const steps = Math.ceil(t / (1 / 60))
        const step = t / steps
        for (let i = 0; i < steps; i++) {
            this.y = add(this.y, timesS(this.yd, step))
            const bracket = sub(sub(add(timesS(xd, this.k3), x), this.y), timesS(this.yd, this.k1))
            this.yd = add(divS(timesS(bracket, step), this.k2), this.yd)
        }

        if (Number.isNaN(this.yd.x) || Number.isNaN(this.yd.y)) this.yd = new THREE.Vector2(0, 0)
        return this.y
    }
}
