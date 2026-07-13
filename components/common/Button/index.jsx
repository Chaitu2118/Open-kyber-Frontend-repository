import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const btnClass = variant === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
  return (
    <button className={`${btnClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
