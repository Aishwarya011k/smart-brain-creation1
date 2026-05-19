import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikofdm7", 
        "template_g708ola", 
        form.current,
        "4bGJi7UzE20Hh3T0e" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); 
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div>
          <p className="contact-kicker">Contact Us</p>
          <h1>Let&apos;s Bring This to Your School</h1>
          <p className="contact-lead">
            Book a FREE demo session and see how we can transform your school into a creative learning hub.
          </p>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-info-card">
          <h2>Get in Touch</h2>
          <div className="contact-info-list">
            <div>
              <p className="info-label">Phone</p>
              <p className="info-value">+91 9148876700</p>
            </div>
            <div>
              <p className="info-label">Email</p>
              <p className="info-value">smartbraincreations@gmail.com</p>
            </div>
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">Bangalore, Karnataka</p>
            </div>
          </div>

          <div className="demo-card">
            <h3>Book a FREE Demo Session</h3>
            <p>No cost, no commitment. See what your students can achieve with creative education.</p>
            <div className="badge-row">
              <span>NEP 2020 Aligned</span>
              <span>AVGC Focused</span>
              <span>Classes 1-12</span>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Request a Demo</h2>
          {!isSubmitted ? (
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label>School Name</label>
                <input type="text" name="school" placeholder="School name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="you@school.com" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" name="phone" placeholder="+91..." required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your school and what you're looking for..."
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Book FREE Demo
              </button>
            </form>
          ) : (
            <div className="success-message">
              <h2>🎉 Thanks!</h2>
              <p>Your message has been sent successfully.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;