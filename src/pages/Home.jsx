import React from 'react'
import Hero from '../components/Hero'
import Fleet from '../components/Fleet'

const Home = () => {
  return (
    <div>
      <Hero />
      <Fleet />
      <section className="about-carrios">
        <div>
          <img src="" alt="about carrios bg image" />
        </div>
        <div className='about-content'>
          <p className='about-content-top'>ABOUT CARRIO MOTORS</p>
          <h3>BUILT FOR THOS WHO PUSH LIMIT</h3>
          <p className='about-content-submenu'>Founded in 2008, Carrio Motors has been at the forefront of automotive innovation, merging cutting-edge engineering with timeless design philosophy. Every vehicle is a statement — of power, elegance, and purpose.</p>
          <div className='about-features-container'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home