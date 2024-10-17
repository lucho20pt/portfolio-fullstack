import { client } from '@/app/utils/client'
import type {
  Hero,
  Page,
  //   TechSkillList,
  //   TechSkill,
  //   Slug,
  //   SanityImageAsset,
  //   SanityImageCrop,
  //   SanityImageHotspot,
  //   SanityImageMetadata,
  //   SanityImagePalette,
  //   SanityImagePaletteSwatch,
  //   SanityImageDimensions,
  //   SanityFileAsset,
  //   Geopoint,
} from '@/sanity.types'

// HeroProps interface
export type HeroProps = Hero

// PageProps interface
export type PageProps = Page

// Get all pages
export async function getAllPages(): Promise<Page[]> {
  try {
    const data = await client.fetch<Page[]>(`*[_type == "page"] `)
    return data
  } catch (error) {
    throw error // Rethrow the error to be caught by the caller
  }
}

// Get hero component data
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
        return heroComponent
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return null
  }
}
