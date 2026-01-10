import React from 'react';
import HeroSection from './components/landing/HeroSection';
import FeaturesSection from './components/landing/FeaturesSection';
import TokenomicsSection from './components/landing/TokenomicsSection';
import RoadmapSection from './components/landing/RoadmapSection';
import HowToBuySection from './components/landing/HowToBuySection';
import CommunitySection from './components/landing/CommunitySection';
import Footer from './components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#12121c] text-white overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TokenomicsSection />
        <RoadmapSection />
        <HowToBuySection />
        <CommunitySection />
        <Footer />
      </div>
    </div>
  );
}