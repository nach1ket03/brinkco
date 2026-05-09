import { type Project } from '@/lib/projects'
import Badge from './Badge'
import { GitBranch, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const categoryLabel: Record<Project['category'], string> = {
  client: 'CLIENT',
  personal: 'PERSONAL',
  ai: 'AI',
}

const categoryStyle: Record<Project['category'], string> = {
  client: 'bg-[--lime] text-[--bg-0]',
  personal: 'border border-[--lime-border] text-[--lime]',
  ai: 'bg-[--lime] text-[--bg-0]',
}

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        'group block bg-[--bg-2] border border-[--border] rounded-sm overflow-hidden',
        'transition-all duration-400 ease-out',
        'hover:-translate-y-2 hover:border-[--lime-border] hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]',
        featured && 'col-span-full md:col-span-2'
      )}
    >
      {/* Image / Placeholder */}
      <div className={cn('relative w-full overflow-hidden', featured ? 'aspect-[21/9]' : 'aspect-[16/10]')}>
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[--bg-3] flex items-center justify-center relative">
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
              aria-hidden="true"
            />
            <span className="font-display font-extrabold text-[3rem] text-[--lime] relative z-10 select-none">
              {initials}
            </span>
          </div>
        )}

        {/* Category badge overlay */}
        <span
          className={cn(
            'absolute top-3 left-3 font-mono text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded-sm',
            categoryStyle[project.category]
          )}
        >
          {categoryLabel[project.category]}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-display font-bold text-[1.25rem] text-[--text-1] mb-1 leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-[0.875rem] text-[--text-2] mb-4 leading-relaxed">
          {project.tagline}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.7rem] text-[--text-3] uppercase tracking-wide">
            {project.result}
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <span
                onClick={(e) => {
                  e.preventDefault()
                  window.open(project.githubUrl!, '_blank', 'noopener,noreferrer')
                }}
                className="text-[--text-3] hover:text-[--lime] transition-colors duration-200 cursor-pointer"
                role="button"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GitBranch size={16} />
              </span>
            )}
            {project.liveUrl && (
              <span
                onClick={(e) => {
                  e.preventDefault()
                  window.open(project.liveUrl!, '_blank', 'noopener,noreferrer')
                }}
                className="text-[--text-3] hover:text-[--lime] transition-colors duration-200 cursor-pointer"
                role="button"
                aria-label={`View ${project.title} live site`}
              >
                <ExternalLink size={16} />
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
