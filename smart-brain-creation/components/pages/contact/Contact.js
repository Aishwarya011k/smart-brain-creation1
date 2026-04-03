import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

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
    <div>

    
    <div className="contact-section">
      {/* Info Cards */}
      <div className="info-cards">
        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <h3>Phone</h3>
          <p><a href="tel:+919148876700">+91 9148876700</a></p>
        </div>
        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h3>Email</h3>
          <p><a href="mailto:smartbraincreations@gmail.com">smartbraincreations@gmail.com</a></p>
        </div>
        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Location</h3>
          <p>Bangalore, Karnataka, India</p>
        </div>
        <div className="info-card">
          <FaClock className="info-icon" />
          <h3>Business Hours</h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* Heading */}
      <div className="form-heading">
        <h2>Send Us a Message</h2>
        <p>Fill out the form below and we&apos;ll get back to you as soon as possible</p>
      </div>

      {/* Contact Form */}
      {!isSubmitted ? (
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input type="text" name="firstName" placeholder="Enter your First Name" required />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input type="text" name="lastName" placeholder="Enter your Last Name" required />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Email Address*</label>
            <input type="email" name="email" placeholder="Enter your Email Address" required />
          </div>

          <div className="form-group full-width">
            <label>Phone Number*</label>
            <input type="text" name="phone" placeholder="Enter Phone number" required />
          </div>

          <div className="form-group full-width">
            <label>School Name*</label>
            <input type="text" name="schoolName" placeholder="Enter your school name" required />
          </div>

          <div className="form-group full-width">
            <label>Your Role*</label>
            <select name="role" required>
              <option value="">Select your role</option>
              <option value="teacher">Teacher</option>
              <option value="principal">Principal</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Area of interest*</label>
            <select name="interest" required>
              <option value="">Select your primary interest</option>
              <option value="science">Science</option>
              <option value="math">Math</option>
              <option value="art">Art</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Message*</label>
            <textarea
              name="message"
              placeholder="Tell us about your requirements, questions, or how we can help your school..."
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send message
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h2>🎉 Thanks!</h2>
          <p>Your message has been sent successfully.</p>
        </div>
      )}

    
    </div>
    </div>
  );
};

export default Contact;