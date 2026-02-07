export const services = [
  {
    slug: 'running-tournament',
    icon: '🏃‍♂️',
    title: 'Running Tournament',
    description:
      'Organize and manage competitive running events including marathons, half-marathons, 5K runs, and track meets.',
    fullDescription:
      'From community 5K fun runs to professional marathons, we handle every detail of your running event. Our team manages registration, timing systems, course design, safety protocols, and post-race celebrations so you can focus on the runners.',
    features: [
      'Marathon, half-marathon, 5K & 10K event planning',
      'Chip timing and results management',
      'Course design and safety coordination',
      'Registration and participant communication',
      'Aid stations and medical support',
    ],
    accent: 'sports',
  },
  {
    slug: 'sports-tournament-management',
    icon: '🏆',
    title: 'Sports Tournament Management',
    description:
      'End-to-end management of competitive sports tournaments. From registration to awards, we handle every aspect with precision and passion.',
    fullDescription:
      'Whether it\'s basketball, football, cricket, or any other sport, we deliver professional tournament management. From brackets and scheduling to officiating and live scoring, we ensure a seamless, fair, and exciting experience for players and spectators.',
    features: [
      'Bracket creation and schedule management',
      'Referee and official coordination',
      'Live scoring and standings',
      'Registration and team management',
      'Trophies, medals, and award ceremonies',
    ],
    accent: 'sports',
  },
  {
    slug: 'yoga-wellness-events',
    icon: '🧘',
    title: 'Yoga & Wellness Events',
    description:
      'Curated wellness experiences including yoga sessions, meditation workshops, and holistic health events that nurture mind, body, and soul.',
    fullDescription:
      'Create meaningful wellness experiences for your community or corporate group. We design and run yoga retreats, meditation workshops, and holistic health events in serene venues with certified instructors and a calming atmosphere.',
    features: [
      'Yoga sessions and retreats',
      'Meditation and mindfulness workshops',
      'Holistic health and nutrition talks',
      'Venue selection and ambiance setup',
      'Instructor coordination and materials',
    ],
    accent: 'yoga',
  },
  {
    slug: 'corporate-community-events',
    icon: '🏢',
    title: 'Corporate / Community Events',
    description:
      'Custom event solutions for corporate teams and local communities. Team-building activities, community gatherings, and special occasions.',
    fullDescription:
      'Strengthen teams and bring communities together with tailored events. We design corporate offsites, team-building activities, community festivals, and special occasions that align with your goals and create lasting memories.',
    features: [
      'Team-building and corporate retreats',
      'Community festivals and gatherings',
      'Custom activity design and facilitation',
      'Catering and logistics coordination',
      'Photography and recap packages',
    ],
    accent: 'sports',
  },
  {
    slug: 'venue-logistics-planning',
    icon: '📍',
    title: 'Venue & Logistics Planning',
    description:
      'Comprehensive venue selection, setup coordination, equipment management, and seamless logistics to ensure flawless event execution.',
    fullDescription:
      'The right venue and smooth logistics make or break an event. We handle venue sourcing, layout design, equipment rental, power and connectivity, signage, and on-site coordination so your event runs without a hitch.',
    features: [
      'Venue sourcing and site visits',
      'Layout and floor plan design',
      'Equipment rental and setup',
      'Power, Wi-Fi, and technical requirements',
      'On-site logistics and crew management',
    ],
    accent: 'yoga',
  },
  {
    slug: 'box-cricket',
    icon: '🏏',
    title: 'Box Cricket',
    description:
      'Manage exciting box cricket tournaments with professional setup, scoring systems, and competitive formats.',
    fullDescription:
      'Box cricket brings fast-paced, indoor cricket action to any space. We set up professional nets, manage scoring, run leagues and knockouts, and create a competitive yet fun environment for players of all skill levels.',
    features: [
      'Indoor net setup and safety',
      'Scoring systems and leaderboards',
      'League and knockout formats',
      'Team registration and fixtures',
      'Prizes and winner ceremonies',
    ],
    accent: 'sports',
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
