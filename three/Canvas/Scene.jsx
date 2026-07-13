import React, { Suspense } from 'react';
import CameraRig from '@/three/camera/CameraRig';
import Lights from '@/three/environment/Lights';
import Environment from '@/three/environment/Environment';
import ChromeSphere from '@/three/objects/ChromeSphere';
import Crystal from '@/three/objects/Crystal';
import FloatingCube from '@/three/objects/FloatingCube';
import BackgroundParticles from '@/three/objects/BackgroundParticles';
import Logo3D from '@/three/objects/Logo3D';

export default function Scene() {
  return (
    <>
      <Lights />
      <Suspense fallback={null}>
        <Environment />
      </Suspense>

      <CameraRig />

      <Suspense fallback={null}>
        <group name="objects-container">
          <ChromeSphere />
          <Crystal />
          <FloatingCube />
          <BackgroundParticles />
          <Logo3D />
        </group>
      </Suspense>
    </>
  );
}
