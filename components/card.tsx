import * as React from 'react'

import { cn } from '@/lib/utils'

// card
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col items-center justify-center p-5 h-auto md:w-5/12 gap-6 border-t rounded-md bg-secondary/15 hover:bg-secondary/20 text-white [&>*]:w-full border',
      className
    )}
    {...props}
  />
))
Card.displayName = 'Card'

// header
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-row items-center justify-between h-20 p-4 rounded-sm gap-4 bg-secondary/20 border-t border-secondary/50 shadow-sm shadow-secondary',
      className
    )}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

// heading
const CardHeading = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'font-semibold leading-none tracking-tight text-left',
      className
    )}
    {...props}
  />
))
CardHeading.displayName = 'CardHeading'

// title
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'font-semibold leading-none tracking-tight text-left',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

// description
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

// content
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'p-4 text-left text-slate-300',
      className
    )}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

// footer
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-row items-center justify-between p-4 gap-5 rounded-md shadow-sm shadow-secondary bg-secondary/15',
      className
    )}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export {
  Card,
  CardHeader,
  CardHeading,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
}
