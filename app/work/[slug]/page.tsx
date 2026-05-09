import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { ArrowLeft, GitBranch, ExternalLink } from 'lucide-react'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
  }
}

const caseStudyContent: Record<
  string,
  { challenge: string; built: string; learned: string }
> = {
  'aura-fitness': {
    challenge:
      'Gym membership pages are notorious for high bounce rates. The challenge was building a landing experience that communicated premium quality immediately, while making the sign-up process feel effortless rather than like filling out a government form.',
    built:
      'A Next.js 14 application with a full animated landing page, tiered membership cards, and a Razorpay checkout integration. Framer Motion handles the entrance animations, and Tailwind keeps the visual system tight across all breakpoints.',
    learned:
      'Payment gateway integration taught me a lot about error state UX — what happens when a payment fails, times out, or the user navigates away mid-flow. Handling those edge cases gracefully is where most apps fall short.',
  },
  lumiere: {
    challenge:
      'The client wanted a website that felt as premium as their salon, but most templates in their budget looked generic. The brief was to compete visually with high-end brands while keeping the WhatsApp booking flow that their existing clients were used to.',
    built:
      'A photo-forward Next.js site with smooth scroll animations and a service showcase built around high-contrast editorial typography. The WhatsApp booking integration uses a pre-filled message so clients arrive with context, reducing back-and-forth.',
    learned:
      "Working with a real client taught me that the hardest part isn't the code — it's managing expectations and extracting clear requirements. I now start every project with a written brief before touching a code editor.",
  },
  internbot: {
    challenge:
      'Most job-search tools assume you have a polished resume and know how to write cold emails. For MCA students (myself included), neither is a given. The challenge was building something useful enough to actually use, with zero backend.',
    built:
      'A self-contained HTML app that calls the Anthropic Claude API directly from the browser. It analyzes the user\'s background, finds relevant internship angles, and generates personalized cold outreach emails. No server, no database — just a smart prompt and clean UI.',
    learned:
      'Building with LLM APIs taught me that prompt engineering is real engineering. The difference between a vague prompt and a precise one is the difference between a generic response and something genuinely useful.',
  },
  'brink-co': {
    challenge:
      'The original site was a single HTML file that tried to serve two audiences — freelance clients and tech recruiters — and ended up feeling right for neither. The challenge was a full rebuild that resolved that positioning without making the site feel split-personality.',
    built:
      'This site, rebuilt as a Next.js 14 app with TypeScript, Tailwind, and Framer Motion. The solution was to use a premium developer aesthetic as the container, with freelance work displayed as proof-of-craft inside it. Both audiences see what they need without the other feeling excluded.',
    learned:
      'Design positioning is a product decision, not a visual one. Choosing to use dark editorial design as the container — rather than a bright "local business" template — communicates developer credibility first, with commercial work as evidence.',
  },
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const content = caseStudyContent[project.slug]
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[--bg-0] pt-24 pb-32">
      <div className="max-w-content mx-auto px-8">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-body text-[0.875rem] text-[--text-3] hover:text-[--lime] transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
          All Work
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
            <div>
              <h1 className="font-display font-extrabold text-[--text-1] mb-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                {project.title}
              </h1>
              <p className="font-body text-[--text-2] text-[1.1rem] max-w-[55ch] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button variant="primary" href={project.liveUrl}>
                <ExternalLink size={15} />
                Live Site
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="ghost" href={project.githubUrl}>
                <GitBranch size={15} />
                View Code
              </Button>
            )}
          </div>
        </div>

        {/* Hero image / placeholder */}
        <div className="w-full aspect-video rounded-sm overflow-hidden mb-20 relative bg-[--bg-2] border border-[--border]">
          {project.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
                aria-hidden="true"
              />
              <span className="font-display font-extrabold text-[5rem] text-[--lime] select-none relative z-10">
                {initials}
              </span>
            </div>
          )}
          {/* TODO: replace with real project screenshot */}
        </div>

        {/* Case study content */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div className="hidden md:block" />
          <div className="flex flex-col gap-16">
            {[
              { heading: 'The Challenge', body: content.challenge },
              { heading: 'What I Built', body: content.built },
              { heading: 'What I Learned', body: content.learned },
            ].map((section) => (
              <section key={section.heading}>
                <h2 className="font-display font-bold text-[--lime] text-[0.8rem] uppercase tracking-widest mb-4">
                  {section.heading}
                </h2>
                <p className="font-body text-[--text-2] leading-relaxed text-[1rem] max-w-[65ch]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>

        {/* Back link bottom */}
        <div className="mt-20 pt-12 border-t border-[--border]">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-body text-[0.875rem] text-[--text-3] hover:text-[--lime] transition-colors duration-200 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to all work
          </Link>
        </div>
      </div>
    </div>
  )
}
