import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const [scrollState, setScrollState] = useState({
    currentSection: 'hero',
    scrollProgress: 0,
    viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 768,
    isDesktop: true,
    isTablet: false,
    isMobile: false
  });

  // Shared mutable reference to bypass React re-renders during high-frequency scroll updates
  const scrollRef = useRef({
    progress: 0,
    currentSection: 'hero',
    camera: {
      position: [0, 0, 5],
      fov: 45
    },
    blob: {
      x: 1.4,
      y: 0,
      z: 0,
      scale: 1.6,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      visible: true,
      opacity: 1
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      setScrollState((prev) => ({
        ...prev,
        viewportHeight: height,
        isMobile,
        isTablet,
        isDesktop
      }));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollState, setScrollState, scrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
}
