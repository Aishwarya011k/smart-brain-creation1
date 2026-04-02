import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

const FoundationCard = ({ 
  icon, 
  title, 
  ageRange, 
  description, 
  features, 
  projects 
}) => {
  return (
    <div className="foundation-card">
      <div className="card-contents">
        
        {/* Left Side */}
        <div className="card-left">
          <div className="card-header">
            <div className="graduation-icon">{icon}</div>
            <div className="header-text">
              <h2 className="card-title">{title}</h2>
             <button className="age-range">{ageRange}</button> 
            </div>
          </div>

          <p className="card-description">{description}</p>

          <div className="features-grid">
            {features.map((item, idx) => (
              <div key={idx} className="feature-item">
                <span className="feature-icon"><FaStar /></span>
                <span className="feature-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="card-right">
          <div className="calendar-icon">
            <SlCalender />
          </div>
          <div className="projects-info">
           <p>{projects}</p>
            <div className="projects-description">Hands-on creative projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationCard;
