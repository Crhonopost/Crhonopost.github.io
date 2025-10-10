attribute float offset;
attribute float height;

varying vec2 fragUV;
varying float sliceHeight;
varying float vFogDepth;

vec3 displacementDir = vec3(0,-1,0);
uniform float curvature;
uniform float displacementStrength;
uniform sampler2D heightMap;

uniform vec2 rotationalForce;// = 0.05f;

mat3 extractRotationMatrix( mat4 mat ) {
    return mat3( mat[0].xyz, mat[1].xyz, mat[2].xyz );
}

vec3 getCameraPosition(mat4 viewMatrix) {
    mat3 rot = mat3(viewMatrix);
    vec3 t = vec3(viewMatrix[3]);
    return -transpose(rot) * t;
}

void main() {
    fragUV = uv;
    sliceHeight = height;
    mat3 invRot = inverse(extractRotationMatrix(modelMatrix)); 

    vec3 tangent;
    if(normal.y >= 0.99f){
        tangent = cross(vec3(1, 0, 0), normal) ;
    } else {
        tangent = cross(vec3(0,1,0), normal);
    }
    vec3 up = cross(normal, tangent);

    // float clampedRotationalForce = clamp(rotationalForce, -0.1f, 0.1f);
    vec3 rotationalVector = tangent * rotationalForce.x + up * rotationalForce.y;
    
    vec3 pos = position + texture(heightMap, uv).x * normal;
    pos += rotationalVector * height;
    pos += normal * offset * (1.f + length(rotationalVector));
    pos += invRot * displacementDir * displacementStrength * pow(height, curvature);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}