// components/ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services">
      <h2>Layanan Kami</h2>
      <div className="grid">
        <div className="service">
          <h3>Desain Logo & Branding Kit</h3>
          <p>Kami bantu wujudkan identitas visual yang kuat dan profesional.</p>
        </div>
        <div className="service">
          <h3>Website Profesional</h3>
          <p>Dari landing page hingga toko online, kami bantu bangun website impian Anda.</p>
        </div>
        <div className="service">
          <h3>Manajemen Media Sosial</h3>
          <p>Desain feed yang konsisten dan menarik untuk Instagram, Facebook, dan lainnya.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
