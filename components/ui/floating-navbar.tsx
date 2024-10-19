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

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
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
      <motion.div
        initial={{
          opacity: 1,
          y: -200,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.05,
        }}
        className={cn(
          `flex max-w-fit fixed top-12 sm:top-12 md:top-24 lg:top-28 inset-x-0 mx-auto border-2 border-transparent dark:border-black/[0.2] rounded-md 
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2  items-center justify-center space-x-5
          bg-gradient-to-b from-transparent to-transparent dark:from-cyan-500/20 dark:to-indigo-500/10`,
          className
        )}
      >
        {navItems.map(
          (
            navItem: { name: string; link: string; icon?: JSX.Element },
            idx: number
          ) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'relative dark:text-primary items-center flex space-x-1 text-foreground dark:hover:text-secondary focus:text-secondary'
              )}
            >
              {/* <span className="block sm:hidden">{navItem.icon}</span> */}
              <span className="text-sm md:text-xl">{navItem.name}</span>
            </Link>
          )
        )}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  )
}
