import React from "react";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

import { homedata } from "../utils";

const routeBackgrounds = {
  "/": "/background.jpg",
  "/about": "/aboutus.png",
  "/programs": "/aboutus.png",
  "/contact": "/contact.png",
  "/events": "/background.jpg",
  "/labs": "/labs.png",
  "/showcase": "/background.jpg",
  "/gamezone": "/gamehomeimage.png",
  "/gamezone/about": "/gamezone.png",
  "/gamezone/contact": "/gamecontact.png",
  "/gamezone/terms": "/gamehomeimage.png",
};

function Layout({ pathname, children }) {
  const bg =
    routeBackgrounds[pathname] ||
    "https://picsum.photos/1200/800";

  const content = homedata[pathname];
  const isHome = pathname === "/";
  
  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <div className={`hero-content ${isHome ? 'hero-left-align' : ''}`}>
          <div className="words">
            {content ? (
              <>
                <h1>{content.maintext}</h1>
                {content.subtitle && <h2 className="hero-subtitle">{content.subtitle}</h2>}
                <p>{content.paragraph}</p>
                
                {/* Badges */}
                {content.badges && content.badges.length > 0 && (
                  <div className="hero-badges">
                    {content.badges.map((badge, idx) => (
                      <span key={idx} className="badge">{badge}</span>
                    ))}
                  </div>
                )}
                
                <div className="hero-buttons">
                  {content.btn && (
                    <Link href={pathname === "/" ? "/contact" : "/programs"}>
                      <button className="btn1">{content.btn}</button>
                    </Link>
                  )}
                  {content.btn2 && (
                    <Link href={pathname === "/" ? "/labs" : "/contact"}>
                      <button className="btn2">{content.btn2}</button>
                    </Link>
                  )}
                </div>
              </>
            ) : (
              <h1>Page Not Found</h1>
            )}
          </div>
        </div>
      </div>

      {/* Rest of Page Content */}
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;