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
    { key: 'shadows', src: null },
    { key: 'albedo', src: null },
    { key: 'normals', src: null },
    { key: 'materials', src: null },
    { key: 'depth', src: null },
    { key: 'lighting', src: null },
    { key: 'final', src: null },
]
