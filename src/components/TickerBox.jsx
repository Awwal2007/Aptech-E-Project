import React, { useState, useEffect } from "react";
import { FaCalendar, FaClock, FaMap, FaCar } from "react-icons/fa";
import "./css/TickerBox.css";

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
        () => setLocation("Lagos, Nigeria"), // Fallback location
      );
    }

    return () => clearInterval(timer);
  }, []);

  const tickerItems = (
    <>
      <span className="ticker-item">
        <div className="live-indicator">
          <div className="live-dot"></div>
          LIVE
        </div>
      </span>
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
        <FaCar /> Carrio Motors - Engineering the Extraordinary
      </span>
      <span className="ticker-item">
        New Model: "Future-S" Launching Soon
      </span>
      <span className="ticker-item">
          Trusted by over 5,000 people worldwide
      </span>
    </>
  );

  return (
    <div className="ticker-container">
      <div className="ticker-wrapper">
        {tickerItems}
        {tickerItems}
      </div>
    </div>
  );
}
