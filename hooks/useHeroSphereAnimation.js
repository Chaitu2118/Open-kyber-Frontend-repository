import { useEffect } from 'react';
import gsap from 'gsap';
import { createHeroSphereTimeline } from '@/animations/heroSphereTimeline';

/**
 * Handles the GSAP lifecycle for the HeroSphere, playing the entrance animation and cleaning up.
 * @param {React.RefObject} containerRef - The ref container of the sphere.
 */
export default function useHeroSphereAnimation(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const image = container.querySelector('.hero-sphere-image');

    // Create GSAP Context for the intro animation (safeguards against React double-renders)
    const ctx = gsap.context(() => {
      if (image) {
        createHeroSphereTimeline(image);
      }
    }, container);

    // Clean up animation references on unmount
    return () => {
      ctx.revert();
    };
  }, [containerRef]);
}
