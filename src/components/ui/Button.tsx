import Link from 'next/link'
import { clsx } from 'clsx'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  icon?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  icon = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-lg
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `

  const variants = {
    primary: `
      bg-primary-700 text-white
      hover:scale-[1.02] hover:shadow-lg
      active:scale-[0.98]
    `,
    secondary: `
      bg-white text-primary-700 border-2 border-primary-700
      hover:scale-[1.02] hover:shadow-lg
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-white border-2 border-white
      hover:bg-white hover:text-primary-700 hover:scale-[1.02]
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-primary-700
      hover:bg-primary-100
      active:bg-primary-200
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = clsx(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  )
}
