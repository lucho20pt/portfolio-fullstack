import React from 'react'
import { Inter } from 'next/font/google'
import { PortableText } from '@portabletext/react'
import { HeadingPrimary } from '@/components/ui/headings'

const inter = Inter({ subsets: ['latin'] })

export type ArticleProps = {
  _key: string
  title: string
  description?: {
    _type: string
    _key: string
    children: { text: string; marks?: string[] }[]
    style: string
  }[]
}

export const Article = ({ _key, title, description }: ArticleProps) => {
  const paragraphs = description
    ? description
        .map((block) => {
          if (
            block.children.length === 1 &&
            block.children[0].text.includes('\n\n')
          ) {
            const splitText = block.children[0].text
              .split('\n\n')
              .map((text, index) => ({
                _type: 'block',
                _key: `${block._key}-${index}`,
                children: [{ _type: 'span', text }],
                style: block.style,
              }))
            return splitText
          }
          return [block]
        })
        .flat()
    : []

  return (
    <article
      key={_key}
      className={`${inter.className} antialiased gap-5 border-l border-secondary p-8
      flex flex-col font-normal max-w-4xl`}
    >
      <HeadingPrimary>{title}</HeadingPrimary>

      {paragraphs && (
        <PortableText
          value={paragraphs}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="text-lg font-light">{children}</p>
              ),
            },
            marks: {
              strong: ({ children }) => (
                <strong className="text-secondary">{children}</strong>
              ),
            },
          }}
        />
      )}
    </article>
  )
}
