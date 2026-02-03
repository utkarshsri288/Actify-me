import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello! I am interested in learning more about Actifyme events.'
    )
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+1234567890'
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions or want to organize an event? We'd love to hear from you
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper fade-in-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your event or inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-actions fade-in-up">
            <div className="action-card">
              <div className="action-icon">💬</div>
              <h3 className="action-title">Chat on WhatsApp</h3>
              <p className="action-description">
                Get instant responses and quick answers to your questions
              </p>
              <button className="btn btn-secondary action-btn" onClick={handleWhatsApp}>
                WhatsApp Us
              </button>
            </div>

            <div className="action-card">
              <div className="action-icon">📞</div>
              <h3 className="action-title">Call Us Now</h3>
              <p className="action-description">
                Speak directly with our team for personalized assistance
              </p>
              <button className="btn btn-primary action-btn" onClick={handleCall}>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
