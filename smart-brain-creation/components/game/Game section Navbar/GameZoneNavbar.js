




import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoGameControllerOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

function GameZoneNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const isActiveLink = (path) => {
    if (path === '/gamezone') {
      return router.pathname === '/gamezone';
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
      {/* <img className='logo' src={logo} alt='Logo' /> */}
           <Link href="/"> <img className='logo' src="/logo.png" alt='Logo' /></Link>
      

      {/* Desktop Menu */}
      <div className='navbar-btns desktop-menu'>
        <Link href="/gamezone" className={isActiveLink('/gamezone') ? 'active' : ''} onClick={closeMenu}>Home</Link>
        <Link href="/gamezone/about" className={isActiveLink('/gamezone/about') ? 'active' : ''} onClick={closeMenu}>About Us</Link>
        <Link href="/gamezone/contact" className={isActiveLink('/gamezone/contact') ? 'active' : ''} onClick={closeMenu}>Contact Us</Link>
        <Link href="/gamezone/terms" className={isActiveLink('/gamezone/terms') ? 'active' : ''} onClick={closeMenu}>Terms</Link>

        
        <Link href="/gamezone">
        <button className='gameZone'>
          <IoGameControllerOutline className='icons' /> GameZone
        </button>
        </Link>
        
      </div>


      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link href="/gamezone" className={isActiveLink('/gamezone') ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link href="/gamezone/about" className={isActiveLink('/gamezone/about') ? 'active' : ''} onClick={closeMenu}>About Us</Link>
          <Link href="/gamezone/contact" className={isActiveLink('/gamezone/contact') ? 'active' : ''} onClick={closeMenu}>Contact</Link>
          <Link href="/gamezone/terms" className={isActiveLink('/gamezone/terms') ? 'active' : ''} onClick={closeMenu}>Terms</Link>
          
          <Link href="/gamezone">
         <button className='gameZone mobile-gameZone'>
            <IoGameControllerOutline className='icons' /> GameZone
          </button> </Link>
        </div>
      </div>
    </nav>
  
  );
}

export default GameZoneNavbar;