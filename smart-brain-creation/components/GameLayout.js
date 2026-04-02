import React from "react";
import Link from "next/link";
import GameZoneNavbar from "./game/Game section Navbar/GameZoneNavbar";

import { gameHomeData } from "./game/gameutils";

const routeBackgrounds = {
  "/gamezone": "/gamehomeimage.png",
  "/gamezone/about": "/gamezone.png",
  "/gamezone/contact": "/gamecontact.png",
  "/gamezone/terms": "/gamehomeimage.png",
};

function GameLayout({ pathname, children }) {
  const bg =
    routeBackgrounds[pathname] ||
    "https://picsum.photos/1200/800";

  const content = gameHomeData[pathname];
  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <GameZoneNavbar />
        <div className="hero-content">
          <div className="words">
            {content ? (
              <>
                <h1>{content.text}</h1>
                <p>{content.text1}</p>
                <div className="hero-buttons">
                  {content.btn && <Link href="/gamezone"><button className="btn1">{content.btn}</button></Link>}
                  {content.btn2 && <Link href="/gamezone/about"><button className="btn2">{content.btn2}</button></Link>}
                </div>
              </>
            ) : (
              <h1>Page Not Found</h1>
            )}
          </div>
        </div>
      </div>

      {/* Rest of Page Content */}
      <div className="gamezone-page-content">
        {children}
      </div>
    </div>
  );
}

export default GameLayout;