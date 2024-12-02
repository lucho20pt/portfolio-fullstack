'use client'
import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MdHome } from 'react-icons/md'
import { usePathname } from 'next/navigation'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.JSX.Element
  }[]
  className?: string
}) => {
  const pathname = usePathname()

  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.005) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -300,
        }}
        animate={{
          y: visible ? 0 : -150,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          `flex max-w-fit fixed inset-x-0 mx-auto z-[5000] px-2 sm:px-4 py-2
          top-[86px] md:top-[94px] lg:top-[122px]
          items-center justify-center space-x-3 sm:space-x-8
          rounded-sm border-t border-t-secondary
          bg-gradient-to-b from-transparent to-transparent dark:from-black/30 dark:to-black/70`,
          className
        )}
      >
        <Link
          href="/"
          className={cn(
            'relative items-center flex text-foreground dark:text-primary dark:hover:text-indigo-400 focus:text-secondary'
          )}
        >
          <span
            className={`${pathname === `/` ? 'text-secondary' : ''} 
            text-xl sm:text-2xl md:text-3xl xl:text-4xl mr-2`}
          >
            <MdHome />
          </span>
          <strong className="hidden text-sm sm:text-sm md:text-lg lg:text-xl">
            Home
          </strong>
        </Link>
        {navItems.map(
          (
            navItem: { name: string; link: string; icon?: React.JSX.Element },
            idx: number
          ) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                `text-foreground dark:text-primary dark:hover:text-indigo-400`
              )}
            >
              {/* <span className="block sm:hidden">{navItem.icon}</span> */}
              <strong
                className={`${pathname === `${navItem.link}` ? 'text-secondary' : ''} 
                text-sm sm:text-sm md:text-lg lg:text-xl`}
              >
                {navItem.name}
              </strong>
            </Link>
          )
        )}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.nav>
    </AnimatePresence>
  )
}
