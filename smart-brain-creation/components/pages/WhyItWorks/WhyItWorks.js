import React from "react";
import Link from "next/link";

const WHY_CARDS = [
  {
    title: "Plug-and-Play Solution",
    text: "No complex setup or management needed from the school's side. We deploy everything.",
  },
  {
    title: "No Burden on School Staff",
    text: "Our trained faculty handles all sessions — your existing staff continues their regular work.",
  },
  {
    title: "Industry-Relevant Curriculum",
    text: "Syllabus aligned with AVGC industry standards, ensuring students learn market-ready skills.",
  },
  {
    title: "Engaging & Interactive",
    text: "Project-based, hands-on learning keeps students motivated and excited about every session.",
  },
  {
    title: "Measurable Outcomes",
    text: "Track student progress through real projects, portfolios, and annual showcases.",
  },
  {
    title: "Boost School Reputation & Admissions",
    text: "Schools offering creative technology programs stand out, attract more admissions, and build a future-ready reputation.",
  },
];

const WhyItWorks = () => {
  return (
    <div className="why-page">
      <section className="why-hero">
        <p className="why-kicker">Why It Works</p>
        <h1>Designed for Schools. Built for Students.</h1>
        <p className="why-subtitle">
          A complete, hassle-free solution that integrates seamlessly into your school system.
        </p>
      </section>

      <section className="why-grid">
        {WHY_CARDS.map((card) => (
          <article key={card.title} className="why-card">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="why-cta">
        <div>
          <h2>Transform Your School Today</h2>
          <p>Join schools that are already building the next generation of creators</p>
        </div>
        <Link href="/contact" className="why-btn">Get Started</Link>
      </section>
    </div>
  );
};

export default WhyItWorks;
