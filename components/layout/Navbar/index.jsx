import React, { useState } from 'react';
import logo from '@/assets/images/logo.png';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', link: '#hero' },
    { id: 'about', label: 'About Us', link: '#about' },
    { id: 'services', label: 'Our Services', link: '#services' },
    { id: 'careers', label: 'Careers', link: '#careers' },
    { id: 'blogs', label: 'Blogs', link: '#blogs' }
  ];

  return (
    <nav className="navbar-container">
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo-link">
          <img src={logo} alt="OpenKyber Logo" className="navbar-logo" />
        </a>

        {/* Center Links */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={item.link} 
                className={`navbar-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div>
          <button className="btn-contact">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
