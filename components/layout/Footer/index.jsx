import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-glass)',
      background: 'var(--bg-darker)',
      padding: '2rem 0',
      fontSize: '0.9rem',
      color: 'var(--color-text-muted)',
      textAlign: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          &copy; {new Date().getFullYear()} OpenKyber. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
          <a href="#" style={{ transition: 'var(--transition-fast)' }}>Privacy Policy</a>
          <a href="#" style={{ transition: 'var(--transition-fast)' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
