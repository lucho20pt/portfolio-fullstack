'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export const ButtonPrimary = ({
  children,
  className,
  onClick,
  href,
  type,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  type?: 'reset' | 'button' | 'submit'
}) => {
  const router = useRouter()
  const handleClick = () => {
    if (href) {
      router.push(href)
    } else if (onClick) {
      onClick()
    }
  }
  return (
    <button
      className={cn(
        'inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-secondary bg-[linear-gradient(110deg,#000103,20%,#24A8A8,60%,#000103)] hover:bg-[linear-gradient(110deg,#000103,20%,#CBACF9,60%,#000103)] bg-[length:200%_100%] px-6 font-medium text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-secondary',
        className
      )}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  )
}
