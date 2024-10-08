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

export interface Item {
  id: number
  name: string
  designation: string
  image: string
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
    <ul className="grid md-gap-10 gap-8 md:grid-cols-7 grid-cols-4">
      {items.map((item) => (
        <li
          className="relative flex cursor-pointer rounded-xl p-6 items-center justify-center h-full 
           dark:bg-gradient-to-b from-indigo-500/50 to-transparent shadow-secondary
           hover:drop-shadow-xs dark:hover:shadow-foreground hover:bg-indigo-500/10 shadow"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
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
                  <>{item.name}</>
                </div>
                <div className="text-white text-sm">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top relative transition duration-500"
          />
        </li>
      ))}
    </ul>
  )
}
