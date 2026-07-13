import React from 'react';
import GlassCard from '@/components/common/GlassCard';

export default function ServiceCard({ title, description, icon }) {
  return (
    <GlassCard className="service-card-wrapper" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {icon && (
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: 'rgba(0, 240, 138, 0.1)',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          fontSize: '1.5rem'
        }}>
          {icon}
        </div>
      )}
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>{title}</h3>
      <p style={{ fontSize: '0.975rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{description}</p>
    </GlassCard>
  );
}
