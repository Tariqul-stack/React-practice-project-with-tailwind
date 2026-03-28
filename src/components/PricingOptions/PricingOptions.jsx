import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ PricingPromise }) => {
  const pricingData = use(PricingPromise);

  console.log(pricingData);
  return (
    <div>
      <h2 className="text-4xl mb-4">Get our Membership</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
