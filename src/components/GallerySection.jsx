import React, { useState } from 'react';
import './css/GallerySection.css';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    { id: 1, brand: 'BMW', src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200', type: 'tall' },
    { id: 2, brand: 'Audi', src: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1200', type: '' },
    { id: 3, brand: 'Jeep', src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200', type: 'tall' },
    { id: 4, brand: 'Suzuki', src: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1200', type: '' },
    { id: 5, brand: 'Hyundai', src: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=1200', type: '' },
    { id: 6, brand: 'Kia', src: 'https://images.unsplash.com/photo-1631034455581-22874130f65b?auto=format&fit=crop&q=80&w=1200', type: 'tall' },
    { id: 7, brand: 'Morris Garage', src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200', type: '' },
    { id: 8, brand: 'Jeep Wrangler', src: 'https://images.unsplash.com/photo-1539101105285-802525797bc6?auto=format&fit=crop&q=80&w=1200', type: '' },
    { id: 9, brand: 'Audi R8', src: 'https://images.unsplash.com/photo-1603584173870-7f31182bc41a?auto=format&fit=crop&q=80&w=1200', type: 'tall' },
    { id: 10, brand: 'BMW M4', src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200', type: '' },
  ];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const closeGallery = () => setCurrentIndex(null);

  return (
    <div className="gallery-page">
      <div className="gallery-wrapper">
        <h1 className="gallery-title">GALLERY</h1>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className={`img-card ${img.type} reveal-anim`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={img.src} alt={img.brand} loading="lazy" />
              <div className="brand-label">{img.brand}</div>
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div className="modal-overlay" onClick={closeGallery}>
          <button className="nav-btn prev" onClick={prevImage}>&#8249;</button>
          
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeGallery}>&times;</button>
            <div className="image-container">
                <img 
                  key={images[currentIndex].src}
                  src={images[currentIndex].src} 
                  className="slide-anim"
                  alt={images[currentIndex].brand} 
                />
                <div className="modal-caption">{images[currentIndex].brand}</div>
            </div>
          </div>

          <button className="nav-btn next" onClick={nextImage}>&#8250;</button>
        </div>
      )}
    </div>
  );
};

export default GallerySection;