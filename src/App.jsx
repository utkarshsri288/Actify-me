import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ServiceDetailPage from './components/ServiceDetailPage'
import Events from './components/Events'
import Blog from './components/Blog'
import BlogPostPage from './components/BlogPostPage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NewPage from './components/NewPage'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'events', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const homeContent = () => (
      <>
        <Header activeSection={activeSection} />
        <Hero />
        <About />
        <Services />
        <Events />
        <Blog />
        <Contact />
        <Footer />
      </>
  )

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={homeContent()} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/blog/:postIndex" element={<BlogPostPage />} />
        <Route path="/new-page" element={
          <>
            <Header activeSection="home" />
            <NewPage />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
