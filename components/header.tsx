import Image from 'next/image'
import Link from 'next/link'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { FloatingNav } from '@/components/ui/floating-navbar'

export const Header = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ]

  return (
    <header
      className="flex flex-row justify-between h-auto md:h-44 max-w-7xl
      2xl:mx-auto mx-5 my-5 lg:my-10
      border-b-[3px] border-b-secondary border-t-[3px] border-t-indigo-500 rounded-xl overflow-hidden"
    >
      <BackgroundBeamsWithCollision className="p-5 md:px-16 items-center justify-between md:justify-between">
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
        <FloatingNav navItems={navItems} />
      </BackgroundBeamsWithCollision>
    </header>
  )
}
