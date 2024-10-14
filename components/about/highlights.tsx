import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface HighlightsProps {
  title: JSX.Element | string
  description: (JSX.Element | string)[]
}

export const Highlights = ({ title, description }: HighlightsProps) => {
  return (
    <article
      className={`${inter.className} antialiased 
      flex flex-col text-left gap-4 font-normal`}
    >
      <h2 className="text-4xl md:text-6xl font-bold my-8">{title}</h2>
      {description.map((copy, i) => (
        <p key={i} className="text-md md:text-lg">
          {copy}
        </p>
      ))}
    </article>
  )
}
