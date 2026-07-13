import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Creates the scroll-driven transition for the HeroSphere as the user scrolls into the Services section.
 * @param {HTMLElement} sphere - The target sphere wrapper element.
 * @returns {gsap.core.Timeline} The scroll timeline.
 */
export const createServicesTimeline = (sphere) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#services',
      start: 'top bottom', // When the top of Services enters the bottom of the viewport
      end: 'top 20%',     // When the top of Services reaches 20% from the top of the viewport
      scrub: 1.0,         // Premium scrub duration to create high-quality organic delay
      ease: 'none'
    }
  });

  tl.to(sphere, {
    x: '-12vw',       // Move leftward behind the cards
    y: '75vh',        // Move downward in viewport coordinate space
    scale: 0.65,      // Scale down to ~65%
    rotation: -45,    // Shift rotation slightly for dynamic detail
    ease: 'none'
  });

  return tl;
};
