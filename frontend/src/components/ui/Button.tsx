import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

type LinkButtonProps = ButtonProps & {
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

type RouteButtonProps = ButtonProps & {
  to: string
}

type NativeButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'

const variants = {
  primary: 'bg-sky-600 text-white shadow-[0_18px_40px_-18px_rgba(14,116,144,0.7)] hover:bg-sky-500',
  secondary:
    'border border-slate-200 bg-white/90 text-slate-700 shadow-[0_14px_36px_-24px_rgba(15,23,42,0.45)] hover:border-slate-300 hover:bg-white',
  ghost: 'bg-transparent text-slate-600 hover:bg-white/60',
}

export function LinkButton({ children, href, variant = 'primary', className = '', ...props }: LinkButtonProps) {
  return (
    <a className={`${baseStyles} ${variants[variant]} ${className}`} href={href} {...props}>
      {children}
    </a>
  )
}

export function RouteButton({ children, to, variant = 'primary', className = '' }: RouteButtonProps) {
  return (
    <Link className={`${baseStyles} ${variants[variant]} ${className}`} to={to}>
      {children}
    </Link>
  )
}

export function Button({ children, variant = 'primary', className = '', ...props }: NativeButtonProps) {
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
