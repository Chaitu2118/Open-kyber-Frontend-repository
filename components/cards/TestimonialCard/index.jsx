import React from 'react';
import GlassCard from '@/components/common/GlassCard';

export default function TestimonialCard({ quote, author, role, avatar }) {
  return (
    <GlassCard className="testimonial-card-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <p style={{ fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '2rem', color: '#e2e8f0' }}>
        "{quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(0, 240, 138, 0.3)'
        }}>
          {avatar ? (
            <img src={avatar} alt={author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{author ? author[0] : 'U'}</span>
          )}
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{author}</h4>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{role}</span>
        </div>
      </div>
    </GlassCard>
  );
}
