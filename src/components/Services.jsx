import React from 'react'
import basketImage from '../basket-removebg-preview.png'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🏆',
      title: 'Sports Tournament Management',
      description:
        'End-to-end management of competitive sports tournaments. From registration to awards, we handle every aspect with precision and passion.',
      accent: 'sports',
    },
    {
      icon: '🧘',
      title: 'Yoga & Wellness Events',
      description:
        'Curated wellness experiences including yoga sessions, meditation workshops, and holistic health events that nurture mind, body, and soul.',
      accent: 'yoga',
    },
    {
      icon: '🏢',
      title: 'Corporate / Community Events',
      description:
        'Custom event solutions for corporate teams and local communities. Team-building activities, community gatherings, and special occasions.',
      accent: 'sports',
    },
    {
      icon: '📍',
      title: 'Venue & Logistics Planning',
      description:
        'Comprehensive venue selection, setup coordination, equipment management, and seamless logistics to ensure flawless event execution.',
      accent: 'yoga',
    },
  ]

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
                key={index}
                className={`service-card fade-in-up service-card-${service.accent}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-glow"></div>
              </div>
            ))}
          </div>

          <div className="services-image">
            <img src={basketImage} alt="Basket" className="basket-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
