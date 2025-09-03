import type { PropsWithChildren } from 'react'
import clsx from 'classnames'

type CardProps = PropsWithChildren<{
  className?: string
  title?: string
  subtitle?: string
}>

export default function Card({ className, title, subtitle, children }: CardProps) {
  return (
    <div className={clsx('rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6', className)}>
      {title && <h3 className="text-lg font-semibold text-[color:var(--color-blue-dark)]">{title}</h3>}
      {subtitle && <p className="text-sm text-slate-600 mt-1">{subtitle}</p>}
      <div className={clsx(title || subtitle ? 'mt-4' : '')}>{children}</div>
    </div>
  )
}
