import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sceneConfig from '@/three/config/sceneConfig';

gsap.registerPlugin(ScrollTrigger);

export function initScrollController(scrollRef, setScrollState) {
  const target = scrollRef.current;
  
  // Section IDs mapping to HTML element triggers
  const sectionIds = ['hero', 'services', 'clients', 'testimonials', 'about', 'blogs', 'cta'];

  const width = window.innerWidth;
  const deviceKey = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
  const cfg = sceneConfig.sections;

  // Initialize camera and blob targets with Hero state
  target.camera.position = [...cfg.hero.camera.position];
  target.camera.fov = sceneConfig.camera.fov;

  target.blob.x = cfg.hero.blob[deviceKey].position[0];
  target.blob.y = cfg.hero.blob[deviceKey].position[1];
  target.blob.z = cfg.hero.blob[deviceKey].position[2];
  target.blob.scale = cfg.hero.blob[deviceKey].scale;
  target.blob.rotationX = cfg.hero.blob[deviceKey].rotation[0];
  target.blob.rotationY = cfg.hero.blob[deviceKey].rotation[1];
  target.blob.rotationZ = cfg.hero.blob[deviceKey].rotation[2];
  target.blob.opacity = 1.0;

  // Register section triggers for updating active React context states and camera presets
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        target.currentSection = id;
        setScrollState((prev) => ({ ...prev, currentSection: id }));

        // Apply camera preset for the active section (no GSAP animation yet, just preset jump/lerp)
        const sectionCfg = cfg[id === 'about' ? 'about' : id === 'cta' ? 'cta' : id];
        if (sectionCfg && sectionCfg.camera) {
          target.camera.position = [...sectionCfg.camera.position];
        }
      },
      onEnterBack: () => {
        target.currentSection = id;
        setScrollState((prev) => ({ ...prev, currentSection: id }));

        const sectionCfg = cfg[id === 'about' ? 'about' : id === 'cta' ? 'cta' : id];
        if (sectionCfg && sectionCfg.camera) {
          target.camera.position = [...sectionCfg.camera.position];
        }
      }
    });
  });

  // Create unified scroll timeline for the ChromeBlob mesh coordinates
  const masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-page',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.0,
      onUpdate: (self) => {
        target.progress = self.progress;
      }
    }
  });

  // Animate target blob properties across sections
  masterTimeline
    .to(target.blob, {
      x: cfg.services.blob[deviceKey].position[0],
      y: cfg.services.blob[deviceKey].position[1],
      z: cfg.services.blob[deviceKey].position[2],
      scale: cfg.services.blob[deviceKey].scale,
      rotationX: cfg.services.blob[deviceKey].rotation[0],
      rotationY: cfg.services.blob[deviceKey].rotation[1],
      rotationZ: cfg.services.blob[deviceKey].rotation[2],
      duration: 1,
      ease: 'none'
    })
    .to(target.blob, {
      x: cfg.about.blob[deviceKey].position[0],
      y: cfg.about.blob[deviceKey].position[1],
      z: cfg.about.blob[deviceKey].position[2],
      scale: cfg.about.blob[deviceKey].scale,
      rotationX: cfg.about.blob[deviceKey].rotation[0],
      rotationY: cfg.about.blob[deviceKey].rotation[1],
      rotationZ: cfg.about.blob[deviceKey].rotation[2],
      duration: 1,
      ease: 'none'
    })
    .to(target.blob, {
      x: cfg.testimonials.blob[deviceKey].position[0],
      y: cfg.testimonials.blob[deviceKey].position[1],
      z: cfg.testimonials.blob[deviceKey].position[2],
      scale: cfg.testimonials.blob[deviceKey].scale,
      rotationX: cfg.testimonials.blob[deviceKey].rotation[0],
      rotationY: cfg.testimonials.blob[deviceKey].rotation[1],
      rotationZ: cfg.testimonials.blob[deviceKey].rotation[2],
      duration: 1,
      ease: 'none'
    })
    .to(target.blob, {
      x: cfg.blogs.blob[deviceKey].position[0],
      y: cfg.blogs.blob[deviceKey].position[1],
      z: cfg.blogs.blob[deviceKey].position[2],
      scale: cfg.blogs.blob[deviceKey].scale,
      rotationX: cfg.blogs.blob[deviceKey].rotation[0],
      rotationY: cfg.blogs.blob[deviceKey].rotation[1],
      rotationZ: cfg.blogs.blob[deviceKey].rotation[2],
      duration: 1,
      ease: 'none'
    })
    .to(target.blob, {
      x: cfg.cta.blob[deviceKey].position[0],
      y: cfg.cta.blob[deviceKey].position[1],
      z: cfg.cta.blob[deviceKey].position[2],
      scale: cfg.cta.blob[deviceKey].scale,
      rotationX: cfg.cta.blob[deviceKey].rotation[0],
      rotationY: cfg.cta.blob[deviceKey].rotation[1],
      rotationZ: cfg.cta.blob[deviceKey].rotation[2],
      opacity: 0.1,
      duration: 1,
      ease: 'none'
    });

  return masterTimeline;
}
