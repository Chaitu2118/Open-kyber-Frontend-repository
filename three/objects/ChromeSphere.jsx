import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ChromeBlob({
  position = [1.4, 0, 0],
  rotation = [0, 0, 0],
  scale = 1.6,
  visible = true,
  scrollRef,
  ...props
}) {
  const meshRef = useRef();

  useFrame((state) => {
    const mesh = meshRef.current;
    if (mesh) {
      const time = state.clock.getElapsedTime();
      
      // Gentle floating using sine/cosine waves
      mesh.position.y = Math.sin(time * 0.8) * 0.05;
      mesh.position.x = Math.cos(time * 0.4) * 0.02;

      // Slow Y-axis rotation
      mesh.rotation.y = time * 0.04;
    }
  });

  if (!visible) return null;

  return (
    <group position={position} rotation={rotation} scale={scale} {...props}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={1.0}
          roughness={0.03}
          clearcoat={1.0}
          clearcoatRoughness={0.0}
          reflectivity={1.0}
          envMapIntensity={2.5}
          transmission={0.0}
          transparent={true}
        />
      </mesh>
    </group>
  );
}

ChromeBlob.displayName = 'ChromeBlob';
