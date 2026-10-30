struct ColorGradient {
    vec3 color;
    float stamp;
};

const int nbColors = 2;


uniform float scale;
uniform float colorTextureScale;
uniform float threshold;
uniform float thicknessBot;
uniform float thicknessTop;
uniform ColorGradient[nbColors] colors;
uniform bool useColorTexture;
uniform sampler2D shapeTexture;
uniform sampler2D colorTexture;
uniform sampler2D voronoise;
uniform vec3 clearColor;

uniform vec2 uvOffset;
uniform bool applyFog;

varying vec2 fragUV;
varying float sliceHeight;
varying float vFogDepth;


//////// taken from shaderToy
// Gold Noise ©2015 dcerisano@standard3d.com
// - based on the Golden Ratio
// - uniform normalized distribution
// - fastest static noise generator function (also runs at low precision)
// - use with indicated fractional seeding method

const float PHI = 1.61803398874989484820459; // Φ = Golden Ratio 

float gold_noise(in vec2 xy, in float seed)
{
    return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);
}
const float seed = 0.1;
///////

float map(float v, float l0, float h0, float ln, float hn){
    float num = (v - l0) * (hn - ln);
    float denom = h0 - l0;
    return ln + (num / denom);
}
vec2 map(vec2 v, vec2 l0, vec2 h0, vec2 ln, vec2 hn){
    vec2 num = (v - l0) * (hn - ln);
    vec2 denom = h0 - l0;
    return ln + (num / denom);
}

vec2 toCenter(vec2 vec){
    return vec - vec2(0.5);
}

vec2 fromCenter(vec2 vec){
    return vec + vec2(0.5);
}


vec3 toLinear(vec3 srgb) {
    return pow(srgb, vec3(2.2));
}
vec3 toSRGB(vec3 linear) {
    return pow(linear, vec3(1.0/2.2));
}

void main() {
    vec2 UV = fragUV + uvOffset;
    UV = mod(UV, vec2(scale));


    vec2 scaledUV = UV * scale;
    vec2 newUV = fract(scaledUV);
    vec2 cellIdx = scaledUV - newUV;

    float n1 = gold_noise(cellIdx, seed);
    float n2 = gold_noise(cellIdx, seed + 0.1);
    // float n2 = texture(voronoise, cellIdx / scale + vec2(37.0, 91.0)).r; // offset arbitraire
    vec2 strandOffset = vec2(n2, n1) * 0.3;

    // float randNum = randS(uint((cellIdx.x + sin(cellIdx.y)) * 10.f)) * 0.5f;
    newUV += strandOffset;
    

    float maxHeight = gold_noise(cellIdx, seed) + threshold;
    vec2 centeredUV = toCenter(newUV);// + strandOffset;
    
    // Calculate progression toward max reachable height
    float currentHeight = map(sliceHeight, 0.f, maxHeight, 0.f, 1.f);

    float currentThickness = map(currentHeight, 0.f, 1.f, thicknessBot, thicknessTop);
    centeredUV /= currentThickness;

    newUV = fromCenter(centeredUV);

    if(sliceHeight > 0.f){
        if(texture(shapeTexture, newUV).r < 0.5) discard;

        if (sliceHeight > maxHeight){ // || distFromCenter > thickness * (h - sliceHeight)) {
            discard;
        }
    }

    vec3 finalColor;
    if(!useColorTexture){
        float progression = map(sliceHeight, colors[0].stamp, colors[1].stamp, 0.f, 1.f);        
        finalColor = mix(colors[0].color, colors[1].color, progression);
        // finalColor = vec3(mod(UV, vec2(1.0)), 0.5) *progression;
    } else {
        finalColor = texture(colorTexture, fragUV * colorTextureScale).rgb * sliceHeight;
    }


    if(applyFog){
        vec3 srgb = pow(clearColor, vec3(1.0/2.2));
        float depth = length(fragUV - vec2(0.5));
        float viewRange = smoothstep(0.f, 1.f, depth * 8.f);

        vec3 linearA = toLinear(finalColor);
        vec3 linearB = toLinear(srgb);
        vec3 mixedLinear = mix(linearA, linearB, viewRange);
        finalColor = toSRGB(mixedLinear);
    }
    // finalColor = vec3(strandOffset, 0.5);
    gl_FragColor = vec4(finalColor, 1.0);


    // float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    // gl_FragColor.rgb = mix(finalColor, fogColor, fogFactor);
}
