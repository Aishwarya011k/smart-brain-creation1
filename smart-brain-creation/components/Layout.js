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
};

function Layout({ pathname, children }) {
  const bg =
    routeBackgrounds[pathname] ||
    "https://picsum.photos/1200/800";

  const content = homedata[pathname];
  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <div className="hero-content">
          <div className="words">
            {content ? (
              <>
                <h1>{content.maintext}</h1>
                <p>{content.paragraph}</p>
                <div className="hero-buttons">
                  {content.btn && <Link href="/programs"><button className="btn1">{content.btn}</button></Link>}
                  {content.btn2 && <Link href="/contact"><button className="btn2">{content.btn2}</button></Link>}
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