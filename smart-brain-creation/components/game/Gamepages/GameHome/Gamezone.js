

import React from "react";
import Link from "next/link";

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
  const zorunImages = [
    "/zorun-images/1.png",
    "/zorun-images/2.png",
    "/zorun-images/3.png",
    "/zorun-images/4.png",
    "/zorun-images/5.png",
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

      {/* ======= ZORUN CARD ======= */}
      <div className="zorun-card">
        <div className="image-section" style={{ backgroundImage: `url(/zorun-images/1.png)` }}></div>

        <div className="content-section">
          <h1 className="game-title">Zorun</h1>
          <p className="game-desc">
            Experience the ultimate action-packed adventure! Zorun is a unique combination of fast-paced arcade shooting and memory-challenging gameplay. Protect a dancing cat from attacking zombies by tapping quickly, then answer memory questions to reload your ammo. Every challenge, character, and storyline is crafted with creativity, shaped by design, and powered by innovation.
          </p>

          <Link href="/gamezone/zorun">
            <button className="know-more-btn">Know more</button>
          </Link>

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
        {zorunImages.map((img, idx) => (
          <div key={idx} className="game-screenshot">
            <div className="screenshot-placeholder">
              <img src={img} alt={`Screenshot ${idx + 1}`} />
            </div>
          </div>
        ))}
      </div>

      
    </section>
       </div>
  );
};

export default Gamezone;
