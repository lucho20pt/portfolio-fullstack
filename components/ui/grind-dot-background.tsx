import React from 'react'
import { cn } from '@/lib/utils'

export const GridDotBackground = ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className: string }>) => {
  return (
    <div
      className={cn(
        'rounded-4xl w-full dark:bg-transparent bg-background relative flex items-center justify-center',
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  )
}
