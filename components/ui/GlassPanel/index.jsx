import React from 'react';

export default function GlassPanel({ children, className = '', style = {}, ...props }) {
  return (
    <div className={`glass-panel ${className}`} style={{ borderRadius: '1.5rem', padding: '2.5rem', ...style }} {...props}>
      {children}
    </div>
  );
}
