import React from 'react';
import Providers from '@/app/providers';
import Home from '@/pages/Home';

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
