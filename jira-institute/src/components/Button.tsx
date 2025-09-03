import type { ComponentProps } from 'react'
import clsx from 'classnames'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'
  const styles = {
    primary: 'bg-[color:var(--color-blue-primary)] text-white hover:opacity-90 focus:ring-blue-600',
    secondary: 'bg-[color:var(--color-gray-light)] text-[color:var(--color-blue-dark)] hover:bg-slate-200 focus:ring-slate-400',
    ghost: 'bg-transparent text-[color:var(--color-blue-primary)] hover:bg-slate-100 focus:ring-blue-600'
  } as const
  return <button className={clsx(base, styles[variant], className)} {...props} />
}
