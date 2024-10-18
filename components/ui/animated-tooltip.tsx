'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { urlFor } from '@/app/utils/sanityImage'

export interface Item {
  _key: string
  id: number
  skill: string
  designation: string
  image: string
  imageUrl: string
}

interface AnimatedTooltipProps {
  items: Item[]
}

export const AnimatedTooltip = ({
  items,
}: AnimatedTooltipProps): JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 200, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  )
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth)
  }

  return (
    <ul
      className="grid gap-10
    grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
    >
      {items &&
        items.map((item, index) => (
          <li
            key={item._key}
            className="relative flex cursor-pointer rounded-xl p-6 items-center justify-center h-full 
           dark:bg-gradient-to-b from-cyan-700 to-transparent shadow-indigo-300
           hover:drop-shadow-xs dark:hover:shadow-foreground hover:bg-indigo-500/10 shadow"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: 'nowrap',
                  }}
                  className="absolute -top-16 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md z-50 px-4 py-2 
                bg-indigo-500/80 dark:bg-indigo-500/50
                dark:border-2 dark:border-secondary"
                >
                  {/* <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-secondary to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-secondary to-transparent h-px " /> */}
                  <div className="text-white relative z-30 text-lg">
                    <>{item.skill}</>
                  </div>
                  <div className="text-white text-sm">{item.designation}</div>
                </motion.div>
              )}
            </AnimatePresence>
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              alt={item.skill}
              className="object-cover !m-0 !p-0 object-top relative transition duration-500"
              src={urlFor(item.image).width(200).url()}
            />
          </li>
        ))}
    </ul>
  )
}
