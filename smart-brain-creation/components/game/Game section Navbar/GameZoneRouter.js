// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import homeimg from "../game section assets/gamehomeimage.png";
// import aboutimg from "../game section assets/gamezone.png";
// import contactimg from "../game section assets/gamecontact.png";
// import "./gamezonenavbar.css";

// import { gameHomeData } from "../gameutils";  
// import GameZoneNavbar from "./GameZoneNavbar";

// const routeBackgrounds = {
//   "/gamezone": homeimg,
//   "/gamezone/about": aboutimg,
//   "/gamezone/contact": contactimg,
//   "/gamezone/game": homeimg,


// };

// function GameZoneRouter() {
//   const location = useLocation();
//   const bg =
//     routeBackgrounds[location.pathname] ||
//     "https://picsum.photos/1200/800";

//   const content = gameHomeData[location.pathname]; 
//   return (
//     <div>
      
//       <div
//         className="hero-section"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <GameZoneNavbar />
//         <div className="hero-content">
//           <div className="words">

        
//           {content ? (
//             <>
//               <h1>{content.text}</h1>
//               <p>{content.text1}</p>
//               <div className="hero-buttons">
//                 {content.btn && <button className="btn1">{content.text1}</button>}
//                 {content.btn2 && <button className="btn2">{content.btn2}</button>}
//               </div>
              
//             </>
//           ) : (
//             <h1>Page Not Found</h1>
//           )}
//           </div>
//         </div>
//       </div>

//       {/* Rest of Page Content */}
//       <div className="page-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default GameZoneRouter;
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import homeimg from "../game section assets/gamehomeimage.png";
import aboutimg from "../game section assets/gamezone.png";
import contactimg from "../game section assets/gamecontact.png";

import { gameHomeData } from "../gameutils";  
import GameZoneNavbar from "./GameZoneNavbar";

const routeBackgrounds = {
  "/gamezone": homeimg,
  "/gamezone/about": aboutimg,
  "/gamezone/contact": contactimg,
  "/gamezone/terms": aboutimg,
};

function GameZoneRouter() {
  const location = useLocation();
  const bg =
    routeBackgrounds[location.pathname] ||
    "https://picsum.photos/1200/800";

  const content = gameHomeData[location.pathname]; 

  return (
    <div>
      {/* Hero Section */}
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
                  {content.btn && <button className="btn1">{content.btn}</button>}
                  {content.btn2 && <button className="btn2">{content.btn2}</button>}
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
        <Outlet />
      </div>
    </div>
  );
}

export default GameZoneRouter;
