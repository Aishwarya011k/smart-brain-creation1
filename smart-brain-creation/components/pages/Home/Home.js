// import React from "react";
// import "./home.css";
// import { homecontent } from "../../utils";
// import Footer from "../Footer/Footer";
// import { Link} from 'react-router-dom';

// const cardData = [
//   {
//     title: "About Us",
//     desc: "Learn about our mission to transform education to creativity.",
//     img: homecontent.img1,
//     btn: "Learn More",
//   },
//   {
//     title: "Our Programs",
//     desc: "Creative and Digital education for Class I-12",
//     img: homecontent.img2,
//     btn: "Learn More",
//   },
//   {
//     title: "Creative Labs",
//     desc: "State-of-the-art facilities for hands on learning",
//     img: homecontent.img3,
//     btn: "Learn More",
//   },
//   {
//     title: "Why It works",
//     desc: "NEP 2020 aligned, proven methodology",
//     img: homecontent.img4,
//     btn: "Learn More",
//   },
//   {
//     title: "Showcase",
//     desc: "Amazing projects by our talented students",
//     img: homecontent.img5,
//     btn: "Learn More",
//   },
//   {
//     title: "Contact us",
//     desc: "Get in touch to bring creativity to your School",
//     img: homecontent.img6,
//     btn: "Learn More",
//   }
// ];

// const Home = () => {
//   return (
//     <>
//       <div className="home-main">
//         <h2 className="home-head">{homecontent.head}</h2>
//         <p className="home-para">{homecontent.para}</p>
        
//         <div className="images-cards">
//           {cardData.map((card, idx) => (
//             <div className="card" key={idx}>
//               <img src={card.img} alt={card.title} />
//               <div className="card-content">
//                 <h3>{card.title}</h3>
//                 <p>{card.desc}</p>
//               <Link to="/about">
//               <button className="card-btn">
//                   {card.btn} <span className="arrow">→</span>
//                 </button>
//               </Link>  
                
//               </div>
//             </div>
//           ))}
//         </div>

      
//         <div className="cta-container">
//           <div className="cta-section">
//             <h2 className="cta-head">Ready to Transform Education at Your School?</h2>
//             <p className="cta-para">
//               Join hundreds of schools already providing cutting-edge creative education<br />
//               to their students.
//             </p>
//             <div className="cta-buttons">
//               <button className="cta-btn primary">
//                 Explore Programs <span className="arrow">→</span>
//               </button>
//               <button className="cta-btn secondary">
//                 Contact us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Home;

import React from "react";
import Link from "next/link";
import { homecontent } from "../../../utils";

const cardData = [
  {
    title: "About Us",
    desc: "Learn about our mission to transform education to creativity.",
    img: homecontent.img1,
    btn: "Learn More",
    link: "/about",   // 👈 route added
  },
  {
    title: "Our Programs",
    desc: "Creative and Digital education for Class I-12",
    img: homecontent.img2,
    btn: "Learn More",
    link: "/programs",  // 👈 route added
  },
  {
    title: "Creative Labs",
    desc: "State-of-the-art facilities for hands on learning",
    img: homecontent.img3,
    btn: "Learn More",
    link: "/labs",
  },
  {
    title: "Why It works",
    desc: "NEP 2020 aligned, proven methodology",
    img: homecontent.img4,
    btn: "Learn More",
    link: "/about",
  },
  {
    title: "Showcase",
    desc: "Amazing projects by our talented students",
    img: homecontent.img5,
    btn: "Learn More",
    link: "/programs",
  },
  {
    title: "Contact us",
    desc: "Get in touch to bring creativity to your School",
    img: homecontent.img6,
    btn: "Learn More",
    link: "/contact",  // 👈 contact page
  },
];

const Home = () => {
  return (
    <>
      <div className="home-main" backgroundColor="#ffffff">
        <h2 className="home-head" style={{ backgroundColor: "#ffffff" }}>
          {homecontent.head}
        </h2>
        <p className="home-para">{homecontent.para}</p>

        <div className="images-cards">
          {cardData.map((card, idx) => (
            <div className="card" key={idx}>
              <img src={card.img} alt={card.title} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                {/* 👇 dynamic link here */}
                <Link href={card.link}>
                  <button className="card-btn">
                    {card.btn} <span className="arrow">→</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <div className="cta-section">
            <h2 className="cta-head">
              Ready to Transform Education at Your School?
            </h2>
            <p className="cta-para">
              Join hundreds of schools already providing cutting-edge creative education<br />
              to their students.
            </p>
            <div className="cta-buttons">
              <Link href="/programs">
                <button className="cta-btn primary">
                  Explore Programs <span className="arrow">→</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="cta-btn secondary">Contact us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
