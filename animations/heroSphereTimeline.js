import gsap from 'gsap';

/**
 * Creates and registers the entrance animation for the HeroSphere.
 * @param {HTMLElement} element - The target element to animate.
 */
export const createHeroSphereTimeline = (element) => {
  if (!element) return null;

  const tl = gsap.timeline();

  // Intro Animation: Opacity 0->1, Scale 0.85->1, translateY 40px->0, rotate 8deg->0deg
  tl.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.85,
      y: 40,
      rotation: 8
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      rotation: 0,
      duration: 1.2,
      ease: 'power3.out'
    }
  );

  return { timeline: tl };
};
