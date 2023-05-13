import React from 'react';

// import components
import Hero from '../components/homepage/hero';
import About from '../components/homepage/about';
import GallerySection from '../components/homepage/gallerySection';
import Skills from '../components/homepage/skills';
import Interview from '../components/homepage/interview';
import Testimonial from '../components/homepage/testimonial';
import Contact from '../components/homepage/contact';

export default function HomePage() {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
    </div>
  );
}
