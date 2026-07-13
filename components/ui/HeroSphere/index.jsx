import React, { forwardRef } from 'react';
import sphereImg from '@/assets/images/chrome-sphere.png';

const HeroSphere = forwardRef(({ className = '', style = {}, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`hero-sphere-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        overflow: 'visible',
        ...style
      }}
      {...props}
    >
      <img
        src={sphereImg}
        alt="OpenKyber Chrome Sphere"
        className="hero-sphere-image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          maxWidth: '460px', // 18% size reduction (down from 560px)
          maxHeight: '460px',
          transform: 'translate3d(10%, -5%, 0)', // Position matching Figma
          imageRendering: 'auto', // CSS sharpness properties
          backfaceVisibility: 'hidden',
          willChange: 'transform',
          filter: 'drop-shadow(0 20px 48px rgba(0, 240, 138, 0.09))', // 20% glow reduction (down from 0.12)
          pointerEvents: 'none'
        }}
      />
    </div>
  );
});

HeroSphere.displayName = 'HeroSphere';

export default HeroSphere;
