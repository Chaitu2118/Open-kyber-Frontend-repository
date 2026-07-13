import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export default function CameraRig({ scrollRef }) {
  const cameraRef = useRef();

  useFrame(() => {
    if (!scrollRef || !scrollRef.current || !cameraRef.current) return;

    const targetCamera = scrollRef.current.camera;
    if (!targetCamera || !targetCamera.position) return;

    const targetX = typeof targetCamera.position[0] === 'number' ? targetCamera.position[0] : 0;
    const targetY = typeof targetCamera.position[1] === 'number' ? targetCamera.position[1] : 0;
    const targetZ = typeof targetCamera.position[2] === 'number' ? targetCamera.position[2] : 5;
    const targetFov = typeof targetCamera.fov === 'number' ? targetCamera.fov : 45;

    // Smoothly lerp camera positions with fallbacks
    cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, targetX, 0.08);
    cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetY, 0.08);
    cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetZ, 0.08);

    // Smoothly lerp camera FOV
    if (cameraRef.current.fov !== targetFov) {
      cameraRef.current.fov = THREE.MathUtils.lerp(cameraRef.current.fov, targetFov, 0.08);
      cameraRef.current.updateProjectionMatrix();
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 5]}
      fov={45}
      near={0.1}
      far={100}
    />
  );
}

CameraRig.displayName = 'CameraRig';
