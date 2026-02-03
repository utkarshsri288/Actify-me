import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      {/* Social Media Icons - Far Left */}
      <div className="hero-social-left">
        <a href="#" className="social-icon-left" aria-label="Facebook">
          <span className="social-icon-text">f</span>
        </a>
        <a href="#" className="social-icon-left" aria-label="Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor" className="twitter-icon">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </a>
      </div>

      {/* Chat Icon - Bottom Right */}
      <a href="#contact" className="chat-icon" onClick={(e) => {
        e.preventDefault()
        scrollToSection('contact')
      }} aria-label="Contact">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </a>

      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to<br />
            <span className="brand-name">ActifyMe Fitness</span><br />
            Studio and<br />
            Running Club
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
