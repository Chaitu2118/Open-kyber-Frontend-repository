import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';

export default function Clients() {
  const clientLogos = [
    'Stripe', 'Linear', 'Vercel', 'Apple', 'GSAP', 'Framer', 'Three.js'
  ];

  return (
    <section id="clients" style={{ background: 'var(--bg-darker)', padding: '4rem 0' }}>
      <div className="container">
        <SectionTitle 
          title="Loved by Industry Leaders" 
          subtitle="Happy Clients" 
        />
        <div className="logo-cloud" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4rem',
          flexWrap: 'wrap',
          opacity: 0.6
        }}>
          {clientLogos.map((logo, idx) => (
            <div key={idx} style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.03em',
              transition: 'var(--transition-fast)',
              cursor: 'default'
            }} className="client-logo">
              {logo}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .client-logo:hover {
          color: var(--color-primary) !important;
          opacity: 1;
        }
        @media (max-width: 768px) {
          .logo-cloud {
            gap: 2rem !important;
          }
          .client-logo {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
