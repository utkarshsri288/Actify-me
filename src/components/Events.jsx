import React from 'react'
import './Events.css'

const Events = () => {
  const upcomingEvents = [
    {
      name: 'Run for Remembrance - 2nd Edition',
      location: 'Scout Cricket Academy',
      date: '2026-04-12',
      time: '5:30 AM IST Onwards',
      type: 'sports',
      status: 'Register Now',
      registerUrl: 'https://www.townscript.com/e/run-for-remembrance-2nd-edition-122440',
      runs: [
        {
          title: 'CHIP RUN (12th Apr, Sunday)',
          categories: [
            { name: '10 KM Chip Run', original: 1500, price: 750, discount: '50% OFF', features: 'Timing Chip / Refreshment / Medal / Hydration / Medical Support / Route Support / High Quality T-shirt / Photography / Zumba / Fitness Challenges / Awards / Trophies / Gifts' },
            { name: '5 KM Chip Run', original: 1200, price: 600, discount: '50% OFF', features: 'Timing Chip / Refreshment / Medal / Hydration / Medical Support / Route Support / High Quality T-shirt / Photography / Zumba / Fitness Challenges / Awards / Trophies / Gifts' },
          ],
        },
        {
          title: 'NON CHIP RUN (12th Apr, Sunday)',
          categories: [
            { name: '3 KM Non Chip Run', original: 1000, price: 500, discount: '50% OFF', features: 'Refreshment / Medal / Hydration / Medical Support / Route Support / High Quality T-shirt / Photography / Zumba / Fitness Challenges' },
          ],
        },
      ],
    },
  ]

  const pastEvents = [
    {
      name: 'Kids Fitness Summer Camp 2.0 - 2025 Edition',
      location: 'Sector 76, Noida',
      date: '2025-05-19',
      time: "May 19 - Jun 13 | 7:00 AM IST",
      type: 'yoga',
      status: 'Completed',
      description: 'A 4-week kids fitness camp (ages 5-12) featuring yoga, pranayama, meditation, running drills, bodyweight workouts, mini marathon, kho-kho, custom games, and healthy habit coaching.',
    },
    {
      name: 'Run for Remembrance 2025',
      location: 'Fortune World School, Sector 105, Noida',
      date: '2025-04-13',
      time: '5:30 AM IST Onwards',
      type: 'sports',
      status: 'Completed',
      description: 'A tribute run honoring martyrs with 10 KM and 5 KM chip runs plus a 3 KM non-chip fun run. Included medals, chip timing bibs, refreshments, hydration, medical support, Zumba sessions, and winner trophies.',
    },
    {
      name: "Noida's Unity Run Event - 5th Edition",
      location: 'Noida',
      date: '2025-10-02',
      time: '5:30 AM IST Onwards',
      type: 'sports',
      status: 'Completed',
      description: 'Categories: 10 KM and 5 KM chip run, plus 3 KM non-chip run. Featured premium dry-fit T-shirts, medals, hydration and medical support, Zumba sessions, photography, and winner trophies/gifts.',
    },
    {
      name: 'Swatantra Spirit Run 2025',
      location: 'K.R. Mangalam World School, Knowledge Park V, Noida Extension',
      date: '2025-08-10',
      time: '5:30 AM IST Onwards',
      type: 'sports',
      status: 'Completed',
      description: 'A freedom-themed run with 10 KM and 5 KM chip categories plus a 5 KM non-chip fun run. Included chip timing bibs, participation certificates, refreshments, hydration, medical support, Zumba, and event media coverage.',
    },
    {
      name: "Noida's Unity Run Event - 4th Edition",
      location: 'Noida, Sector 76 (near Amrapali Princely Estate)',
      date: '2024-10-02',
      time: '5:30 AM – 8:30 AM IST',
      type: 'sports',
      status: 'Completed',
      description: '10 KM, 5 KM, 3 KM categories. One of the most admired events in Noida 7x with scenic route, minimal traffic, and abundant greenery.',
    },
    {
      name: 'Bharat in Paris Virtual Run',
      location: 'Virtual Event',
      date: '2024-07-28',
      time: '6:30 AM – 11:00 PM IST',
      type: 'sports',
      status: 'Completed',
      description: 'Virtual run to promote India\'s Paris Olympic Movement. 3 km / 5 km / 10 km. Run, walk, or cycle at your own place.',
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
                      {event.type === 'sports' ? '🏃' : '🧘'}
                    </div>
                  </div>
                  <h4 className="event-name">{event.name}</h4>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <span className="event-detail-icon">📅</span>
                      <span>{formatDate(event.date)}{event.time ? ` | ${event.time}` : ''}</span>
                    </div>
                    <div className="event-detail-item">
                      <span className="event-detail-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.runs && (
                    <div className="event-runs">
                      {event.runs.map((run, runIndex) => (
                        <div key={runIndex} className="event-run-block">
                          <h5 className="event-run-title">{run.title}</h5>
                          {run.categories.map((cat, catIndex) => (
                            <div key={catIndex} className="event-run-category">
                              <div className="event-run-name">{cat.name}</div>
                              <div className="event-run-pricing">
                                <span className="event-run-original">₹{cat.original}</span>
                                <span className="event-run-price">₹{cat.price}</span>
                                <span className="event-run-discount">{cat.discount}</span>
                              </div>
                              <p className="event-run-features">{cat.features}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  {event.registerUrl && (
                    <a
                      href={event.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-register-link"
                    >
                      Register for tickets
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="events-section">
            <h3 className="events-section-title">Some of our Past Events</h3>
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
                      {event.type === 'sports' ? '🏃' : '🧘'}
                    </div>
                  </div>
                  <h4 className="event-name">{event.name}</h4>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <span className="event-detail-icon">📅</span>
                      <span>{formatDate(event.date)}{event.time ? ` | ${event.time}` : ''}</span>
                    </div>
                    <div className="event-detail-item">
                      <span className="event-detail-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.description && (
                    <p className="event-description">{event.description}</p>
                  )}
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
