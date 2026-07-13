import React from 'react';

export default function GradientButton({ children, ...props }) {
  return (
    <button className="gradient-button" {...props}>
      {children}
    </button>
  );
}
