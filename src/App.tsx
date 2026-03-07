import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SocialProof from './components/sections/SocialProof';
import Features from './components/sections/Features';
import ModernFeatures from './components/sections/ModernFeatures';
import HowItWorks from './components/sections/HowItWorks';
import Differentials from './components/sections/Differentials';
import StatsSection from './components/sections/StatsSection';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/layout/ScrollToTopButton';

export default function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <ModernFeatures />
        <HowItWorks />
        <Differentials />
        <StatsSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
