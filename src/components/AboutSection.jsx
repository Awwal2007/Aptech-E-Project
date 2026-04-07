import React from "react";
import "./css/AboutSection.css";
import aboutImg from "../assets/Carrio About Image.png";
import { FaCogs, FaLeaf, FaMagic, FaShieldAlt } from "react-icons/fa";

const AboutSection = () => {
  const features = [
    {
      icon: <FaCogs />,
      title: "Performance",
      description: "Every component engineered for peak performance without compromise."
    },
    {
      icon: <FaCogs />,
      title: "Sustainability",
      description: "Leading the charge toward a zero-emission automotive future."
    },
    {
      icon: <FaCogs />,
      title: "Design",
      description: "Aesthetic mastery that turns every road into a runway."
    },
    {
      icon: <FaCogs />,
      title: "Safety",
      description: "5-star safety standards across every model in our fleet."
    }
  ];


  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-side">
          <img src={aboutImg} alt="Carrio Motors Performance" loading="lazy" className="about-main-img" />
        </div>

        <div className="about-content-side">
          <p className="about-tagline">ABOUT CARRIO MOTORS</p>
          <h2 className="about-title">
            BUILT FOR THOSE WHO <span className="text-accent">PUSH LIMIT</span>
          </h2>

          <p className="about-description">
            Carrio Motors is one of the fastest growing Dealerships. We focus on delivering high Customer Satisfaction Standards. All employees are committed to provide service with Discipline, Focus and Speed, by following all Standard Operating Processes defined by our company
          </p>

          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-info">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
