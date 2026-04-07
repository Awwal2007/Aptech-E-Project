import React, { useState } from 'react'
import "./css/Navbar.css"
import { BiMenu, BiSun, BiMoon, BiX } from 'react-icons/bi'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import logoWhite from "../assets/logo-white.png"
import VisitorCounter from './VisitorsCounter'

const Navbar = ({theme, toggleTheme}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen);
  }
  return (
    <header>
        <Link to='/' className="logo">
          {
            theme === 'dark' ? <img loading='lazy' src={logo} alt="logo white" /> : <img loading='lazy' src={logoWhite} alt="logo black" />
          }
        </Link>
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><a href="/#brands" onClick={() => setIsMenuOpen(false)}>Brands</a></li>
            <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink></li>
          </ul>
        </nav>
        <div className="hamburger">
          {isMenuOpen ? (
            <BiX className='toggle-menu-btn' onClick={toggleMenu} />
          ) : (
            <BiMenu className='toggle-menu-btn' onClick={toggleMenu} />
          )}
        </div>
        <div className="visitor-counter">
          <BiMoon className="toggle-mode-btn" onClick={toggleTheme}/>
          <VisitorCounter />
        </div>
    </header>
  )
}

export default Navbar