/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Annotation from "./Annotation";

type GLTFResult = GLTF & {
  nodes: {
    Node_3: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshPhysicalMaterial;
  };
};

type ModelProps = JSX.IntrinsicElements['group'] & {
  showAnnotation: boolean,
}

const material = new THREE.MeshPhongMaterial({
  shininess: 45,
})

export function Model({ showAnnotation, ...props }: ModelProps) {
  const { nodes } = useGLTF("/graces-draco2.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node_3.geometry}
        material={material}
      >
        {/* <MeshTransmissionMaterial backside samples={8} resolution={512} thickness={0.3} roughness={0.2} anisotropy={1} chromaticAberration={0.2}/> */}
      </mesh>
      {
        showAnnotation && <>
          <Annotation scale={.2} position={[2.75, 3.5, 0.5]}>
            <div className="flex justify-center items-center gap-2">
              <span>
                Thalia
              </span>
              <span>🌗</span>
            </div>
          </Annotation>
          <Annotation scale={.2} position={[-2.5, 3.6, 1.5]}>
            <div className="flex justify-center items-center gap-2">
              <span>
                Euphrosyne
              </span>
              <span>🌖</span>
            </div>
          </Annotation>
          <Annotation scale={.2} position={[.5, 3.2, .5]}>
            <div className="flex justify-center items-center gap-2">
              <span>
                Aglaia
              </span>
              <span>🌕</span>
            </div>
          </Annotation>
        </>
      }
    </group>
  );
}

useGLTF.preload("/graces-draco2.glb");