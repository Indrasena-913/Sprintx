import PricingCard from '../components/PricingCard'

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-[color:var(--color-gray-light)]">
      <div className="container">
        <h2 className="text-3xl font-bold text-[color:var(--color-blue-dark)]">Pricing / Enrollment</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <PricingCard tier="Starter" price="₹14,999" features={["Beginner + Agile", "Labs & Projects", "Community Support"]} />
          <PricingCard tier="Pro" price="₹24,999" highlight features={["Advanced + Admin", "Interview Prep", "Mock Interviews", "Placement Assistance"]} />
          <PricingCard tier="Corporate" price="Custom" features={["Tailored Curriculum", "Onsite/Remote", "Team Enablement", "Dedicated Support"]} />
        </div>
      </div>
    </section>
  )
}
