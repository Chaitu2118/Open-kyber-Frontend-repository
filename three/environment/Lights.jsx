import React from 'react';

export default function Lights({
  ambientIntensity = 0.3,
  keyIntensity = 1.5,
  fillIntensity = 0.8,
  rimIntensity = 2.5,
  rimColor = '#00f08a'
}) {
  return (
    <>
      {/* Ambient Light for baseline soft illumination */}
      <ambientLight intensity={ambientIntensity} color="#ffffff" />

      {/* Primary Key Light: Intense front-left light for strong specular highlights */}
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={keyIntensity} 
        color="#ffffff"
      />

      {/* Fill Light: Soft blue front-right light for cold metallic specular fills */}
      <directionalLight 
        position={[-6, 2, 4]} 
        intensity={fillIntensity} 
        color="#a0e0ff"
      />

      {/* Rim Light 1: Emerald green back light for glowing chrome contours */}
      <directionalLight 
        position={[-3, 6, -6]} 
        intensity={rimIntensity} 
        color={rimColor}
      />

      {/* Rim Light 2: Back-right white fill light to carve out the sphere profile */}
      <directionalLight 
        position={[4, -2, -5]} 
        intensity={1.0} 
        color="#ffffff"
      />
    </>
  );
}

Lights.displayName = 'Lights';
