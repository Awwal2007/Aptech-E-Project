import React from 'react'
import "./css/Navbar.css"
import { BiMoon } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import logoWhite from "../assets/logo-white.png"

const Navbar = ({theme, toggleTheme}) => {
  return (
    <header>
        <div className="logo">
          {
            theme === 'dark' ? <img src={logo} alt="logo white" /> : <img src={logoWhite} alt="logo black" />
          }
        </div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><a href="#brands">Brands</a></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </nav>
        <div className="visitor-counter">
          <BiMoon className="toggle-mode-btn" onClick={toggleTheme}/>
          <p><span className='counter'>100</span> - Visitors</p>
        </div>
    </header>
  )
}

export default Navbar