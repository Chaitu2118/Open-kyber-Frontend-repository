import React from 'react';
import Button from '@/components/common/Button';
import GlassPanel from '@/components/ui/GlassPanel';

export default function CTA() {
  return (
    <section id="cta" style={{
      background: 'radial-gradient(circle at center, rgba(0, 240, 138, 0.08) 0%, transparent 70%)',
      padding: '8rem 2rem'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <GlassPanel style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2 }}>
            Ready to Build a Premium Web Experience?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Elevate your product's landing page with modern 3D graphics, fluid scroll interactions, and performance-first architecture. Let's create something memorable.
          </p>
          <div style={{ marginTop: '0.5rem' }}>
            <Button variant="primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Start Your Project
            </Button>
          </div>
        </GlassPanel>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #cta {
            padding: 4rem 1.5rem !important;
          }
          #cta h2 {
            font-size: 2rem !important;
          }
          #cta .glass-panel {
            padding: 2.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
