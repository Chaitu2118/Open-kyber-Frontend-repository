import React from 'react';
import { useScrollContext } from '@/context/ScrollContext';
import sceneConfig from './config/sceneConfig';
import ChromeSphere from './objects/ChromeSphere';

export default function SceneManager({ children }) {
  const { scrollRef } = useScrollContext();

  const childrenWithConfig = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const displayName = child.type.displayName;

    // Filter out child ChromeBlob/ChromeSphere to prevent duplicate rendering
    if (displayName === 'ChromeBlob' || displayName === 'ChromeSphere') {
      return null;
    }

    if (displayName === 'CameraRig') {
      return React.cloneElement(child, {
        scrollRef
      });
    }

    if (displayName === 'Lights') {
      return React.cloneElement(child, {
        ambientIntensity: sceneConfig.lights.ambientIntensity,
        keyIntensity: sceneConfig.lights.keyIntensity,
        fillIntensity: sceneConfig.lights.fillIntensity,
        rimIntensity: sceneConfig.lights.rimIntensity,
        rimColor: sceneConfig.lights.rimColor
      });
    }

    return child;
  });

  // Position on the right side of the Hero with appropriate scale
  const position = [1.4, 0, 0];
  const scale = 1.6;

  return (
    <>
      {childrenWithConfig}
      <ChromeSphere position={position} scale={scale} />
    </>
  );
}

SceneManager.displayName = 'SceneManager';
