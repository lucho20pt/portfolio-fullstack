// app/projects/[id]/page.tsx
import { Metadata } from 'next'
import { getProjectDetail } from '@/app/actions'
import { ProjectDetail, ProjectDetailProps } from '@/components/projects'
import { ButtonSecondary } from '@/components/ui/tailwindcss-buttons'

// Set revalidation time for ISR
export const revalidate = 60

const page = 'Projects'

// Fetch Metadata
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params
  const project = await getProjectDetail(page, id)
  return {
    title: project ? `${project.title} | Projects` : 'Project not found',
    description: project
      ? project.tech.map((text) => text.skill).join(', ') // Join array into a single string
      : 'No description available',
  }
}

// Fetch Project Data
interface Params {
  params: Promise<{ id: string }>
}

export default async function ProjectDetailPage({ params }: Params) {
  const { id } = await params // Ensure params are awaited
  const project: ProjectDetailProps | null = await getProjectDetail(page, id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      <ProjectDetail project={project} />
      <ButtonSecondary
        href="/projects#projects"
        className="text-xl"
        aria-label="Back to Projects"
      >
        Back to Projects
      </ButtonSecondary>
    </>
  )
}
