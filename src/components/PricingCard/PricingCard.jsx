import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;

  return (
    <div className="border bg-orange-200 rounded-2xl text-black p-4 mx-4">
      {/* card header */}
      <div>
        <h1 className="text-4xl">{name}</h1>
        <h4 className="text-3xl">{price} </h4>
      </div>
      {/* card body */}
      <div className="bg-amber-100 p-4 rounded-xl mt-4">
        <p>{description} </p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
