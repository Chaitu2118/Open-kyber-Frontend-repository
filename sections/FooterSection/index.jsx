import React from 'react';

export default function FooterSection() {
  return (
    <section id="footer-section" style={{
      background: '#010302',
      borderTop: '1px solid var(--border-glass)',
      paddingTop: '5rem',
      paddingBottom: '3rem'
    }}>
      <div className="container footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: '3rem',
        marginBottom: '2rem'
      }}>
        {/* Brand & Newsletter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <a href="#hero" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            <span style={{ color: 'var(--color-primary)' }}>O</span>pen<span style={{ color: 'var(--color-primary)' }}>K</span>yber
          </a>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Crafting premium interactive digital experiences for next-generation brands.
          </p>
          {/* Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>Subscribe to Newsletter</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-glass)',
                  padding: '0.75rem 1rem',
                  borderRadius: '9999px',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  flexGrow: 1,
                  fontFamily: 'var(--font-sans)'
                }} 
              />
              <button style={{
                background: 'var(--color-primary)',
                color: '#000',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}>
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Links Column 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4 style={{ fontSize: '1rem', color: '#fff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Services</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
            <li><a href="#" className="footer-link">Interactive WebGL</a></li>
            <li><a href="#" className="footer-link">SaaS Landing Pages</a></li>
            <li><a href="#" className="footer-link">Cinematic Scroll Design</a></li>
            <li><a href="#" className="footer-link">Core React Engineering</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4 style={{ fontSize: '1rem', color: '#fff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Our Work</a></li>
            <li><a href="#" className="footer-link">Careers</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4 style={{ fontSize: '1rem', color: '#fff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connect</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
            <li><a href="#" className="footer-link">Twitter / X</a></li>
            <li><a href="#" className="footer-link">Awwwards</a></li>
            <li><a href="#" className="footer-link">GitHub</a></li>
            <li><a href="#" className="footer-link">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--color-primary);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
