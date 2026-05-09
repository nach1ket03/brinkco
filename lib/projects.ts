export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tags: string[]
  result: string
  category: 'client' | 'personal' | 'ai'
  featured: boolean
  liveUrl: string | null
  githubUrl: string | null
  imageUrl: string | null
}

// TODO: replace placeholder URLs and imageUrls with real content
export const projects: Project[] = [
  {
    slug: 'aura-fitness',
    title: 'AURA Fitness',
    tagline: 'Luxury gym landing page with membership flow',
    description:
      'A premium gym web app built with Next.js and TypeScript. Includes animated landing page, service tiers, and Razorpay payment integration for membership sign-ups.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Razorpay'],
    result: 'Personal · Live',
    category: 'personal',
    featured: true,
    liveUrl: null, // TODO: add real URL
    githubUrl: 'https://github.com/nach1ket03/luxury-gym-app',
    imageUrl: null, // TODO: add screenshot
  },
  {
    slug: 'lumiere',
    title: 'LUMIÈRE Salon',
    tagline: 'High-end salon website for Pune market',
    description:
      'Elegant, photo-forward salon website with smooth scroll animations, service showcase, and WhatsApp booking integration. Targeted at premium local clientele.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    result: 'Client · Live',
    category: 'client',
    featured: true,
    liveUrl: null, // TODO: add real URL
    githubUrl: 'https://github.com/nach1ket03/lumiere',
    imageUrl: null, // TODO: add screenshot
  },
  {
    slug: 'internbot',
    title: 'InternBot',
    tagline: 'AI-powered internship search and cold email tool',
    description:
      'Self-contained HTML app using the Anthropic API to help students find internships and generate personalized cold outreach emails. No backend required.',
    tags: ['Anthropic API', 'JavaScript', 'HTML/CSS'],
    result: 'Personal · Shipped',
    category: 'ai',
    featured: true,
    liveUrl: null, // TODO: add real URL
    githubUrl: null, // TODO: add link
    imageUrl: null,
  },
  {
    slug: 'brink-co',
    title: 'Brink Co',
    tagline: 'This site — freelance agency + developer portfolio',
    description:
      'Rebuilt from a single HTML file into a full Next.js 14 application with TypeScript, Tailwind, and Framer Motion. Hybrid positioning for freelance clients and tech recruiters.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    result: 'Personal · Live',
    category: 'personal',
    featured: false,
    liveUrl: 'https://brinkco.vercel.app',
    githubUrl: 'https://github.com/nach1ket03/brinkco',
    imageUrl: null,
  },
]
