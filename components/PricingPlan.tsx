interface PricingPlanProps {
  plan: string;
  features: string[];
  price: number;
  isCurrentPlan: boolean;
}

export function PricingPlan({ plan, features, price, isCurrentPlan }: PricingPlanProps) {
  return (
    <div>
      <h2>{plan}</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>Price: ${price}</p>
      {isCurrentPlan && <p>Current Plan</p>}
    </div>
  )
}