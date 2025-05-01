import React from 'react';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <div>
      <HeroSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default App;
