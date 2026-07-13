import React from 'react';
import Button from '@/components/common/Button';

export default function Hero() {
  return (
    <section id="hero" style={{
      paddingTop: 'calc(var(--navbar-height) + 6rem)',
      paddingBottom: '8rem',
      background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 138, 0.05) 0%, transparent 60%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '85vh',
      position: 'relative',
      overflow: 'visible'
    }}>
      {/* Center Aligned Content Container */}
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2 // Keeps text in front of the background sphere
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(0, 240, 138, 0.06)',
          border: '1px solid rgba(0, 240, 138, 0.15)',
          padding: '0.6rem 1.2rem',
          borderRadius: '2rem',
          color: 'var(--color-primary)',
          fontSize: '0.85rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '36px' // exact spacing
        }}>
          <span style={{ display: 'inline-block', width: '6px', height: '6px', background: 'var(--color-primary)', borderRadius: '50%' }} />
          Introducing AI Automation
        </div>

        {/* Heading (Exactly Two Lines) */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
          fontWeight: 800,
          lineHeight: 1.05, // exact line-height
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.03em', // tightened letter spacing
          maxWidth: '920px', // exact max-width
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          marginBottom: '32px', // exact spacing
          whiteSpace: 'pre-line' // respects line breaks
        }}>
          Building Technology Solutions{'\n'}That Power Business Growth
        </h1>

        {/* Sub Heading */}
        <div style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
          fontWeight: 600,
          color: 'var(--color-primary)',
          letterSpacing: '0.02em',
          maxWidth: '900px', // exact max-width
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          marginBottom: '44px' // exact spacing
        }} className="hero-subheading">
          We Engineer your Software Success & Digital Transformation.
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7, // exact line-height
          maxWidth: '760px', // exact max-width
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          marginBottom: '70px' // exact spacing
        }}>
          OpenKyber helps organizations accelerate innovation through custom software development, managed IT services, and strategic technology consulting—delivering scalable solutions that drive efficiency, performance, and long-term success.
        </p>

        {/* Statistics Grid */}
        <div className="hero-stats-row" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '960px', // Constrain width of statistics to keep them centered
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '2rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <span className="stat-number" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>100%</span>
            <span className="stat-label" style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 500, lineHeight: 1.3 }}>Client Focused Solutions</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <span className="stat-number" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>24/7</span>
            <span className="stat-label" style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 500, lineHeight: 1.3 }}>Managed IT Support</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <span className="stat-number" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>End to End</span>
            <span className="stat-label" style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 500, lineHeight: 1.3 }}>Technology Services</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <span className="stat-number" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>Enterprise</span>
            <span className="stat-label" style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 500, lineHeight: 1.3 }}>Technology Expertise</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-subheading {
            white-space: normal !important;
          }
          .hero-stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .hero-stats-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
