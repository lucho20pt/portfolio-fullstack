import Image from 'next/image'
import Link from 'next/link'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

export const Header = () => {
  return (
    <header
      className="flex flex-row justify-between h-auto md:h-36 max-w-7xl
    2xl:mx-auto mx-5 my-5 lg:my-10
    border-b-[3px] border-b-secondary border-t-[3px]  border-t-indigo-500 rounded-xl overflow-hidden"
    >
      <BackgroundBeamsWithCollision className="p-5 md:px-16 items-end justify-between md:justify-between">
        <h1 className="hover:opacity-80">
          <Link href="/">
            <Image
              src="/logo2.svg"
              alt="Daniel Batista - logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto md:max-w-[70px] max-w-[40px]"
            />
          </Link>
        </h1>
        <nav className="flex flex-row gap-5 items-end h-full">
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
