import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='h-full'>
          <Link
            href={`/projects/${project.slug}`}
            className='block h-full rounded-xl border border-border p-5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-md hover:bg-accent/30 dark:hover:bg-accent/10'
          >
            <div className='flex h-full flex-col justify-between'>
              <div>
                <h2 className='text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary'>
                  {project.title}
                </h2>
                <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>
                  {project.summary}
                </p>
              </div>
              <p className='text-xs text-muted-foreground'>
                {formatDate(project.publishedAt ?? '')}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
