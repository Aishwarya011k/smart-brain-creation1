// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer-main-container">
//       <div className="footer-wrapper">
//         <div className="footer-content">
//           {/* Logo and Description Section */}
//           <div className="footer-section">
//             <div className="logo-section">
//               <h1 className="logo-main">Smart</h1>
//               <h2 className="logo-sub">BRAIN CREATIONS</h2>
//             </div>
//             <p className="footer-description">
//               Creative & Digital Education for Future-Ready Students.<br />
//               Empowering young minds through innovative learning experiences.
//             </p>
//           </div>

//           {/* Quick Links Section */}
//           <div className="footer-section">
//             <h3 className="footer-heading">Quick Links</h3>
//             <ul className="footer-links">
//               <li><a href="#home">Home</a></li>
//               <li><a href="#about">About Us</a></li>
//               <li><a href="#programs">Programs</a></li>
//               <li><a href="#labs">Labs</a></li>
//               <li><a href="#why-it-works">Why It Works</a></li>
//               <li><a href="#showcase">Showcase</a></li>
//               <li><a href="#game-dev">Game Development</a></li>
//               <li><a href="#contact">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Social Media Section */}
//           <div className="footer-section">
//             <h3 className="footer-heading">Follow us</h3>
//             <div className="social-links">
//               <a href="#" className="social-link">Facebook</a>
//               <a href="#" className="social-link">Instagram</a>
//               <a href="#" className="social-link">YouTube</a>
//               <a href="#" className="social-link">LinkedIn</a>
//             </div>
//           </div>

//           {/* Contact Information Section */}
//           <div className="footer-section">
//             <h3 className="footer-heading">Contact Information</h3>
//             <div className="contact-info">
//               <p className="contact-item">
//                 <span className="contact-label">Location:</span> Bangalore, Karnataka
//               </p>
//               <p className="contact-item">
//                 <span className="contact-label">Phone:</span> +91 9148876700
//               </p>
//               <p className="contact-item">
//                 <span className="contact-label">Email:</span> smartbraincreations@gmail.com
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="footer-bottom">
//           <p className="copyright">
//             © 2025 Smart Brain Creations. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import Link from "next/link"; // 👈 import Link

const Footer = () => {
  return (
    <footer className="footer-main-container">
      <div className="footer-wrapper">
        <div className="footer-content">
          {/* Logo and Description Section */}
          <div className="footer-section">
            <div className="logo-section">
              <img src="/footer.png" alt="Smart Brain Creations Logo" style={{ maxWidth: '100px', height: 'auto', marginBottom: '1rem' }} />
            </div>
            <p className="footer-description">
              Creative & Digital Education for Future-Ready Students.<br />
              Empowering young minds through innovative learning experiences.
            </p>
            <div className="footer-social-row">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Smart Brain Creations on Facebook"
                title="Facebook"
              >
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 9H16V6h-2.1C11.3 6 10 7.3 10 9.6V12H8v3h2v6h3v-6h2.3l.7-3H13V9.6c0-.4.2-.6.5-.6z" fill="currentColor" />
                </svg>
                <span className="visually-hidden">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/smart_brain_creation?igsh=MTZvNnA1cXdpbWhvcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Smart Brain Creations on Instagram"
                title="Instagram"
              >
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4.25-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="currentColor" />
                </svg>
                <span className="visually-hidden">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Smart Brain Creations on YouTube"
                title="YouTube"
              >
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.5 8.5c-.2-1.1-1-2-2.1-2.2C17.9 6 12 6 12 6s-5.9 0-7.4.3c-1.1.2-1.9 1.1-2.1 2.2C2.2 10 2.2 12 2.2 12s0 2 .3 3.5c.2 1.1 1 2 2.1 2.2 1.5.3 7.4.3 7.4.3s5.9 0 7.4-.3c1.1-.2 1.9-1.1 2.1-2.2.3-1.5.3-3.5.3-3.5s0-2-.3-3.5zM10 15V9l5 3-5 3z" fill="currentColor" />
                </svg>
                <span className="visually-hidden">YouTube</span>
              </a>
              <a
                href="https://www.linkedin.com/company/smart-brain-creation/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Smart Brain Creations on LinkedIn"
                title="LinkedIn"
              >
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.5 9H4v11h2.5V9zm-1.2-1.2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 14.2c0-2.7-1.5-4.2-3.8-4.2-1.7 0-2.5.9-2.9 1.6V10h-2.4v10h2.4v-5.2c0-1.4.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8V20H20v-5.8z" fill="currentColor" />
                </svg>
                <span className="visually-hidden">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/labs">Labs</Link></li>
              <li><Link href="/why-it-works">Why It Works</Link></li>
              <li><Link href="/programs">Showcase</Link></li>
              <li><Link href="/gamezone">Game Development</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Information</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-label" aria-hidden="true" title="Location">
                  <svg className="contact-icon" viewBox="0 0 24 24">
                    <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="currentColor" />
                  </svg>
                </span>
                <span className="visually-hidden">Location:</span>
                Bangalore, Karnataka
              </p>
              <p className="contact-item">
                <span className="contact-label" aria-hidden="true" title="Phone">
                  <svg className="contact-icon" viewBox="0 0 24 24">
                    <path d="M6.6 2.5 4.1 5c-.5.5-.7 1.2-.5 1.9 1 3.3 3.6 6.5 6.9 8.7 3.2 2.2 6.9 3.3 10.2 3.3.7 0 1.4-.3 1.9-.8l2.5-2.5c.4-.4.4-1 0-1.4l-3.3-3.3c-.4-.4-1-.4-1.4 0l-1.5 1.5c-.3.3-.7.4-1.1.3-1.7-.4-3.4-1.3-4.9-2.4-1.5-1.1-2.8-2.4-3.7-3.9-.2-.4-.2-.8.1-1.1l1.5-1.5c.4-.4.4-1 0-1.4L8 2.5c-.4-.4-1-.4-1.4 0z" fill="currentColor" />
                  </svg>
                </span>
                <span className="visually-hidden">Phone:</span>
                +91 9148876700
              </p>
              <p className="contact-item">
                <span className="contact-label" aria-hidden="true" title="Email">
                  <svg className="contact-icon" viewBox="0 0 24 24">
                    <path d="M3 6h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.2l9 5.4 9-5.4V8H3zm18 8v-5.2l-8.5 5.1a1 1 0 0 1-1 0L3 10.8V16h18z" fill="currentColor" />
                  </svg>
                </span>
                <span className="visually-hidden">Email:</span>
                smartbraincreations@gmail.com
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="footer-section footer-faq">
            <h3 className="footer-heading">FAQ</h3>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-question">What is Smart Brain Creations?</summary>
                <p className="faq-answer">
                  A creative learning program integrated into schools covering design, animation, AI and game development.
                </p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Is it aligned with NEP 2020?</summary>
                <p className="faq-answer">
                  Yes, fully aligned with NEP 2020 guidelines for skill-based and experiential education.
                </p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What do students gain?</summary>
                <p className="faq-answer">
                  Real projects, industry-relevant skills, and confidence through hands-on creative learning.
                </p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Do schools need heavy investment?</summary>
                <p className="faq-answer">
                  No, we provide structured implementation with complete lab setup and trained faculty.
                </p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Is a demo available?</summary>
                <p className="faq-answer">
                  Yes! We offer a free demo session. Contact us to book one for your school.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Smart Brain Creations. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
