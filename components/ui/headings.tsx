import React from 'react'

export const HeadingPrimary = ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
  return (
    <h2 className={`${className} w-full text-2xl md:text-3xl font-extralight uppercase p-10 text-slate-400 max-w-3xl text-center mx-auto`}>
      {children}
    </h2>
  )
}