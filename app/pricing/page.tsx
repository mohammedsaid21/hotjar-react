import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import ClarityTracking from "@/components/ClarityTracking"

export const metadata: Metadata = {
  title: 'Pricing | Loomli',
  description: 'Explore Loomli\'s pricing plans and choose the best option for your recruitment needs.',
}

interface PricingOption {
  name: string
  description: string
  price: string
  features: string[]
}

const pricingOptions: PricingOption[] = [
  {
    name: "Basic",
    description: "For small teams or office",
    price: "$20",
    features: ["5 users", "Basic support", "1GB storage"],
  },
  {
    name: "Pro",
    description: "For professional teams",
    price: "$50",
    features: ["20 users", "Priority support", "10GB storage", "Advanced analytics"],
  },
  // Add more pricing options as needed
]

export default function PricingPage() {
  return (
    <div className="container relative">
      <ClarityTracking />
      <section className="md:py-10">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingOptions.map((option, index) => (
            <div key={index} className="rounded-lg border p-8 shadow-sm">
              <h3 className="mb-2 text-2xl font-bold">{option.name}</h3>
              <p className="mb-4 text-gray-500">{option.description}</p>
              <p className="mb-6 text-4xl font-bold">{option.price}</p>
              <ul className="mb-6 space-y-2">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full"
                )}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}