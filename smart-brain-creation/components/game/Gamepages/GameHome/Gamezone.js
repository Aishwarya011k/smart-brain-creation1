

import React from "react";
import Footer from "../../../pages/Footer/Footer";

const Gamezone = () => {
  const images = [
    { src: "/homepagefirst.png", alt: "Game 1" },
    { src: "/homepage-second.png", alt: "Game 2" },
    { src: "/homepagethird.png", alt: "Game 3" },
    { src: "/homepagefourth.png", alt: "Game 4" },
  ];
  const stats = [
    { value: "12+", label: "Real Game Launches" },
    { value: "200+", label: "Student Collaborators" },
    { value: "10K+", label: "Active Players" },
  ];
  const gameImages = [
    "/gamescreenshot.png",
    "/gamescreenshot1.png",
    "/gamescreenshot2.png",
    "/gamescreenshot3.png",
    "/gamescreenshot4.png",
  ];

  return (
    <div>

 
    <section className="gamezone-section">
      {/* ======= TOP INTRO SECTION ======= */}
      <div className="gamezone-top">
        <div className="top-left">
          <h1 className="title">Level Up Your Creativity with Gaming!</h1>
          <p className="desc">
            Explore our first-ever student-powered games — unique creations where imagination meets technology, and ideas transform into interactive adventures. At Smart Brain Creations, students don&apos;t just play games, they design, build, and bring them to life. Every challenge, character, and storyline is crafted with creativity, shaped by design, and powered by innovation.
          </p>
        </div>

        <div className="top-right">
          <div className="img-grid">
            {images.map((img, idx) => (
              <img key={idx} src={img.src} alt={img.alt} className="grid-img" />
            ))}
          </div>
        </div>
      </div>

      {/* ======= ABOUT DIVISION ======= */}
      <div className="about-section">
        <h2>About Our Game Development Division</h2>
        <p>
          We&apos;re pioneering a unique approach where education and game development intersect. Our students don&apos;t just learn about games — they actively participate in creating real games that get launched and played by thousands of users worldwide.
        </p>
      </div>

      {/* ======= STATS ======= */}
      <div className="stats">
        {stats.map((s, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ======= GAME SECTION ======= */}
      <div className="launching">
        <h2 className="launching-title">Games We&apos;re Launching</h2>
        <p className="launching-desc">Real games, real impact, created with student collaboration</p>
      </div>

      {/* ======= HOPSCAPE CARD ======= */}
      <div className="hopscape-card">
        <div className="image-section" style={{ backgroundImage: `url(/gamehomeimage.png)` }}></div>

        <div className="content-section">
          <h1 className="game-title">Hopscape</h1>
          <p className="game-desc">
            Explore our first-ever student-powered games — unique creations where imagination meets technology, and ideas transform into interactive adventures. Every challenge, character, and storyline is crafted with creativity, shaped by design, and powered by innovation.
          </p>

          <button className="know-more-btn">Know more</button>

          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>

          <button className="download-btn">Download</button>
        </div>
      </div>

      {/* ======= GAME GALLERY ======= */}
      <div className="game-gallery">
        {gameImages.map((img, idx) => (
          <div key={idx} className="game-screenshot">
            <div className="screenshot-placeholder">
              <img src={img} alt={`Screenshot ${idx + 1}`} />
            </div>
          </div>
        ))}
      </div>

      
    </section>
    <Footer />
       </div>
  );
};

export default Gamezone;
