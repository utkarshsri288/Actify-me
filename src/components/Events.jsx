import React from 'react'
import './Events.css'

const Events = () => {
  const upcomingEvents = [
    {
      name: 'Summer Basketball Championship',
      location: 'City Sports Complex',
      date: '2024-07-15',
      type: 'sports',
      status: 'Register Soon',
    },
    {
      name: 'Sunrise Yoga Retreat',
      location: 'Beachfront Park',
      date: '2024-06-20',
      type: 'yoga',
      status: 'Register Soon',
    },
    {
      name: 'Community Football League',
      location: 'Regional Stadium',
      date: '2024-08-01',
      type: 'sports',
      status: 'Coming Soon',
    },
  ]

  const pastEvents = [
    {
      name: 'Spring Wellness Festival',
      location: 'Downtown Plaza',
      date: '2024-04-10',
      type: 'yoga',
      status: 'Completed',
    },
    {
      name: 'Winter Volleyball Tournament',
      location: 'Indoor Arena',
      date: '2024-02-18',
      type: 'sports',
      status: 'Completed',
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <section id="events" className="events">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Events</h2>
          <p className="section-subtitle">
            Join us for exciting sports tournaments and transformative wellness experiences
          </p>
        </div>

        <div className="events-content">
          <div className="events-section">
            <h3 className="events-section-title">Upcoming Events</h3>
            <div className="events-grid">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`event-card fade-in-up event-card-${event.type}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="event-header">
                    <span className={`event-badge event-badge-${event.type}`}>
                      {event.status}
                    </span>
                    <div className="event-icon">
                      {event.type === 'sports' ? '⚽' : '🧘'}
                    </div>
                  </div>
                  <h4 className="event-name">{event.name}</h4>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <span className="event-detail-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="event-detail-item">
                      <span className="event-detail-icon">📅</span>
                      <span>{formatDate(event.date)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="events-section">
            <h3 className="events-section-title">Past Events</h3>
            <div className="events-grid">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className={`event-card fade-in-up event-card-past event-card-${event.type}`}
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="event-header">
                    <span className="event-badge event-badge-past">{event.status}</span>
                    <div className="event-icon">
                      {event.type === 'sports' ? '⚽' : '🧘'}
                    </div>
                  </div>
                  <h4 className="event-name">{event.name}</h4>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <span className="event-detail-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="event-detail-item">
                      <span className="event-detail-icon">📅</span>
                      <span>{formatDate(event.date)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
