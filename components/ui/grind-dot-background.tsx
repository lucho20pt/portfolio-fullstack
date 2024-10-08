export const GridDotBackground = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="rounded-4xl w-full dark:bg-transparent bg-background dark:bg-grid-white/[0.10] bg-grid-black/[0.10] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  )
}
