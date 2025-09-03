type TestimonialProps = {
  name: string
  role: string
  imageUrl: string
  quote: string
  rating?: number
}

export default function Testimonial({ name, role, imageUrl, quote, rating = 5 }: TestimonialProps) {
  return (
    <figure className="rounded-xl border border-slate-200 bg-white p-6 shadow">
      <blockquote className="text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <img src={imageUrl} alt={name} className="h-10 w-10 rounded-full object-cover" loading="lazy" width="40" height="40" />
        <div>
          <div className="font-semibold text-[color:var(--color-blue-dark)]">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
          <div className="mt-1 flex" aria-label={`Rating: ${rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? '#F59E0B' : '#E5E7EB'} aria-hidden="true"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.785 1.402 8.172L12 18.896l-7.336 3.871 1.402-8.172L.132 9.21l8.2-1.192L12 .587z"/></svg>
            ))}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
