import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Loomli',
  description: 'Explore Loomli\'s pricing plans and choose the best option for your recruitment needs.',
}

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
      <p className="text-lg mb-4">
        Choose the plan that best fits your recruitment needs and budget.
      </p>
      {/* Add pricing table or cards here */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Pricing cards go here */}
      </div>
    </main>
  )
}