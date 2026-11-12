uniform float iTime;
uniform vec3 iResolution;
uniform vec4 iMouse;
uniform float uSmoothing;
uniform float uDepthLayerCount;
uniform float uThreshold;
uniform float uMaxDistance;
uniform float uOrbit;
uniform float uFov;
uniform float uTravel;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uColorNear;
uniform float uColorFar;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uBackgroundColor;

out vec4 fragColor;

struct Sphere {
    vec3 center;
    float radius;
};

#define SPHERE_COUNT 20
#define MAX_STEPS 100

Sphere spheres[SPHERE_COUNT] = Sphere[](
    Sphere(vec3(   0.0,   0.0,   0.0), 35.0),
    Sphere(vec3( -54.0, -10.0,   0.0), 17.0),
    Sphere(vec3(  20.0,  20.0,   0.0), 24.0),
    Sphere(vec3(  50.0,  13.0,   0.0), 51.0),
    Sphere(vec3( -70.0,  -1.0,   0.0), 20.0),
    Sphere(vec3( -25.0,  38.0,  12.0), 19.0),
    Sphere(vec3(  12.0, -42.0,  -8.0), 27.0),
    Sphere(vec3(  72.0, -30.0,  18.0), 16.0),
    Sphere(vec3( -92.0,  32.0, -15.0), 29.0),
    Sphere(vec3(  38.0,  58.0,  25.0), 14.0),
    Sphere(vec3( -12.0,  72.0, -22.0), 22.0),
    Sphere(vec3(  95.0,  25.0, -12.0), 31.0),
    Sphere(vec3( -48.0, -55.0,  20.0), 25.0),
    Sphere(vec3(  35.0, -72.0,  10.0), 18.0),
    Sphere(vec3( -95.0, -38.0,  35.0), 13.0),
    Sphere(vec3(  10.0,  45.0, -40.0), 32.0),
    Sphere(vec3(  65.0,  70.0, -20.0), 21.0),
    Sphere(vec3( -65.0,  65.0,  30.0), 15.0),
    Sphere(vec3( 105.0, -55.0, -25.0), 26.0),
    Sphere(vec3( -20.0, -85.0, -15.0), 34.0)
);

const vec3 spawnMin = vec3(-100.0, -200.0, -250.0);
const vec3 spawnMax = vec3(100.0, -200.0, -150.0);
const float riseHeight = 1000.0;

// Source: https://www.shadertoy.com/view/XlXcW4
vec3 hash33(uvec3 x) {
    const uint k = 1103515245U;
    x = ((x >> 8U) ^ x.yzx) * k;
    x = ((x >> 8U) ^ x.yzx) * k;
    x = ((x >> 8U) ^ x.yzx) * k;
    return vec3(x) * (1.0 / float(0xffffffffU));
}

float smoothMin(float a, float b, float smoothing) {
    return min(a, b) - log(1.0 + exp(-smoothing * abs(a - b))) / smoothing;
}

float sampleSDF(vec3 position, float smoothing) {
    float distance = length(position - spheres[0].center) - spheres[0].radius;
    for (int sphereIdx = 1; sphereIdx < SPHERE_COUNT; sphereIdx++) {
        float proximity = length(position - spheres[sphereIdx].center) - spheres[sphereIdx].radius;
        distance = smoothMin(proximity, distance, smoothing);
    }
    return distance;
}

vec3 estimateNormal(vec3 position, float smoothing) {
    const float epsilon = 0.1;
    vec3 gradient = vec3(
        sampleSDF(position + vec3(epsilon, 0.0, 0.0), smoothing)
            - sampleSDF(position - vec3(epsilon, 0.0, 0.0), smoothing),
        sampleSDF(position + vec3(0.0, epsilon, 0.0), smoothing)
            - sampleSDF(position - vec3(0.0, epsilon, 0.0), smoothing),
        sampleSDF(position + vec3(0.0, 0.0, epsilon), smoothing)
            - sampleSDF(position - vec3(0.0, 0.0, epsilon), smoothing)
    );
    float gradientLength = length(gradient);
    return gradientLength > 0.000001 ? gradient / gradientLength : vec3(0.0, 1.0, 0.0);
}

void animateSpheres() {
    for (int sphereIdx = 0; sphereIdx < SPHERE_COUNT; sphereIdx++) {
        float currentTime = 0.02 * (iTime + spheres[sphereIdx].radius);
        float fractTime = fract(currentTime);
        float spawnSeed = floor(currentTime);
        vec3 spherePosition = spheres[sphereIdx].center;
        vec3 seed = vec3(
            spawnMin.x + spherePosition.x,
            spawnSeed + spherePosition.y,
            spawnMax.x + spherePosition.z
        );
        vec3 random = hash33(uvec3(ivec3(seed)));
        spherePosition = mix(spawnMin, spawnMax, random);

        vec3 diff = spawnMax - spawnMin;
        float progressZ = (spherePosition.z - spawnMin.z) / diff.z;
        float stepZ = floor(progressZ * uDepthLayerCount) / uDepthLayerCount;
        spherePosition.z = (stepZ * diff.z) + spawnMin.z;

        spherePosition.y += random.y * fractTime * riseHeight;
        spheres[sphereIdx].center = spherePosition;
        spheres[sphereIdx].radius *= 1.0 - smoothstep(0.9, 1.0, fractTime);
    }
}

vec2 sceneInterval(vec3 rayOrigin, vec3 rayDirection, float smoothing) {
    float padding = 51.0 + log(float(SPHERE_COUNT)) / smoothing + max(uThreshold, 0.001);
    vec3 boundsMin = spawnMin - vec3(padding);
    vec3 boundsMax = spawnMax + vec3(padding, riseHeight + padding, padding);
    vec3 inverseDirection = (step(vec3(0.0), rayDirection) * 2.0 - 1.0)
        / max(abs(rayDirection), vec3(0.00001));
    vec3 first = (boundsMin - rayOrigin) * inverseDirection;
    vec3 second = (boundsMax - rayOrigin) * inverseDirection;
    vec3 near = min(first, second);
    vec3 far = max(first, second);
    return vec2(
        max(max(max(near.x, near.y), near.z), 0.0),
        min(min(min(far.x, far.y), far.z), uMaxDistance)
    );
}

vec3 distanceColor(float depth, vec3 normal) {
    float blend = clamp((depth - uColorNear) / max(uColorFar - uColorNear, 1.0), 0.0, 1.0);

    blend = -.0 - dot(normal, vec3(0,1,0));
    vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 0.5, blend));
    color = mix(color, uColorC, smoothstep(0.5, 1.0, blend));

    float fog = smoothstep(uFogNear, max(uFogFar, uFogNear + 1.0), depth);
    return mix(color, uBackgroundColor, fog);
}

void mainImage(out vec4 color, in vec2 fragCoord) {
    vec2 screen = (fragCoord - iResolution.xy * 0.5) / iResolution.y;
    vec2 mousePosition = (iMouse.xy / iResolution.xy - 0.5) * vec2(3.14159265, 1.5);
    float focal = 1.0 / tan(radians(clamp(uFov, 1.0, 179.0)) * 0.5);

    vec3 cameraOffset = normalize(vec3(cos(mousePosition.x), mousePosition.y, sin(mousePosition.x)))
        * max(uOrbit, 1.0);
    cameraOffset = vec3(0,0,-1) * max(uOrbit, 1.0);
    vec3 cameraForward = normalize(-cameraOffset);
    vec3 cameraLeft = normalize(cross(cameraForward, vec3(0.0, 1.0, 0.0)));
    vec3 cameraUp = normalize(cross(cameraLeft, cameraForward));
    vec3 rayOrigin = cameraOffset + vec3(0.0, 0.0, uTravel);
    vec3 rayDirection = normalize(cameraForward * focal + screen.x * cameraLeft + screen.y * cameraUp);

    color = vec4(uBackgroundColor, 1.0);
    float smoothing = max(uSmoothing, 0.0001);
    vec2 interval = sceneInterval(rayOrigin, rayDirection, smoothing);
    if (interval.x > interval.y) return;

    animateSpheres();
    float depth = interval.x;
    for (int stepIdx = 0; stepIdx < MAX_STEPS; stepIdx++) {
        vec3 position = rayOrigin + depth * rayDirection;
        float distance = sampleSDF(position, smoothing);
        if (distance < max(uThreshold, 0.001)) {
            // vec3 normal = estimateNormal(position, smoothing);
            vec3 normal = vec3(0,1,0);
            color = vec4(distanceColor(depth, normal), 1.0);
            return;
        }
        depth += distance;
        if (depth > interval.y) return;
    }
}

void main() {
    mainImage(fragColor, gl_FragCoord.xy);
}
