import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import BlogCard from '@/components/cards/BlogCard';

export default function Blogs() {
  const blogPosts = [
    {
      title: "The Art of WebGL and React 19",
      excerpt: "Exploring the performance optimizations and bundle size tricks when running complex 3D experiences in React.",
      date: "OCT 12, 2026",
      image: ""
    },
    {
      title: "Why Interaction Elevates Conversion",
      excerpt: "Data-backed research showing how premium micro-interactions and scroll-timelines boost SaaS landing page conversions.",
      date: "SEP 28, 2026",
      image: ""
    },
    {
      title: "GSAP Timelines: Best Practices",
      excerpt: "Deep dive into timeline controls, smooth scrolling configurations, and coordinating animations across page modules.",
      date: "AUG 15, 2026",
      image: ""
    }
  ];

  return (
    <section id="blogs" style={{ background: 'rgba(2, 7, 4, 0.3)' }}>
      <div className="container">
        <SectionTitle 
          title="Insights & Innovation" 
          subtitle="Blogs" 
        />
        <div className="grid-3">
          {blogPosts.map((post, idx) => (
            <BlogCard 
              key={idx} 
              title={post.title} 
              excerpt={post.excerpt} 
              date={post.date} 
              image={post.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
