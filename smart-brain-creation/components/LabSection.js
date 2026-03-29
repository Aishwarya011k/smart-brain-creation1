

import React from "react";

import { FaPaintBrush, FaCode, FaCubes, FaGamepad } from "react-icons/fa";
import { SiFigma, SiAdobe } from "react-icons/si";
import Footer from "./pages/Footer/Footer";

const tools = [
  { icon: <FaPaintBrush size={40} />, title: "Canva", desc: "Beginner-friendly design platform" },
  { icon: <SiFigma size={40} />, title: "Figma", desc: "Professional UI/UX design tool" },
  { icon: <SiAdobe size={40} />, title: "Adobe Creative Suite", desc: "Industry-standard creative software" },
  { icon: <FaCode size={40} />, title: "HTML/CSS", desc: "Web development fundamentals" },
  { icon: <FaCubes size={40} />, title: "Blender", desc: "3D modeling and animation" },
  { icon: <FaGamepad size={40} />, title: "Unity", desc: "For game developments" },
];

const benefits = [
  { title: "Convenient Access", desc: "Students learn in familiar environment during school hours" },
  { title: "Expert Guidance", desc: "Trained faculty provide personalized instruction and support" },
  { title: "Collaborative Learning", desc: "Students work together on projects and share creative ideas" },
  { title: "Portfolio Building", desc: "Continuous project work builds impressive portfolios over time" },
];

const LabSection = () => {
  return (
    <div className="mylab-wrapper">
      {/* Software & Tools */}
      <h2 className="mylab-heading">Professional Software &amp; Tools</h2>
      <p className="mylab-subheading">
        Students learn using industry-standard software and tools
      </p>

      <div className="mylab-tools-container">
        {tools.map((tool, idx) => (
          <div className="mylab-tool-item" key={idx}>
            <div className="mylab-tool-icon-wrapper">{tool.icon}</div>
            <h3 className="mylab-tool-name">{tool.title}</h3>
            <p className="mylab-tool-text">{tool.desc}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <h2 className="mylab-benefits-heading">In-School Lab Benefits</h2>
      <div className="mylab-benefits-container">
        {benefits.map((b, idx) => (
          <div className="mylab-benefit-item" key={idx}>
            <h3 className="mylab-benefit-title">{b.title}</h3>
            <p className="mylab-benefit-text">{b.desc}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default LabSection;
