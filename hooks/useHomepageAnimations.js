import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createMasterTimeline } from '@/animations/masterTimeline';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes and manages the lifecycle of the homepage GSAP timelines,
 * binding ScrollTrigger scroll-driven events to the sphere ref.
 * @param {React.RefObject} sphereRef - The ref containing the DOM node of the HeroSphere.
 */
export default function useHomepageAnimations(sphereRef) {
  useEffect(() => {
    if (!sphereRef.current) return;

    const sphere = sphereRef.current;

    // Initialize GSAP Context for the master timelines to clean up double-renders in React 19
    const ctx = gsap.context(() => {
      createMasterTimeline(sphere);
    });

    // Clean up timelines, revert DOM states, and kill active ScrollTriggers on unmount
    return () => {
      ctx.revert();
    };
  }, [sphereRef]);
}
