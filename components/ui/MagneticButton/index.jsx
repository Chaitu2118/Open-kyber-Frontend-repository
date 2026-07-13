import React from 'react';

export default function MagneticButton({ children, ...props }) {
  return (
    <button className="magnetic-button" {...props}>
      <span className="magnetic-content">{children}</span>
    </button>
  );
}
