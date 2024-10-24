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
}: AnimatedTooltipProps): React.JSX.Element => {
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
      className="flex flex-wrap justify-center gap-8 md:gap-10 w-full"
    >
      {items &&
        items.map((item, index) => (
          <li
            key={item._key}
            className="relative flex cursor-pointer rounded-2xl p-4 md:p-5 items-center justify-around 
            md:h-20 md:w-20 h-20 w-20
           dark:bg-gradient-to-b from-cyan-500/50 to-transparent shadow-secondary hover:shadow-indigo-500 shadow-[2px_2px_0px_0px]
           hover:drop-shadow-xs dark:hover:shadow-indigo-500 hover:bg-indigo-500/20"
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
                bg-indigo-500/80 dark:bg-indigo-900/70
                shadow-secondary gap-1 shadow-[0px_0px_3px_3px]"
                >
                  {/* <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-secondary to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-secondary to-transparent h-px " /> */}
                  <p className="text-indigo-100 text-2xl underline">
                    <strong>{item.skill}</strong>
                  </p>
                  <p className="text-white text-lg italic">{item.designation}</p>
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
