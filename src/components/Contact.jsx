import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const EMAILJS_SERVICE_ID = 'service_xthedoj'
const EMAILJS_TEMPLATE_ID = 'template_a9qc9ru'
const EMAILJS_PUBLIC_KEY = '-DEZd4L9QtTr8os2M'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone || 'Not provided',
      message: formData.message,
      reply_to: formData.email,
      to_name: 'ActifyMe Team',
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      const errorMessage =
        typeof error === 'object' && error !== null && 'text' in error
          ? error.text
          : 'Sorry, we could not send your message right now. Please try again.'
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
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

              <button type="submit" className="btn btn-primary form-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
