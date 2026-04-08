import React, { useState, useEffect } from 'react';
import './css/Hero.css';
import heroImg1 from '../assets/heroImg1.png';
import heroImg2 from '../assets/heroimg2.png';
import heroImg3 from '../assets/heroimg3.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  const images = [heroImg1, heroImg2, heroImg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line">DRIVE</span>
          <span className="hero-title-line">THE <span className="text-accent">FUTURE</span></span>
          <span className="hero-title-line">TODAY.</span>
        </h1>
        <p className="hero-subtitle">
          Carrio Motors crafts vehicles for those who refuse to compromise. Where raw power meets refined luxury — engineered for the extraordinary.
        </p>
        <div className="hero-btn-container">
          <a href='#brand' className="hero-btn">Explore</a>
          <Link to="/contact" className="hero-btn-sec">Contact</Link>
        </div>
      </div>
      
      <div className="hero-image-container">
        {/* Hidden dummy image to maintain container height while absolute children slide */}
        <img 
          src={images[0]} 
          alt="" 
          loading='lazy'
          className="hero-car-img" 
          style={{ visibility: 'hidden', position: 'relative' }} 
        />
        
        {images.map((src, index) => {
          let offset = index - currentImageIndex;
          return (
            <img 
              key={index}
              src={src} 
              alt={`Car view ${index + 1}`} 
              className="hero-car-img hero-car-slide" 
              loading='lazy'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                '--offset': offset,
                opacity: offset === 0 ? 1 : 0,
                zIndex: offset === 0 ? 2 : 1,
                pointerEvents: offset === 0 ? 'auto' : 'none'
              }}
            />
          );
        })}
      </div>

      <div className="hero-indicators">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
