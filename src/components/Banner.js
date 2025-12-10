import React from 'react';
import './Banner.css';

function Banner({ title, navItems }) {
  return (
    <header className="banner">
      <h1 className="banner-title">{title}</h1>
      {navItems && navItems.length > 0 && (
        <nav className="banner-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="nav-link">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Banner;

