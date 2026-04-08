import React from 'react'
import Hero from '../components/Hero'
import Fleet from '../components/Fleet'
import AboutSection from '../components/AboutSection'

import './css/Home.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <Fleet />
      <AboutSection />
      <section className='find-us-on-map'>
        <div className='heading'>
          <span className='fleet-subtitle'>SHOWROOM</span>
          <h1 className='fleet-title'>FIND US ON THE MAP</h1>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.533563777467!2d3.9098500742379665!3d7.406041612280431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039930067851fff%3A0x8ea29ec1f2186eb8!2sWest%20One!5e0!3m2!1sen!2sng!4v1775646914276!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  )
}


export default Home