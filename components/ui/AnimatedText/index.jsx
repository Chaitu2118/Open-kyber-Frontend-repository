import React from 'react';

export default function AnimatedText({ text, className = '' }) {
  return (
    <span className={`animated-text ${className}`}>
      {text}
    </span>
  );
}
