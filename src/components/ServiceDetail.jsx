import React from 'react'
import './ServiceDetail.css'

const ServiceDetail = ({ service, onBack, onContactClick }) => {
  if (!service) return null

  const handleContactClick = (e) => {
    e.preventDefault()
    if (onContactClick) {
      onContactClick(e)
    } else {
      onBack?.()
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }

  return (
    <>
      <section className="service-detail-hero" aria-label={`${service.title} - Hero`}>
        <div className="service-detail-hero-content container">
          <div className="service-detail-hero-text">
            <h1 className="service-detail-hero-title">{service.title}</h1>
            <p className="service-detail-hero-subtitle">
              Comprehensive event management tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section id="service-detail" className="service-detail">
        <div className="container">
          <div className="service-detail-content">
          <div className="service-detail-card service-detail-description-card">
            <h2 className="service-detail-card-title">About this service</h2>
            <p className="service-detail-lead">{service.fullDescription}</p>
          </div>

          <div className="service-detail-card service-detail-features-card">
            <h2 className="service-detail-card-title">What we offer</h2>
            <ul className="service-detail-features-list">
              {service.features.map((feature, index) => (
                <li key={index} className="service-detail-feature-item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-detail-cta-wrap">
            <p className="service-detail-cta-text">Ready to get started?</p>
            <a href="#contact" className="btn btn-primary service-detail-cta-button" onClick={handleContactClick}>
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ServiceDetail
