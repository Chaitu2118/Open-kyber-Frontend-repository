import React from 'react';

export default function SectionTitle({ title, subtitle, align = 'center', className = '' }) {
  return (
    <div className={`section-title ${className}`} style={{ marginBottom: '3.5rem', textAlign: align }}>
      {subtitle && (
        <span style={{
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--color-primary)',
          display: 'block',
          marginBottom: '0.75rem'
        }}>
          {subtitle}
        </span>
      )}
      <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
        {title}
      </h2>
    </div>
  );
}
