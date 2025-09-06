import React from 'react';
import FluidGlass from './FluidGlass';
import portfolio from '../data/portfolio.json';

const FluidGlassPortfolio: React.FC = () => {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1595001354022-29103be3b73a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505069190533-da1c9af13346?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <section className="relative w-full rounded-3xl overflow-hidden" style={{ height: '100vh', background: 'transparent' }}>
      <div style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
        <FluidGlass 
          mode="lens"
          lensProps={{
            scale: 0.125,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01,
            navItems: [
              { label: 'Photography', link: '#photography' },
              { label: 'Video', link: '#video' },
              { label: 'Audio', link: '#audio' },
              { label: 'Design', link: '#design' }
            ]
          }}
        />
      </div>
    </section>
  );
};

export default FluidGlassPortfolio;
