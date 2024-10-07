import Image from 'next/image'
import Link from 'next/link'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

export const Header = () => {
  return (
    <header className="flex flex-row justify-between border-b-[3px] border-b-secondary border-t-[1px] border-t-indigo-500">
      <BackgroundBeamsWithCollision className="p-4 md:pt-8 items-end justify-between md:justify-around">
        <h1>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto md-max-w-[60px] max-w-[40px]"
            />
          </Link>
        </h1>
        <nav className="flex flex-row gap-5 items-end">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </BackgroundBeamsWithCollision>
    </header>
  )
}
