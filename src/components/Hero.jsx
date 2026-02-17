import React from 'react'
import './Hero.css'

const Hero = () => {
  const socialIcons = {
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.03H7.9v-2.9h2.54V9.86c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.26.2 2.26.2v2.47h-1.27c-1.26 0-1.65.78-1.65 1.58v1.9h2.8l-.45 2.9h-2.35V22C18.34 21.27 22 17.1 22 12.07z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5z" />
        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zM17.4 6.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 0 0 3.3 4.95c0 1.08.87 1.95 1.95 1.95a1.95 1.95 0 1 0 0-3.9zM20.7 13.45V20h-3.38v-6.03c0-1.5-.54-2.53-1.9-2.53-1.04 0-1.66.7-1.93 1.37-.1.24-.13.58-.13.92V20H9.98s.05-9.92 0-11.5h3.38v1.63c.45-.7 1.25-1.7 3.05-1.7 2.23 0 3.9 1.45 3.9 4.57z" />
      </svg>
    ),
  }

  return (
    <section id="home" className="hero">
      {/* Social Media Icons - Far Left */}
      <div className="hero-social-left">
        <a
          href="https://www.facebook.com/profile.php?id=61559232381501"
          className="social-icon-left"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          {socialIcons.facebook}
        </a>
        <a
          href="https://www.instagram.com/actifyme/"
          className="social-icon-left"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          {socialIcons.instagram}
        </a>
        <a
          href="https://www.linkedin.com/company/104861196/"
          className="social-icon-left"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {socialIcons.linkedin}
        </a>
      </div>

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
