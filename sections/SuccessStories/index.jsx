import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import GlassCard from '@/components/common/GlassCard';

export default function SuccessStories() {
  const stories = [
    {
      title: "Vesper Labs Launch",
      metric: "+140%",
      metricLabel: "Dwell Time Increase",
      desc: "How we crafted a 3D glassmorphic product experience that kept users engaged and lifted sales pipelines."
    },
    {
      title: "Solas Web Portal",
      metric: "0.8s",
      metricLabel: "FCP Load Speed",
      desc: "Optimizing highly detailed asset packages to deliver blazing fast load-times on mobile networks."
    }
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        <SectionTitle 
          title="Engineered for Impact" 
          subtitle="Success Stories" 
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem'
        }} className="success-grid">
          {stories.map((story, idx) => (
            <GlassCard key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '3rem',
              minHeight: '300px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.25rem' }}>{story.title}</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>{story.desc}</p>
              </div>
              <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <span className="text-gradient" style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1 }}>{story.metric}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.5rem', fontWeight: 600 }}>{story.metricLabel}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .success-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .success-grid > div {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
