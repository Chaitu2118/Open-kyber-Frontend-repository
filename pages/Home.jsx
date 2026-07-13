import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Experience from '@/three/Canvas/Experience';
import useLenis from '@/hooks/useLenis';
import { useScrollContext } from '@/context/ScrollContext';
import { initScrollController } from '@/animations/scroll/ScrollController';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Hero,
  Services,
  Clients,
  Testimonials,
  SuccessStories,
  Blogs,
  CTA,
  FooterSection
} from '@/sections';
import { HeroSphere } from '@/components/ui';
import useHomepageAnimations from '@/hooks/useHomepageAnimations';

export default function Home() {
  // Initialize Lenis smooth scroll
  useLenis();

  const { scrollRef, setScrollState } = useScrollContext();
  const sphereRef = useRef(null);

  // Initialize master homepage sphere animations (intro + scroll trigger)
  useHomepageAnimations(sphereRef);

  useEffect(() => {
    const scrollTimeline = initScrollController(scrollRef, setScrollState);

    return () => {
      scrollTimeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollRef, setScrollState]);

  return (
    <main className="home-page" style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* <Experience /> */}
      <HeroSphere ref={sphereRef} />
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
      <SuccessStories />
      <Blogs />
      <CTA />
      <FooterSection />
      <Footer />
    </main>
  );
}
