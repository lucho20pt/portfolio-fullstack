'use server'

import { client } from '@/app/utils/client'
import nodemailer from 'nodemailer'
import type {
  Hero,
  Page,
  TechSkillList,
  Services,
  Article,
  ProjectsList,
} from '@/sanity.types'
import { HeroProps } from '@/components/hero'
import { TechSkillsProps } from '@/components/tech-skills'
import { ServicesProps } from '@/components/services'
import { ArticleProps } from '@/components/about'
import { ProjectListProps, ProjectDetailProps } from '@/components/projects'

// PageProps interface
export type PageProps = Page

// Get all pages
export async function getAllPages(): Promise<Page[]> {
  const data = await client.fetch<Page[]>(`*[_type == "page"] `)
  return data
}

// Get Metadata
export async function getMetadata(
  page: string
): Promise<{ title: string; description: string } | null> {
  const data = await client.fetch<Page[]>(
    `*[_type == "page" && title.current == "${page}"]
    {
      metadata
    }`
  )

  if (data.length > 0) {
    const metadata = data[0]?.metadata
    if (metadata) {
      return Object(metadata)
    }
  }

  return null
}

// Get HERO component data
export async function getHero(page: string): Promise<HeroProps | null> {
  try {
    const data = await client.fetch<Page[]>(
      `*[_type == "page" && title.current == "${page}"]`
    )

    if (data.length > 0) {
      const heroComponent = data[0].components?.find(
        (component): component is { _key: string } & Hero =>
          component._type === 'hero'
      )
      if (heroComponent) {
        // console.log(heroComponent)
        return Object(heroComponent)
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return null
  }
}

// Get TECH_SKILLS component data
export async function getTechSkills(
  page: string
): Promise<TechSkillsProps | null> {
  try {
    const data = await client.fetch<Page[]>(
      `*[_type == "page" && title.current == "${page}"]`
    )

    if (data.length > 0) {
      const techSkillListComponent = data[0].components?.find(
        (component): component is { _key: string } & TechSkillList =>
          component._type === 'techSkillList'
      )
      if (techSkillListComponent) {
        return Object(techSkillListComponent)
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching tech skills data:', error)
    return null
  }
}

// Get SERVICES component data
export async function getServices(page: string): Promise<ServicesProps | null> {
  try {
    const data = await client.fetch<Page[]>(
      `*[_type == "page" && title.current == "${page}"]`
    )

    if (data.length > 0) {
      const servicesComponent = data[0].components?.find(
        (component): component is { _key: string } & Services =>
          component._type === 'services'
      )
      if (servicesComponent) {
        return Object(servicesComponent)
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching services data:', error)
    return null
  }
}

// Get Articles component data
export async function getArticles(
  page: string
): Promise<ArticleProps[] | null> {
  try {
    const data = await client.fetch<Page[]>(
      `*[_type == "page" && title.current == "${page}"]`
    )

    if (data.length > 0) {
      const articlesData = data[0].components?.filter(
        (component): component is { _key: string } & Article =>
          component._type === 'article'
      )
      if (articlesData && articlesData.length > 0) {
        // console.log('articlesData', articlesData)
        return Object(articlesData)
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching articles data:', error)
    return null
  }
}

// Send CONTACT form data
export async function sendEmail(
  subject: string,
  name: string,
  email: string,
  message: string,
  consent: boolean
) {
  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.CONTACT_SMTP_SERVER,
    port: Number(process.env.CONTACT_SMTP_PORT),
    auth: {
      user: process.env.CONTACT_SMTP_EMAIL,
      pass: process.env.CONTACT_SMTP_PASSWORD,
    },
  })
  // console.log('transporter', transporter)

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.CONTACT_SMTP_EMAIL, // Use the sender email
      replyTo: email, // Add the reply-to address
      to: process.env.CONTACT_SMTP_EMAIL, // Receiving email
      subject: `${subject} from ${name}`,
      text: `Message: ${message}\n\nConsent: ${consent ? 'Yes' : 'No'}`,
    })

    return { success: true, message: 'Email sent successfully' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Error sending email' }
  }
}

// Get ProjectsList component data
export async function getProjectsList(
  page: string
): Promise<ProjectListProps | null> {
  try {
    const data = await client.fetch<Page[]>(
      `*[_type == "page" && title.current == "${page}"]`
    )

    if (data.length > 0) {
      const projectsData = data[0].components?.find(
        (component): component is { _key: string } & ProjectsList =>
          component._type === 'projectsList'
      )

      if (projectsData) {
        return Object(projectsData)
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching projects data:', error)
    return null
  }
}

// Get ProjectDetail component data
export async function getProjectDetail(
  page: string,
  id: string
): Promise<ProjectDetailProps | null> {
  try {
    // Reuse getProjectsList function to fetch projects list
    const projectsList = await getProjectsList(page)

    if (projectsList && projectsList.project) {
      // Find the project by _key
      const project = projectsList.project.find((proj) => proj._key === id)
      return project ? project : null
    }

    return null
  } catch (error) {
    console.error('Error fetching project detail:', error)
    return null
  }
}
