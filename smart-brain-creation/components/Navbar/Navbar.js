

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Function to check if link is active
  const isActiveLink = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
<Link href="/"> <img className='logo' src="/logo.png" alt='Smart Brain Creations Logo' /></Link>

      {/* Desktop Menu */}
      <div className='navbar-btns desktop-menu'>
        <Link href="/" className={isActiveLink('/') ? 'active' : ''} onClick={closeMenu}>Home</Link>
        <Link href="/about" className={isActiveLink('/about') ? 'active' : ''} onClick={closeMenu}>About Us</Link>
        <Link href="/programs" className={isActiveLink('/programs') ? 'active' : ''} onClick={closeMenu}>Programs</Link>
        <Link href="/labs" className={isActiveLink('/labs') ? 'active' : ''} onClick={closeMenu}>Labs</Link>
        <Link href="/whyitworks" className={isActiveLink('/whyitworks') ? 'active' : ''} onClick={closeMenu}>Why It Works</Link>
        <Link href="/showcase" className={isActiveLink('/showcase') ? 'active' : ''} onClick={closeMenu}>Showcase</Link>
        <Link href="/contact" className={isActiveLink('/contact') ? 'active' : ''} onClick={closeMenu}>Contact Us</Link>
        
        <Link href="/gamezone" className={isActiveLink('/gamezone') ? 'active' : ''} onClick={closeMenu}>GameZone</Link>
        
        <button className='bookLiveDemo'>Book LIVE Demo</button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link href="/" className={isActiveLink('/') ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link href="/about" className={isActiveLink('/about') ? 'active' : ''} onClick={closeMenu}>About Us</Link>
          <Link href="/programs" className={isActiveLink('/programs') ? 'active' : ''} onClick={closeMenu}>Programs</Link>
          <Link href="/labs" className={isActiveLink('/labs') ? 'active' : ''} onClick={closeMenu}>Labs</Link>
          <Link href="/whyitworks" className={isActiveLink('/whyitworks') ? 'active' : ''} onClick={closeMenu}>Why It Works</Link>
          <Link href="/showcase" className={isActiveLink('/showcase') ? 'active' : ''} onClick={closeMenu}>Showcase</Link>
          <Link href="/contact" className={isActiveLink('/contact') ? 'active' : ''} onClick={closeMenu}>Contact Us</Link>
           <Link href="/gamezone" className={isActiveLink('/gamezone') ? 'active' : ''} onClick={closeMenu}>GameZone</Link>
          
         
          
          <button className='bookLiveDemo mobile-bookLiveDemo'>Book LIVE Demo</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;