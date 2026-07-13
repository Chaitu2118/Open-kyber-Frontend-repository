import { useState, useEffect } from 'react';

export default function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Placeholder mouse tracking
  }, []);

  return mouse;
}
