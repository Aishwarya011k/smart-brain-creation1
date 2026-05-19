import React from "react";
import Link from "next/link";

const games = [
  "Space Runner - Endless runner game",
  "Puzzle Master - Problem-solving game",
  "Jungle Escape - Adventure game",
];

const uiux = [
  "Mobile app interfaces",
  "Website prototypes",
  "Interactive dashboards",
];

const animations = [
  "2D character animations",
  "Motion graphics",
  "Animated short stories",
];

const digitalArt = [
  "Digital illustrations",
  "Poster designs",
  "Brand identity projects",
];

const Showcase = () => {
  return (
    <div className="showcase-shell">
      <section className="showcase-hero-alt">
        <div className="hero-left">
          <p className="hero-kicker">Showcase</p>
          <h1>Real Work. Real Learning. Real Output.</h1>
          <p className="hero-subtitle">
            Students create real projects that reflect practical skill development and creative thinking.
          </p>
          <div className="hero-actions">
            <Link href="/contact">
              <button className="cta-solid">Book FREE Demo</button>
            </Link>
            <Link href="/gamezone">
              <button className="cta-outline">Explore Game Development Program</button>
            </Link>
          </div>
        </div>
        
      </section>

      <section className="showcase-highlight">
        <div className="highlight-copy">
          <h2>Student showcase event with digital art and game presentations</h2>
          <p>Student-built games including Space Runner, Puzzle Master, and Jungle Escape</p>
        </div>
        <div className="highlight-media">
          <img src="/home-2.png" alt="Student showcase event with digital art and game presentations" />
        </div>
      </section>

      <section className="showcase-grid">
        <article className="category-card">
          <h3>Games</h3>
          <ul>
            {games.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="category-card">
          <h3>UI/UX Designs</h3>
          <ul>
            {uiux.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="category-card">
          <h3>Animations</h3>
          <ul>
            {animations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="category-card">
          <h3>Digital Artwork</h3>
          <ul>
            {digitalArt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="showcase-cta-alt">
        <div>
          <h2>Want This for Your School?</h2>
          <p>See what your students can achieve with structured creative education</p>
        </div>
        <Link href="/contact" className="cta-solid link-cta">Book a Demo</Link>
      </section>

      <section className="showcase-links-alt">
        <h3>Quick Links</h3>
        <div className="link-row">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/labs">Labs</Link>
          <Link href="/whyitworks">Why It Works</Link>
          <Link href="/showcase">Showcase</Link>
          <Link href="/gamezone">Game Dev</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
