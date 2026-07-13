import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SceneManager from '../SceneManager';
import CameraRig from '../camera/CameraRig';
import Lights from '../environment/Lights';
import Environment from '../environment/Environment';
import ChromeBlob from '../objects/ChromeSphere';
import BackgroundParticles from '../objects/BackgroundParticles';
import Effects from '../effects';

export default function Experience() {
  return (
    <div 
      className="three-canvas-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
        backgroundColor: 'var(--bg-darker)',
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(8, 24, 16, 0.45) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(5, 40, 20, 0.3) 0%, transparent 50%)'
      }}
    >
      <Canvas
        dpr={[1, 2]}
        frameloop="always"
        shadows={false}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <SceneManager>
            <CameraRig />
            <Lights />
            <Suspense fallback={null}>
              <Environment />
            </Suspense>
            <ChromeBlob />
            <BackgroundParticles />
            <Effects />
          </SceneManager>
        </Suspense>
      </Canvas>
    </div>
  );
}
