import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./Model";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from 'three';

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
  const { m_pos, m_scale, dl_pos, pl_intensity, pl_distance, pl_decay, pl_color } = useControls('section1-graces', {
    'm_pos': [0, -4.5, 0],
    'm_scale': {
      value: 1.8,
      min: 1,
      max:5,
      step: 0.1
    },
    'dl_pos': [-100,0,-100],
    'pl_intensity': 2.7,
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
      {/* <ambientLight color='red' intensity={0.2}/> */}
      <directionalLight color='#435c72' intensity={0.8} position={dl_pos}/>
      <pointLight color={pl_color} ref={pointLight} intensity={pl_intensity} position={[30, 3, 1.8]} distance={pl_distance} decay={pl_decay} />
      <Model scale={m_scale} position={m_pos} />
    </>
  );
}

export default GracesCanvas;