export type EnginePassCaptureKey =
    | 'shadows'
    | 'albedo'
    | 'normals'
    | 'materials'
    | 'depth'
    | 'lighting'
    | 'final'

export interface EnginePassCapture {
    key: EnginePassCaptureKey
    src: string | null
}

// Add real captures to public/projects/gameengine/passes, then replace null
// with their public URL, e.g. '/projects/gameengine/passes/shadow-maps.png'.
// Keep null until the corresponding capture is available.
export const enginePassCaptures: EnginePassCapture[] = [
    { key: 'shadows', src: "projects/gameengine/passes/shadow.png" },
    { key: 'albedo', src: "projects/gameengine/passes/albedo.png" },
    { key: 'normals', src: "projects/gameengine/passes/normal.png" },
    { key: 'materials', src: "projects/gameengine/passes/material.png" },
    { key: 'depth', src: "projects/gameengine/passes/depth.png" },
    { key: 'lighting', src: "projects/gameengine/passes/lighting.png" },
    { key: 'final', src: "projects/gameengine/passes/final.png" },
]
