import React from 'react'
import { useNavigate } from 'react-router-dom'
import { services } from '../data/servicesData'
import './Services.css'

const Services = () => {
  const navigate = useNavigate()

  const handleReadMore = (service) => {
    navigate(`/services/${service.slug}`)
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive event management solutions tailored to your needs
          </p>
        </div>

        <div className="services-content">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`service-card fade-in-up service-card-${service.accent}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button
                  type="button"
                  className="service-read-more"
                  onClick={() => handleReadMore(service)}
                >
                  Read more
                </button>
                <div className="service-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
