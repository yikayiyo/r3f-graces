import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./Model";
import { PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import gsap from "gsap";

const GraceCanvas = ({tab}: {tab: string}) => {
  return <Canvas
    dpr={[1, 1.5]}
  >
    <color
      args={['#000']}
      attach='background'
    />
    <GraceScene tab={tab}/>
  </Canvas>
}

const GraceScene = ({tab} : {tab: string}) => {
  const { 
    m_pos, 
    m_scale, 
    // dl_pos, 
    // dl_pos2
  } = useControls('section2-grace', {
    'm_pos': [0, -4.5, 0],
    'm_scale': {
      value: 1.8,
      min: 1,
      max:5,
      step: 0.1
    },
    // 'dl_pos': [10,0,10],
    // 'dl_pos2': [-10,0,10],
  })
  
// camera position rotation
// [.3, -.8, 6.1] [0.06, 0.62, 0]
// [.2, -.5, 3.6] [0.21, 0.02, 0]
// [-.2, -.9, 2.5] [0.23, -0.9, 0]
  
  const { camera } = useThree()

  type TabConfig = {
    position: { x: number, y: number, z: number },
    rotation: { x: number, y: number, z: number }
  };
  type TabOptions = {
    [key: string]: TabConfig
  };
  const tabOptions: TabOptions = {
    'aglaea': {
      position: { x: 0.3, y: -0.8, z: 6.1 },
      rotation: { x: 0.06, y: 0.62, z: 0 }
    },
    'thalia': {
      position: { x: 0.2, y: -0.5, z: 3.6 },
      rotation: { x: 0.21, y: 0.02, z: 0 }
    },
    'euphre': {
      position: { x: -0.2, y: -0.9, z: 2.5 },
      rotation: { x: 0.23, y: -0.9, z: 0 }
    }
  };
  
  const tabConfig = tabOptions[tab];
  if (tabConfig) {
    gsap.to(camera.position, {
      ...tabConfig.position,
      duration: 1,
      ease: 'sine.inOut'
    });
    gsap.to(camera.rotation, {
      ...tabConfig.rotation,
      duration: 1,
      ease: 'sine.inOut'
    });
  }
  
  
  return (
    <>
      <PerspectiveCamera makeDefault />
      <ambientLight color='white' intensity={0.2}/>
      <directionalLight color='#435c72' intensity={0.8} position={[10,0,10]}/>
      <directionalLight color='#435c72' intensity={0.8} position={[-10,0,10]}/>
      <Model scale={m_scale} position={m_pos} />
    </>
  );
}

export default GraceCanvas;