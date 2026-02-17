export const services = [
  {
    slug: 'runnig-eevent',
    icon: '🏃‍♂️',
    title: 'runnig eevent',
    description:
      'Plan and execute engaging running eevents, from fun runs to marathons, with smooth coordination and runner-first experiences.',
    fullDescription:
      'Our runnig eevent service is designed to deliver safe, exciting, and well-organized race days for all age groups and fitness levels. We handle registrations, route planning, on-ground operations, safety teams, hydration points, and results management so your participants enjoy a seamless and memorable experience.',
    features: [
      'Fun run, 5K, 10K, and marathon planning',
      'Online registration and participant updates',
      'Route mapping, permissions, and safety setup',
      'Hydration stations and on-site support teams',
      'Timing, leaderboard, and result announcements',
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
    slug: 'yoga-mindfulness-workshops',
    icon: '🧘',
    title: 'Yoga & Mindfulness Workshops',
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
    slug: 'corporate-wellness-programs',
    icon: '🏢',
    title: 'Corporate Wellness Programs',
    description:
      'Wellness-focused programs for organizations, including fitness sessions, stress management workshops, and team wellness challenges.',
    fullDescription:
      'Support employee health and workplace wellbeing with customized corporate wellness programs. We design and manage yoga sessions, fitness classes, mindfulness workshops, step challenges, and wellness campaigns that improve engagement, energy, and team morale.',
    features: [
      'On-site and virtual fitness sessions',
      'Yoga, meditation, and mindfulness workshops',
      'Employee wellness challenges and tracking',
      'Health talks on nutrition and lifestyle',
      'Program planning, scheduling, and reporting',
    ],
    accent: 'sports',
  },
  {
    slug: 'calisthenics-body-weight-trainings',
    icon: '📍',
    title: 'Calisthenics & Body Weight Trainings',
    description:
      'Structured calisthenics and body weight training sessions focused on strength, mobility, endurance, and functional fitness.',
    fullDescription:
      'Build real-world strength and control through guided calisthenics and body weight training programs. Our sessions are designed for beginners to advanced participants, with progressive routines, coach-led form correction, and performance tracking to ensure safe and consistent improvement.',
    features: [
      'Beginner to advanced calisthenics progressions',
      'Push, pull, core, and mobility training modules',
      'Coach-led form correction and injury prevention',
      'Group classes and personalized workout plans',
      'Performance assessment and progress tracking',
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
