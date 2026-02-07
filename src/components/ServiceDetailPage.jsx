import React from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ServiceDetail from './ServiceDetail'
import { services } from '../data/servicesData'

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/" replace />
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="App">
      <Header activeSection="services" />
      <ServiceDetail service={service} onContactClick={handleContactClick} />
      <Footer />
    </div>
  )
}

export default ServiceDetailPage
