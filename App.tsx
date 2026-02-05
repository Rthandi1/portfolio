
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FastLane from './components/FastLane';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import About from './components/About';
import Footer from './components/Footer';
import GenAILab from './components/GenAILab';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Conversion Optimized Order based on Recruiter-First principles */}
      
      <Header />
      
      <main>
        {/* 1. Recruiter Decision Block (Hero) */}
        <Hero />
        
        {/* 2. Fast Lane Strip */}
        <FastLane />
        
        {/* 3. Experience Snapshot (Recruiters want work history first) */}
        <Experience />
        
        {/* 4. Interactive Proof: GenAI Lab (High Impact/Trendy) */}
        <GenAILab />
        
        {/* 5. Proof of Work (The "Meat") */}
        <Projects />
        
        {/* 6. Grouped Skills (Scanning convenience) */}
        <Skills />
        
        {/* 7. Credentials (Trust signals) */}
        <Certifications />
        
        {/* 8. Short About (The context) */}
        <About />
      </main>
      
      {/* 9. Final Frictionless CTA */}
      <Footer />
    </div>
  );
};

export default App;
