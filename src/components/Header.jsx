import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoImage from '../Gemini_Generated_Image_qbyecyqbyecyqbye-removebg-preview.png'
import './Header.css'

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (!isHome) {
      navigate(`/#${sectionId}`)
      setIsMobileMenuOpen(false)
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT' },
    { id: 'events', label: 'Events' },
    { id: 'blog', label: 'Blog' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => isHome ? scrollToSection('home') : navigate('/')}>
          <img src={logoImage} alt="Actifyme Logo" className="logo-image" />
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
