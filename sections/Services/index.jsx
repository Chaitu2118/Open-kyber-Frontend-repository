import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';

export default function Services() {
  const serviceItems = [
    {
      title: 'Interactive 3D Design',
      description: 'Stunning WebGL experiences using React Three Fiber, custom shaders, and particle systems that bring your products to life in the browser.',
      icon: '✦'
    },
    {
      title: 'Cinematic Animations',
      description: 'GSAP-driven scroll timelines, smooth parallax effects, and custom web transitions that keep users engaged throughout their journey.',
      icon: '⚡'
    },
    {
      title: 'Ultra-Performance Code',
      description: 'Optimized bundlers, lazy assets loading, and clean component architecture built on Vite and React 19 for instantaneous load speeds.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="services" style={{ background: 'rgba(2, 7, 4, 0.3)' }}>
      <div className="container">
        <SectionTitle 
          title="What We Build" 
          subtitle="Our Services" 
        />
        <div className="grid-3">
          {serviceItems.map((item, idx) => (
            <ServiceCard 
              key={idx} 
              title={item.title} 
              description={item.description} 
              icon={item.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
