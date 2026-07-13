import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import TestimonialCard from '@/components/cards/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "OpenKyber built a landing page that completely transformed our conversion rate. The premium feel matches our product design beautifully.",
      author: "Sarah Jenkins",
      role: "Design Lead at Linear",
      avatar: ""
    },
    {
      quote: "Working with this team was seamless. The attention to performance detail and layout fluidity is second to none.",
      author: "David Chen",
      role: "VP of Product at Vercel",
      avatar: ""
    },
    {
      quote: "Our interactive product showcase blew our users away. We saw a 30% increase in dwell time on the page within the first week.",
      author: "Elena Rostova",
      role: "Founder at Aura",
      avatar: ""
    }
  ];

  return (
    <section id="testimonials" style={{ background: 'rgba(2, 7, 4, 0.2)' }}>
      <div className="container">
        <SectionTitle 
          title="What Our Partners Say" 
          subtitle="Testimonials" 
        />
        <div className="grid-3">
          {testimonials.map((item, idx) => (
            <TestimonialCard 
              key={idx} 
              quote={item.quote} 
              author={item.author} 
              role={item.role} 
              avatar={item.avatar} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
