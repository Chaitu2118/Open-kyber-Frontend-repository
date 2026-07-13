import React from 'react';

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <div className={`glass-panel ${className}`} style={{ borderRadius: '1.25rem', padding: '2rem' }} {...props}>
      {children}
    </div>
  );
}
