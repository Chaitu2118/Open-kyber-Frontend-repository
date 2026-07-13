import React from 'react';
import GlassCard from '@/components/common/GlassCard';

export default function BlogCard({ title, excerpt, date, image, url }) {
  return (
    <GlassCard className="blog-card-wrapper" style={{ padding: '0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', height: '200px', background: 'rgba(255,255,255,0.02)', overflow: 'hidden', position: 'relative' }}>
        {image ? (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(8,26,16,0.8), rgba(0,240,138,0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: 'var(--color-primary)',
            fontWeight: 600
          }}>
            OpenKyber Insights
          </div>
        )}
      </div>
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', marginBottom: '0.75rem', fontWeight: 600, display: 'block' }}>{date}</span>
        <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.75rem', fontWeight: 600, lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: '1' }}>{excerpt}</p>
        <a href={url || '#'} style={{
          fontSize: '0.95rem',
          color: 'var(--color-primary)',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          Read Article <span>→</span>
        </a>
      </div>
    </GlassCard>
  );
}
