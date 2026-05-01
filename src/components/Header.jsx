import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import logoImage from '../Gemini_Generated_Image_qbyecyqbyecyqbye-removebg-preview.png'
import bannerImage from '../Square banner.svg'
import './Header.css'

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBannerOpen, setIsBannerOpen] = useState(false)
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

  useEffect(() => {
    if (typeof window === 'undefined') return
    let hasSeen = false
    try {
      hasSeen = window.sessionStorage.getItem('actifyme_banner_seen') === '1'
    } catch (err) {
      hasSeen = false
    }
    if (hasSeen) return
    const timer = window.setTimeout(() => {
      setIsBannerOpen(true)
      try {
        window.sessionStorage.setItem('actifyme_banner_seen', '1')
      } catch (err) {
        // sessionStorage unavailable; fail silently
      }
    }, 800)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isBannerOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsBannerOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isBannerOpen])

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

  const openBanner = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsBannerOpen(true)
  }

  const closeBanner = () => setIsBannerOpen(false)

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'events', label: 'Events', badge: 'NEW' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => isHome ? scrollToSection('home') : navigate('/')}>
          <img src={logoImage} alt="Actifyme Logo" className="logo-image" />
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
              {item.badge && (
                <button
                  type="button"
                  className="nav-link-badge"
                  aria-label={`See what's new in ${item.label}`}
                  onClick={openBanner}
                >
                  <span className="nav-link-badge-pulse" aria-hidden="true"></span>
                  <span className="nav-link-badge-text">{item.badge}</span>
                </button>
              )}
            </div>
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

      {isBannerOpen && createPortal(
        (
          <div
            className="banner-modal-overlay"
            onClick={closeBanner}
            role="dialog"
            aria-modal="true"
            aria-label="Latest event announcement"
          >
            <div
              className="banner-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="banner-modal-close"
                onClick={closeBanner}
                aria-label="Close announcement"
              >
                &times;
              </button>
              <div className="banner-modal-image-wrap">
                <img
                  src={bannerImage}
                  alt="Latest event announcement"
                  className="banner-modal-image"
                />
              </div>
            </div>
          </div>
        ),
        document.body
      )}
    </header>
  )
}

export default Header
