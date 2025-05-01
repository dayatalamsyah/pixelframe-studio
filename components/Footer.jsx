import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} PixelFrame Studio Indonesia. All rights reserved.</p>
      <p>
        <a href="#">Instagram</a> | <a href="#">WhatsApp</a> | <a href="#">Email</a>
      </p>
    </footer>
  );
};

export default Footer;
