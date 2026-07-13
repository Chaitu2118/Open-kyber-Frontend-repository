import gsap from 'gsap';

/**
 * Creates the intro entrance animation for the HeroSphere.
 * @param {HTMLElement} sphere - The target sphere wrapper element.
 * @returns {gsap.core.Timeline} The entrance timeline.
 */
export const createHeroTimeline = (sphere) => {
  const tl = gsap.timeline();

  tl.fromTo(
    sphere,
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

  return tl;
};
