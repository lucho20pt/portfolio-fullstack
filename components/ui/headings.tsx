import React from 'react'

export const HeadingPrimary = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <h2 className="text-2xl md:text-3xl font-extralight uppercase p-10 text-slate-400 max-w-3xl text-center">
      {children}
    </h2>
  )
}
