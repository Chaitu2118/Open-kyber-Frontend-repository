import { createHeroTimeline } from './heroTimeline';
import { createServicesTimeline } from './servicesTimeline';

/**
 * Coordinates and returns the section timelines under a unified master control structure.
 * @param {HTMLElement} sphere - The target sphere wrapper element.
 * @returns {Object} The mapped timeline instances.
 */
export const createMasterTimeline = (sphere) => {
  if (!sphere) return null;

  // Initialize the independent section timelines
  const heroTimeline = createHeroTimeline(sphere);
  const servicesTimeline = createServicesTimeline(sphere);

  return {
    heroTimeline,
    servicesTimeline
  };
};
