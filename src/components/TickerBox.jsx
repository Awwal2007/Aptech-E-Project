import React, { useState, useEffect } from "react";
import { FaCalendar, FaClock, FaMap } from "react-icons/fa";
import "./css/TickerBox.css"; // Ensure this path matches your file structure

export default function TickerBox() {
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(
            `${position.coords.latitude.toFixed(2)}°N, ${position.coords.longitude.toFixed(2)}°E`,
          );
        },
        () => setLocation("Location access denied"),
      );
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker-wrapper">
        <span className="ticker-item">
          <FaClock /> {dateTime.toLocaleTimeString()}
        </span>
        <span className="ticker-item">
          <FaCalendar /> {dateTime.toLocaleDateString()}
        </span>
        <span className="ticker-item">
          <FaMap /> {location}
        </span>
        <span className="ticker-item ticker-brand">
          Bronx Luggage - Excellence in Travel Since 1995
        </span>
        
        {/* Duplicate set for seamless looping */}
        <span className="ticker-item">
          <FaClock /> {dateTime.toLocaleTimeString()}
        </span>
        <span className="ticker-item">
          <FaCalendar /> {dateTime.toLocaleDateString()}
        </span>
        <span className="ticker-item">
          <FaMap /> {location}
        </span>
      </div>
    </div>
  );
}