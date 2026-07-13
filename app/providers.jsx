import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { ScrollProvider } from '@/context/ScrollContext';

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <ScrollProvider>
        {children}
      </ScrollProvider>
    </ThemeProvider>
  );
}
