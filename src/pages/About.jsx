import React from "react";
import Footer from "../components/Footer";
import "./css/About.css";
import carImage from "../assets/aboutusimg.jpeg";

const About = () => {
  return (
    <>
      <section className="about-hero">
        {/* Left text block */}
        <div className="about-text">
          <h1>CARRIO MOTORS</h1>
          <p>
            Carrio Motors is more than just a car company — we are a lifestyle
            brand built on passion, precision, and performance. For over 25
            years, we’ve been redefining the driving experience by delivering
            vehicles that combine cutting-edge technology with timeless design.
            Our commitment to excellence has earned us the trust of over 50,000
            satisfied customers worldwide.
          </p>
          <p>
            Whether it’s the thrill of a sports coupe or the reliability of a
            family car, Carrio Motors continues to push boundaries and inspire
            confidence on every road. We believe in creating journeys that last
            a lifetime.
          </p>
          <div className="stats">
            <div>
              <h2>25+</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <h2>50k+</h2>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>

        {/* Right image block */}
        <div className="about-image">
          <div className="image-box">
            <img src={carImage} alt="BMW Coupe" />
            <div className="image-text">
              <p>Carrio Motors drives your future</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch block */}
      <div className="contact-info">
        <h2>GET IN TOUCH</h2>
        <div className="contact-items">   {/* <-- flex container */}
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Our Location</h3>
              <p>Victoria Island<br />Victoria Island, Lagos 106104, Lagos</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email Us</h3>
              <p>Carrio@gmail.com<br />Cmotors@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Call Us</h3>
              <p>+2349019048529<br />Mon–Sat: 9am – 9pm</p>
            </div>
          </div>
      </div>
</div>


      
    </>
  );
};

export default About;