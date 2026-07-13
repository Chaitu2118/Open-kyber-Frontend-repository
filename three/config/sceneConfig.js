export const sceneConfig = {
  // Global lights intensity configuration
  lights: {
    ambientIntensity: 0.4,
    keyIntensity: 1.2,
    fillIntensity: 0.4,
    rimIntensity: 1.5,
    rimColor: '#00f08a'
  },

  // Perspective Camera FOV presets
  camera: {
    fov: 45,
    near: 0.1,
    far: 100
  },

  // 3D Object Transforms mapped by section and viewport size
  sections: {
    hero: {
      camera: { position: [0, 0, 5] },
      blob: {
        desktop: { position: [1.4, 0, 0], scale: 1.6, rotation: [0, 0, 0], visible: true },
        tablet: { position: [0.9, 0, 0], scale: 1.3, rotation: [0, 0, 0], visible: true },
        mobile: { position: [0, -0.8, 0], scale: 0.9, rotation: [0, 0, 0], visible: true }
      }
    },
    about: {
      camera: { position: [0, 0, 5] },
      blob: {
        desktop: { position: [0, 0, -2], scale: 1.4, rotation: [0, 0, 0], visible: true },
        tablet: { position: [0, 0, -2], scale: 1.1, rotation: [0, 0, 0], visible: true },
        mobile: { position: [0, 0, -2], scale: 0.8, rotation: [0, 0, 0], visible: true }
      }
    },
    services: {
      camera: { position: [0, 0, 5] },
      blob: {
        desktop: { position: [-1.4, 0, -1], scale: 1.2, rotation: [0, 0.5, 0], visible: true },
        tablet: { position: [-0.9, 0, -1], scale: 1.0, rotation: [0, 0.5, 0], visible: true },
        mobile: { position: [0, -0.6, -1], scale: 0.8, rotation: [0, 0.5, 0], visible: true }
      }
    },
    testimonials: {
      camera: { position: [0, 0, 5] },
      blob: {
        desktop: { position: [1.2, -0.2, -1], scale: 1.3, rotation: [0.2, 0.2, 0], visible: true },
        tablet: { position: [0.8, -0.2, -1], scale: 1.0, rotation: [0.2, 0.2, 0], visible: true },
        mobile: { position: [0, -0.5, -1], scale: 0.75, rotation: [0.2, 0.2, 0], visible: true }
      }
    },
    blogs: {
      camera: { position: [0, 0, 5] },
      blob: {
        desktop: { position: [-1.2, 0.2, -1], scale: 1.1, rotation: [-0.2, -0.2, 0], visible: true },
        tablet: { position: [-0.8, 0.2, -1], scale: 0.9, rotation: [-0.2, -0.2, 0], visible: true },
        mobile: { position: [0, 0.4, -1], scale: 0.7, rotation: [-0.2, -0.2, 0], visible: true }
      }
    },
    cta: {
      camera: { position: [0, 0, 5] },
      blob: {
        desktop: { position: [0, -1.5, -2], scale: 2.0, rotation: [0, 0, 0], visible: true },
        tablet: { position: [0, -1.2, -2], scale: 1.5, rotation: [0, 0, 0], visible: true },
        mobile: { position: [0, -1.0, -2], scale: 1.0, rotation: [0, 0, 0], visible: true }
      }
    }
  }
};

export default sceneConfig;
