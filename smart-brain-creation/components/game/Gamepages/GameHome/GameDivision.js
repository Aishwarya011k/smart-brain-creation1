


import React from "react";
import Hopscape from "../../gamecomponents/Horoscope";

const images = [
  {
    src: require("../../game section assets/homepagefirst.png"),
    alt: "Gaming 1"
  },
  {
    src: require("../../game section assets/homepage-second.png"),
    alt: "Gaming 2"
  },
  {
    src: require("../../game section assets/homepagethird.png"),
    alt: "Gaming 3"
  },
  {
    src: require("../../game section assets/homepagefourth.png"),
    alt: "Gaming 4"
  }
];

const stats = [
  { value: "12+", label: "Real Game Launches" },
  { value: "200+", label: "Student Collaborators" },
  { value: "10K+", label: "Active Players" },
];

function GameDivision() {
  return (
    <section className="game-division-section">
      {/* Top Section: Text & Images */}
      <div className="game-division-top">
        <div className="game-division-top-left">
          <h1 className="game-division-title">Level Up Your Creativity with Gaming!</h1>
          <p className="game-division-desc">
            Explore our first-ever student-powered games — unique creations where imagination meets technology, and ideas transform into interactive adventures. At Smart Brain Creations, students don&apos;t just play games, they design, build, and bring them to life. Every challenge, character, and storyline is crafted with creativity, shaped by design, and powered by innovation. These games represent more than just entertainment — they are a showcase of future-ready skills, collaboration, and the limitless potential of young creators.
          </p>
        </div>
        <div className="game-division-top-right">
          <div className="game-division-img-grid">
            {images.map((img, idx) => (
              <img key={idx} src={img.src} alt={img.alt} className="game-division-img" />
            ))}
          </div>
        </div>
      </div>

      {/* Division Section */}
      <div className="game-division-header">
        <h2>About Our Game Development Division</h2>
        <p>
          We&apos;re pioneering a unique approach where education and game development intersect. Our students don&apos;t just learn about games — they actively participate in creating real games that get launched and played by thousands of users worldwide.
        </p>
      </div>
      <div className="game-division-stats">
        {stats.map((stat, idx) => (
          <div className="game-division-card" key={idx}>
            <div className="game-division-value">{stat.value}</div>
            <div className="game-division-label">{stat.label}</div>
          </div>
        ))}
      </div>

 
      <div className="game-division-launching">
        <h2 className="launching-title">Games We&apos;re Launching</h2>
        <p className="launching-desc">Real games, real impact, created with student collaboration</p>
      </div>
      <Hopscape/>
    </section>
  );
}

export default GameDivision;

