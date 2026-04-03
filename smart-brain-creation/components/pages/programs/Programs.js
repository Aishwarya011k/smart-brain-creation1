import React from "react";
import FoundationCard from "../../FoundationCard";
import { programsData } from "../../../utils";

const Programs = () => {
  return (
    <div className="learning-paths-container">
      <div className="conatiner-section">
        
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">Age-Appropriate Learning Paths</h1>
          <p className="subtitle">
            Each program is carefully designed to match students&apos; developmental stages
          </p>
        </div>

        {/* All Cards via map */}
        {programsData.map((program, idx) => (
          <FoundationCard
            key={idx}
            icon={program.icon}
            title={program.title}
            ageRange={program.ageRange}
            description={program.description}
            features={program.features}
            projects={program.projects}
          />
        ))}

      </div>
    </div>
  );
};

export default Programs;
