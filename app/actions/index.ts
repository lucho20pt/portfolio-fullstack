// actions.ts
'use server'

import { client } from '@/app/utils/client'
import { HeroProps } from '@/components/hero'
import { TechSkillsProps } from '@/components/tech-skills'
import { ServicesProps } from '@/components/services/services'
import type { Hero, Page, TechSkillList, Services } from '@/sanity.types'

// PageProps interface
export type PageProps = Page

// Get all pages
export async function getAllPages(): Promise<Page[]> {
  const data = await client.fetch<Page[]>(`*[_type == "page"] `)
  return data
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
    const data = await client.fetch<Page[]>(`
      *[_type == "page" && title.current == "${page}"] {
        components[] {
          _key,
          _type,
          intro,
          subintro,
          skills[] {
            _key,
            _type,
            skill,
            designation,
            image {
              asset -> {
                url
              }
            }
          }
        }
      }
    `)

    if (data.length > 0) {
      const techSkillListComponent = data[0].components?.find(
        (component): component is { _key: string } & TechSkillList =>
          component._type === 'techSkillList'
      )
      if (techSkillListComponent) {
        return Object(techSkillListComponent) // Adjust to return skills
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
    const data = await client.fetch<Page[]>(`
      *[_type == "page" && title.current == "${page}"] 
        {
          components[] {
            _key,
            _type,
            intro,
            service[] {
              _key,
              _type,
              title,
              description,
              image {
                asset -> {
                  url
                }
              }
            }
          }
        }
    `)

    if (data.length > 0) {
      const servicesComponent = data[0].components?.find(
        (component): component is { _key: string } & Services =>
          component._type === 'services'
      )
      if (servicesComponent) {
        return Object(servicesComponent) // Adjust to return skills
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching services data:', error)
    return null
  }
}
