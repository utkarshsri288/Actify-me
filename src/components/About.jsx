import React from 'react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Professional Event Planning',
      description: 'Meticulously organized events with attention to every detail',
    },
    {
      icon: '⚽',
      title: 'Sports & Running Expertise',
      description: 'Years of experience managing competitive sports tournaments and running events',
    },
    {
      icon: '🧘',
      title: 'Wellness & Yoga Focus',
      description: 'Creating serene spaces for mindfulness and holistic wellness',
    },
  ]

  const sportEquipment = [
    { icon: '⚽', delay: 0, duration: 6, x: '10%', y: '30%', zIndex: 10 },
    { icon: '🏀', delay: 0.8, duration: 7, x: '92%', y: '8%', zIndex: 10 },
    { icon: '🎾', delay: 1.5, duration: 5.5, x: '3%', y: '95%', zIndex: 10 },
    { icon: '🥊', delay: 2.5, duration: 5.8, x: '90%', y: '55%', zIndex: 10 },
  ]

  return (
    <section id="about" className="about">
      {/* Animated Sport Equipment */}
      <div className="sport-equipment-container">
        {sportEquipment.map((equipment, index) => (
          <div
            key={index}
            className="sport-equipment"
            style={{
              left: equipment.x,
              top: equipment.y,
              zIndex: equipment.zIndex,
              animationDelay: `${equipment.delay}s`,
              animationDuration: `${equipment.duration}s`,
            }}
          >
            <span className="equipment-icon">{equipment.icon}</span>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">About Actifyme</h2>
          <p className="section-subtitle">
            Bridging the gap between competitive sports and mindful wellness
          </p>
        </div>

        <div className="about-content">
          <div className="about-text fade-in-up">
            <p className="about-intro">
              Welcome to our fitness community! With years of certified experience, we
              offer exceptional experiences in bodyweight training, calisthenics, fun
              challenges, yoga, Zumba, Tabata, Pilates, marathon and cycling events,
              boot camps, and fitness treks. Join us for a healthier life!
            </p>

            <div className="mission-vision">
              <div className="mission-vision-item">
                <h3 className="mv-title">Our Mission</h3>
                <p className="mv-text">
                  To create exceptional fitness and wellness experiences that foster
                  community, promote healthy competition, and inspire personal growth.
                </p>
              </div>
              <div className="mission-vision-item">
                <h3 className="mv-title">Our Vision</h3>
                <p className="mv-text">
                  To become the leading fitness and wellness platform that seamlessly
                  connects sports enthusiasts and wellness seekers through unforgettable
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card fade-in-up"
                style={{ animationDelay: `${index * 0.2}s`, zIndex: 20 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
