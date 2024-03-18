import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./Model";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from 'three';
import Caustics from "./Caustics";

const GracesCanvas = () => {
  return <Canvas
    dpr={[1, 1.5]}
  >
    <color
      args={['#000']}
      attach='background'
    />
    <GracesScene />
  </Canvas>
}


const GracesScene = () => {
  const pointLight = useRef<THREE.PointLight>(null!)
  const { m_pos, m_scale, pl_intensity, pl_distance, pl_decay, pl_color } = useControls('section1-graces', {
    'm_pos': [0, -4.5, 0],
    'm_scale': {
      value: 1.8,
      min: 1,
      max:5,
      step: 0.1
    },
    'pl_intensity': 27,
    'pl_distance': 4,
    'pl_decay': 2,
    'pl_color': {
      value: '#88b2d9'
    }
  })

  // const [vec] = useState(new THREE.Vector3())

  useFrame((state, delta) => {
    const parallaxX = state.pointer.x
    const parallaxY = state.pointer.y
    if (pointLight.current) {
      pointLight.current.position.x += (parallaxX * 8 - pointLight.current.position.x) * 2 * delta
      pointLight.current.position.y += (parallaxY * 8 - pointLight.current.position.y) * 2 * delta
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <hemisphereLight args={[0x88b2d9, 0x000, .2]}/>
      <pointLight color={pl_color} ref={pointLight} intensity={pl_intensity} position={[30, 32, 3.2]} distance={pl_distance} decay={pl_decay} />
      <Caustics>
        <Model scale={m_scale} position={m_pos} showAnnotation={false} />
      </Caustics>
    </>
  );
}

export default GracesCanvas;