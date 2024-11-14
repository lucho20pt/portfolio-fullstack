import React from 'react'

export const HeadingPrimary = ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
  return (
    <h2 className={`${className} w-full text-2xl md:text-3xl font-extralight uppercase pt-10 pb-5 text-slate-400 max-w-2xl text-center mx-auto`}>
      {children}
    </h2>
  )
}