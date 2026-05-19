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

const Home = () => {
  return (
    <div className="home-main home-new">
      <section className="section-block">
        <p className="section-kicker">What We Offer</p>
        <h2 className="section-title">Everything Your School Needs</h2>
        <div className="offer-grid">
          <div className="offer-card">
            <div className="offer-number">01</div>
            <h3>Creative Lab Setup</h3>
            <p>Full lab infrastructure installed inside your school premises</p>
          </div>
          <div className="offer-card">
            <div className="offer-number">02</div>
            <h3>Expert Faculty</h3>
            <p>Industry-trained instructors deployed to deliver weekly sessions</p>
          </div>
          <div className="offer-card">
            <div className="offer-number">03</div>
            <h3>Industry Curriculum</h3>
            <p>Structured, project-based syllabus aligned with AVGC industry</p>
          </div>
          <div className="offer-card">
            <div className="offer-number">04</div>
            <h3>Affordable Model</h3>
            <p>No heavy investment — structured implementation provided</p>
          </div>
        </div>
      </section>

      <section className="section-block about-block">
        <p className="section-kicker">About Us</p>
        <h2 className="section-title">Our Creative Education System Inspires Students</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Schools today focus heavily on theory, but students often lack real-world skills,
              creative exposure, and engagement. Smart Brain Creations transforms schools into
              creative learning ecosystems through a complete Creative Intelligence Program.
            </p>
            <ul className="about-list">
              <li>Creative Lab Setup inside school</li>
              <li>Industry-aligned curriculum</li>
              <li>Trained expert faculty</li>
              <li>Hands-on, project-based learning</li>
            </ul>
            <Link href="/about">
              <button className="primary-cta">Learn more about us</button>
            </Link>
          </div>
          <div className="about-media">
            <img src="/home-2.png" alt="Students working on creative digital projects" />
            <div className="stat-pill">
              <span className="stat-value">10+</span>
              <span className="stat-label">Years of Quality Education</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <p className="section-kicker">Process</p>
        <h2 className="section-title">How It Works</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div>
              <h3>Lab Setup</h3>
              <p>Complete infrastructure inside your school</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div>
              <h3>Faculty Deployment</h3>
              <p>Trained industry experts placed at your school</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div>
              <h3>Weekly Sessions</h3>
              <p>Regular hands-on creative sessions</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div>
              <h3>Student Projects</h3>
              <p>Real games, designs, and animations</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div>
              <h3>Annual Showcase</h3>
              <p>Students present their work publicly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Students Don&apos;t Just Learn — They Build</h2>
        <p className="section-subtitle">Real skills. Real portfolio. Real confidence.</p>
        <div className="pill-row">
          <span>Game Projects</span>
          <span>UI/UX Designs</span>
          <span>Animations</span>
          <span>Digital Art</span>
        </div>
        <p className="caption-text">Games built by students - Space Runner, Puzzle Master, Jungle Escape</p>
        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-value">10+</div>
            <div className="impact-label">Programs</div>
          </div>
          <div className="impact-card">
            <div className="impact-value">500+</div>
            <div className="impact-label">Students Impacted</div>
          </div>
          <div className="impact-card">
            <div className="impact-value">50+</div>
            <div className="impact-label">School Partners</div>
          </div>
          <div className="impact-card">
            <div className="impact-value">100+</div>
            <div className="impact-label">Projects Built</div>
          </div>
        </div>
      </section>

      <section className="section-block why-block">
        <p className="section-kicker">Why It Works</p>
        <h2 className="section-title">Designed for Schools. Built for Students.</h2>
        <p className="section-subtitle">
          A complete, hassle-free solution that integrates seamlessly into your school system.
        </p>
        <div className="why-grid">
          <div className="why-card">
            <h3>Plug-and-Play Solution</h3>
            <p>No complex setup or management needed from the school&apos;s side. We deploy everything.</p>
          </div>
          <div className="why-card">
            <h3>No Burden on School Staff</h3>
            <p>Our trained faculty handles all sessions — your existing staff continues their regular work.</p>
          </div>
          <div className="why-card">
            <h3>Industry-Relevant Curriculum</h3>
            <p>Syllabus aligned with AVGC industry standards, ensuring students learn market-ready skills.</p>
          </div>
          <div className="why-card">
            <h3>Engaging & Interactive</h3>
            <p>Project-based, hands-on learning keeps students motivated and excited about every session.</p>
          </div>
          <div className="why-card">
            <h3>Measurable Outcomes</h3>
            <p>Track student progress through real projects, portfolios, and annual showcases.</p>
          </div>
          <div className="why-card">
            <h3>Boost School Reputation & Admissions</h3>
            <p>Schools offering creative technology programs stand out, attract more admissions, and build a future-ready reputation.</p>
          </div>
        </div>
        <div className="why-cta">
          <h3>Transform Your School Today</h3>
          <p>Join schools that are already building the next generation of creators</p>
          <Link href="/contact">
            <button className="primary-cta">Get Started</button>
          </Link>
        </div>
      </section>

      <section className="cta-strip">
        <h2>Ready to Transform Your School?</h2>
        <div className="pill-row">
          <span>NEP 2020 Aligned</span>
          <span>AVGC Industry Focus</span>
          <span>Bangalore-Based</span>
          <span>Classes 1–12</span>
        </div>
        <Link href="/contact">
          <button className="primary-cta">Book Your FREE Demo Session</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
