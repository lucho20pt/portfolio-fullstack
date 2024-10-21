import Image from 'next/image'
import Link from 'next/link'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { GridDotBackground } from '@/components/ui/grind-dot-background'

export const Header = () => {
  const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ]

  return (
    <header
      className="flex h-20 sm:h-28 md:h-36 lg:h-44 mb-5
      shadow-secondary shadow-[0px_4px_5px_0px] 
      bg-gradient-to-b from-transparent to-transparent dark:from-secondary/50 dark:to-transparent"
    >
      <GridDotBackground className="dark:bg-grid-white/[0.05] bg-grid-black/[0.10]">
        <BackgroundBeamsWithCollision className="items-center justify-between container h-full">
          <h1 className="hover:opacity-80">
            <Link href="/">
              <Image
                src="/logo2.svg"
                alt="Daniel Batista - logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto max-w-[30px] md:max-w-[70px]"
              />
            </Link>
          </h1>
          <FloatingNav navItems={navItems} />
        </BackgroundBeamsWithCollision>
      </GridDotBackground>
    </header>
  )
}
