import React, { forwardRef } from 'react';
import sphereImg from '@/assets/images/chrome-sphere.png';
import './HeroSphere.css';

const HeroSphere = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`hero-sphere-wrapper ${className}`}
      {...props}
    >
      {/* Background glow layer, adjustable independently of the image */}
      <div className="hero-sphere-glow" />
      
      {/* Sharp chrome sphere image layer */}
      <img
        src={sphereImg}
        alt="OpenKyber Chrome Sphere"
        className="hero-sphere-image"
      />
    </div>
  );
});

HeroSphere.displayName = 'HeroSphere';

export default HeroSphere;
