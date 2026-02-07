import React from 'react'
import { Link } from 'react-router-dom'
import './NewPage.css'

const NewPage = () => {
  return (
    <section className="new-page">
      <div className="container">
        <div className="section-header">
          <h1 className="new-page-title">New Page</h1>
          <p className="new-page-subtitle">Welcome to your new page.</p>
          <Link to="/" className="new-page-link">← Back to Home</Link>
        </div>
      </div>
    </section>
  )
}

export default NewPage
