import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function SolarPanelModel() {
  // Simple geometry to represent a solar panel
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <boxGeometry args={[3, 2, 0.1]} />
      <meshStandardMaterial color="#1a365d" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

const SolarPanel3D = () => {
  return (
    <div className="h-[400px] w-full bg-gradient-to-b from-blue-50 to-transparent rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />
        <SolarPanelModel />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default SolarPanel3D;