import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Placeholder scroll position tracking
  }, []);

  return scroll;
}
