import React from 'react';
import './Footer.css';

function Footer({ copyright, date }) {
  return (
    <footer className="footer">
      <p className="copyright">{copyright}</p>
      <p className="date">{date}</p>
    </footer>
  );
}

export default Footer;

