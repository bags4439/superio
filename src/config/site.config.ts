/**
 * Super I/O Labs: Single source of truth
 * Update brand colors, fonts, and all site content here.
 */
export const siteConfig = {
  brand: {
    colors: {
      primary: '#FF8C00',
      primaryDark: '#E67E00',
      primaryLight: '#FFF3E0',
      secondary: '#26C6DA',
      secondaryDark: '#00ACC1',
      secondaryLight: '#E0F7FA',
      dark: '#0D1117',
      dark2: '#161B22',
      dark3: '#21262D',
      white: '#FFFFFF',
      offWhite: '#F9FAFB',
      surface: '#F3F4F6',
      border: '#E5E7EB',
      textPrimary: '#111827',
      textSecondary: '#6B7280',
      textTertiary: '#9CA3AF',
      success: '#10B981',
      successBg: '#D1FAE5',
    },
    fonts: {
      display: "'Syne', sans-serif",
      body: "'DM Sans', sans-serif",
      googleFontsUrl:
        'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Syne:wght@700;800&display=swap',
    },
    radii: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
    },
    shadows: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.06)',
      md: '0 4px 16px rgba(0, 0, 0, 0.08)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.12)',
      primary: '0 8px 28px rgba(255, 140, 0, 0.35)',
      secondary: '0 8px 28px rgba(38, 198, 218, 0.25)',
    },
    layout: {
      maxWidth: '1200px',
      navHeight: '68px',
      sectionPaddingX: 'clamp(20px, 5vw, 80px)',
      sectionPaddingY: '96px',
    },
  },

  site: {
    name: 'Super I/O',
    shortName: 'Super I/O',
    tagline: 'Input. Output. Impact.',
    description:
      'A Ghana-based tech studio building premium apps and websites for clients across Africa and the world.',
    url: 'https://superiolabs.com',
    locale: 'en_GH',
    themeColor: '#FF8C00',
  },

  contact: {
    email: 'superiotechgh@gmail.com',
    whatsapp: '+233271154324',
    whatsappMessage:
      'Hello Super I/O! I would like to discuss a project.',
    location: 'Accra, Ghana',
    officeHours: 'Mon – Fri, 9am – 6pm GMT',
  },

  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'How we work', href: '#how-it-works' },
    { label: 'Why us', href: '#why-us' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  navCta: {
    primary: { label: 'Start a project', href: '#contact' },
    secondary: { label: 'View our work', href: '#work' },
  },

  hero: {
    badge: 'Building from Ghana, shipping worldwide',
    title: ['We turn your', 'ideas into', 'digital products'],
    subtitle:
      'Super I/O designs and builds premium mobile apps and websites for startups and businesses in Ghana, across Africa, and beyond.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See how we work →',
    trustCount: '50+',
    trustLabel: 'projects delivered for clients worldwide',
    floatingBadges: ['Shipped on time', 'Production-ready code'],
  },

  stats: [
    { value: '50+', label: 'Projects delivered' },
    { value: '15+', label: 'Happy clients' },
    { value: '5+', label: 'Countries served' },
    { value: '3+', label: 'Years building' },
  ],

  services: {
    eyebrow: 'What we build',
    title: 'Full-stack digital\nproduct development',
    subtitle:
      'From concept to launch, we partner with you to design, build, and ship software that users love.',
    items: [
      {
        icon: '📱',
        title: 'Mobile apps',
        desc: 'Native-quality iOS and Android apps built with Flutter and React Native: fast, beautiful, and scalable.',
        tags: ['Flutter', 'React Native', 'iOS & Android'],
      },
      {
        icon: '🌐',
        title: 'Web applications',
        desc: 'Modern, responsive web apps and dashboards with React, TypeScript, and clean architecture.',
        tags: ['React', 'TypeScript', 'PWA'],
      },
      {
        icon: '🎨',
        title: 'UI/UX design',
        desc: 'User-centred design that balances aesthetics with usability, wireframes, prototypes, and design systems.',
        tags: ['Figma', 'Prototyping', 'Design systems'],
      },
      {
        icon: '🛒',
        title: 'Websites & landing pages',
        desc: 'High-converting marketing sites and corporate websites optimised for speed, SEO, and mobile.',
        tags: ['SEO', 'Performance', 'CMS'],
      },
      {
        icon: '☁️',
        title: 'Cloud & backend',
        desc: 'Secure APIs, databases, and cloud infrastructure on Firebase, AWS, and modern serverless stacks.',
        tags: ['Firebase', 'REST APIs', 'Serverless'],
      },
      {
        icon: '🔧',
        title: 'Ongoing support',
        desc: 'Post-launch maintenance, feature updates, and technical consulting to keep your product growing.',
        tags: ['Maintenance', 'Consulting', 'DevOps'],
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How we work',
    title: 'From brief to\nlaunch in 4 phases',
    subtitle:
      'A transparent, collaborative process designed to move fast without cutting corners.',
    steps: [
      {
        number: '1',
        title: 'Discovery',
        desc: 'We learn your goals, users, and constraints. Together we define scope, timeline, and success metrics.',
      },
      {
        number: '2',
        title: 'Design',
        desc: 'Wireframes and high-fidelity prototypes aligned to your brand. You approve before a single line of code is written.',
      },
      {
        number: '3',
        title: 'Build',
        desc: 'Agile development with regular demos. Clean architecture, tested code, and full transparency on progress.',
      },
      {
        number: '4',
        title: 'Launch & grow',
        desc: 'Deployment, handover, and ongoing support. We stay with you as your product evolves.',
      },
    ],
  },

  whyUs: {
    eyebrow: 'Why Super I/O',
    title: 'Built for Africa.\nReady for the world.',
    subtitle:
      'Local insight, global standards. We bring the best of both to every project.',
    items: [
      {
        icon: '🌍',
        title: 'Global-quality engineering',
        desc: 'Clean architecture, modern stacks, and production-grade code, the same standards used by top tech companies.',
      },
      {
        icon: '🇬🇭',
        title: 'Rooted in Ghana',
        desc: 'We understand the local market, payment systems, and connectivity realities, and build products that work here.',
      },
      {
        icon: '⚡',
        title: 'Speed without compromise',
        desc: 'Lean teams, clear communication, and efficient processes mean faster delivery without sacrificing quality.',
      },
      {
        icon: '🔒',
        title: 'Full transparency',
        desc: 'Fixed milestones, regular updates, and no hidden costs. You always know where your project stands.',
      },
      {
        icon: '🤝',
        title: 'True partnership',
        desc: 'We are not just vendors, we invest in understanding your business and grow alongside you.',
      },
      {
        icon: '📈',
        title: 'Built to scale',
        desc: 'Architecture decisions made early so your product can grow from MVP to thousands of users.',
      },
    ],
  },

  work: {
    eyebrow: 'Selected work',
    title: 'Products we have\nhelped build',
    subtitle:
      'A sample of the apps and platforms we have designed and shipped for clients.',
    items: [
      {
        name: 'Super I/O Kids',
        category: 'EdTech · Mobile App',
        desc: 'A parent-facing app for a coding academy, class schedules, recordings, billing, and referrals.',
        tags: ['Flutter', 'Firebase', 'iOS & Android'],
        color: 'orange',
      },
      {
        name: 'WHIPLYN',
        category: 'Marketplace · Web & Mobile',
        desc: 'Vehicle import platform connecting Ghanaian buyers with dedicated agents across US, Dubai, and China.',
        tags: ['React', 'Mobile', 'Real-time'],
        color: 'cyan',
      },
      {
        name: 'Just Bloom Spa',
        category: 'SaaS · Progressive Web App',
        desc: 'Offline-first spa management system, transactions, staff, reporting, and end-of-day reconciliation.',
        tags: ['React', 'PWA', 'SQLite'],
        color: 'orange',
      },
      {
        name: 'Your project here',
        category: 'Your industry · Your platform',
        desc: 'Ready to be the next success story? Let us build something remarkable together.',
        tags: ['Let\'s talk'],
        color: 'cyan',
        cta: true,
      },
    ],
  },

  about: {
    eyebrow: 'About us',
    title: 'Our story',
    body: [
      'Super I/O Labs was founded in Accra with a simple belief: world-class software should be accessible to businesses everywhere, not just in Silicon Valley.',
      'We combine deep local knowledge of the Ghanaian and African market with engineering practices used by leading global tech companies. The result is digital products that are beautiful, reliable, and built to last.',
      'Today we work with startups, SMEs, and enterprises across Ghana, West Africa, and internationally, turning ambitious ideas into products that make a real impact.',
    ],
    mission: {
      label: 'Our mission',
      text: 'To empower businesses in Ghana and across Africa with premium digital products, turning every input into meaningful output and lasting impact.',
    },
    stats: [
      { value: '50+', label: 'Projects delivered' },
      { value: '15+', label: 'Clients served' },
      { value: '5+', label: 'Countries' },
      { value: 'GH & beyond', label: 'Markets served' },
    ],
    imageAlt: 'Super I/O Labs team, Accra, Ghana',
  },

  contactSection: {
    eyebrow: 'Get in touch',
    title: "Let's build\nsomething great",
    subtitle:
      'Tell us about your project. We typically respond within one business day.',
    channels: [
      { icon: '📧', label: 'Email', key: 'email' as const },
      { icon: '💬', label: 'WhatsApp', key: 'whatsapp' as const },
      { icon: '📍', label: 'Location', key: 'location' as const },
      { icon: '🕐', label: 'Office hours', key: 'officeHours' as const },
    ],
    cta: {
      email: 'Send us an email',
      whatsapp: 'Chat on WhatsApp',
    },
  },

  footer: {
    description:
      'A Ghana-based tech studio building premium apps and websites for clients across Africa and the world.',
    columns: [
      {
        title: 'Services',
        links: [
          { label: 'Mobile apps', href: '#services' },
          { label: 'Web applications', href: '#services' },
          { label: 'UI/UX design', href: '#services' },
          { label: 'Websites', href: '#services' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Our work', href: '#work' },
          { label: 'How we work', href: '#how-it-works' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Email', href: 'mailto:superiotechgp@gmail.com' },
          { label: 'WhatsApp', href: 'https://wa.me/233271154324' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/company/super-io-africa/about/?viewAsMember=true' },
          { label: 'Twitter / X', href: '#' },
        ],
      },
    ],
    copyright: '© 2026 Super I/O Labs. All rights reserved.',
    legalLinks: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type BrandColors = typeof siteConfig.brand.colors;
