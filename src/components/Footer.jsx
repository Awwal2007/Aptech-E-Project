import React from 'react'
import logo from "../assets/logo.png"
import logoWhite from "../assets/logo-white.png"
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './css/Footer.css'

const Footer = ({ theme }) => {
  return (
    <footer>
      <div className="footer-column">
        <Link to='/' className="logo">
          {
            theme === 'dark' ? <img src={logo} alt="logo white" /> : <img src={logoWhite} alt="logo black" />
          }
        </Link>
        <p>Driving the future of automotive excellence since 2008. Every vehicle is a promise — to push boundaries and redefine what's possible on the road.</p>
        <div className="socials">
          <FaInstagram />
          <FaLinkedin />
          <FaFacebook />
        </div>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Shop</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Brand</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/gallery">Site Map</Link></li>
          <li><Link to="/contact">Privacy Policy</Link></li>
          <li><Link to="/contact">Terms of Use</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer