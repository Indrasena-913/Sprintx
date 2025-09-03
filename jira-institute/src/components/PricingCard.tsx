import Button from './Button'

type PricingCardProps = {
  tier: string
  price: string
  features: string[]
  highlight?: boolean
}

export default function PricingCard({ tier, price, features, highlight }: PricingCardProps) {
  return (
    <div className={`rounded-2xl border ${highlight ? 'border-[color:var(--color-blue-primary)] ring-2 ring-blue-200' : 'border-slate-200'} bg-white p-6 shadow-sm`}> 
      <h3 className="text-xl font-semibold text-[color:var(--color-blue-dark)]">{tier}</h3>
      <div className="mt-2 text-3xl font-bold text-[color:var(--color-blue-primary)]">{price}<span className="text-base text-slate-500 font-medium">/course</span></div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#10B981" aria-hidden="true"><path d="M20.285 2.859l-11.4 11.4-5.143-5.143-2.286 2.286 7.429 7.429 13.686-13.686z"/></svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button className="w-full" aria-label={`Enroll in ${tier}`}>Enroll Now</Button>
      </div>
    </div>
  )
}
