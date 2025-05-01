// components/PortfolioSection.jsx
import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <h2>Portofolio</h2>
      <div className="grid">
        <div className="portfolio-item">
          <h3>Branding UMKM Kopi</h3>
          <p>Desain logo dan identitas visual untuk usaha kopi lokal.</p>
        </div>
        <div className="portfolio-item">
          <h3>Landing Page Startup</h3>
          <p>Website profesional untuk startup teknologi finansial.</p>
        </div>
        <div className="portfolio-item">
          <h3>Feed Instagram Toko Fashion</h3>
          <p>Desain konten yang menarik dan konsisten untuk Instagram fashion brand.</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
