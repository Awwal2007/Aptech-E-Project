import React, { useState } from "react";
import "./css/GallerySection.css";
import carsData from "../data/cars.json"; 

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = carsData.flatMap((car) =>
    car.images.map((img, i) => ({
      id: `${car.id}-${i}`,
      brand: car.brand,
      model: car.model,
      price: `$${car.price.toLocaleString()}`,
      src: img.trim(),
    }))
  );

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">GALLERY</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="img-card reveal-anim"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img.src} alt={img.brand} />

            <div className="card-center-overlay">
              <h3 className="center-brand">{img.brand}</h3>
              <p className="center-model">{img.model}</p>
              <p className="center-price">{img.price}</p>
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="modal-overlay" onClick={() => setCurrentIndex(null)}>
          <button className="close-btn">&times;</button>

          <button className="nav-btn prev" onClick={prevImage}>
            &#8249;
          </button>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img loading="lazy" src={images[currentIndex].src} alt={images[currentIndex].brand + " " + images[currentIndex].model} />

            <div className="modal-details-reveal">
              <h2>
                {images[currentIndex].brand}{" "}
                {images[currentIndex].model}
              </h2>
              <p>{images[currentIndex].price}</p>
            </div>
          </div>

          <button className="nav-btn next" onClick={nextImage}>
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default GallerySection;