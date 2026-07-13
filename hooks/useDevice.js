import { useState, useEffect } from 'react';

export default function useDevice() {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true
  });

  useEffect(() => {
    // Placeholder device detection
  }, []);

  return device;
}
