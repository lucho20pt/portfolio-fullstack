import Image from 'next/image'
import Link from 'next/link'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { GridDotBackground } from '@/components/ui/grind-dot-background'
import { FaLinkedin } from 'react-icons/fa6'

export const Header = () => {
  const navItems = [
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ]

  return (
    <header
      className="flex h-32 md:h-36 lg:h-44 mb-2
      shadow-secondary shadow-[0px_4px_5px_0px] 
      bg-gradient-to-b from-transparent to-transparent dark:from-secondary/70 dark:to-transparent"
    >
      <GridDotBackground className="dark:bg-grid-white/[0.05] bg-grid-black/[0.10]">
        <BackgroundBeamsWithCollision className="items-center justify-between container h-full">
          {/*logo*/}
          <h1 className="hover:opacity-80">
            <Link href="/" aria-label="Home">
              <Image
                src="/logo2.svg"
                alt="Daniel Batista - logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-[40px] md:w-[70px] mb-5"
              />
            </Link>
            <span className="hidden">Daniel Batista</span>
          </h1>

          {/*site navigation*/}
          <FloatingNav navItems={navItems} />

          {/*linkedin*/}
          <div className="hover:opacity-80">
            <Link
              href="https://www.linkedin.com/in/daniel-batista-0609a430"
              target="_blank"
              aria-label="Daniel Batista LinkedIn"
            >
              <FaLinkedin className="h-auto w-[32px] md:w-[40px] mb-3" />
            </Link>
            <span className="hidden">Daniel Batista Linkedin</span>
          </div>
        </BackgroundBeamsWithCollision>
      </GridDotBackground>
    </header>
  )
}
