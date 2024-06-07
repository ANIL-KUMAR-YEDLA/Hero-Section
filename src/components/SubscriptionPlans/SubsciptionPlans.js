import React, { useState } from "react";
import "./SubscriptionPlans.css";

const SubscriptionPlan = ({
  title,
  price,
  details,
  bestOffer,
  isSelected,
  onSelectPlan,
  css,
}) => {
  const handleClick = () => onSelectPlan(title);

  return (
    <div
      className={`plan relative border h-96 border-gray-500 mt-10 rounded-lg p-8 ${
        bestOffer ? "border-yellow-500" : "border-blue-500"
      } ${
        isSelected ? "scale-125 opacity-100 z-10" : "scale-90 opacity-80 z-0"
      }`}
      onClick={handleClick}
      aria-label={`Select ${title} plan`}
    >
      <div
        className={`bg-white text-black px-6 py-2 -top-5 right-10 absolute rounded-full inline-block mb-6 ${css}`}
      >
        {title}
      </div>
      <div className="plan-price text-2xl font-bold">{price}</div>
      <div className="plan-details text-gray-400">{details}</div>
    </div>
  );
};

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelectPlan = (planTitle) => {
    setSelectedPlan(planTitle);
  };

  return (
    <div className="subscription-container text-white text-center bg-black">
      <h1 className="heading text-2xl mb-20">
        SUBSCRIPTION <span className="text-blue-500">PLANS</span>
      </h1>
      <div className="subscription-plans flex flex-wrap justify-center gap-8 relative">
        <SubscriptionPlan
          css="one"
          title="Monthly Subscription"
          price="$10/month"
          details="Billed monthly. Cancel anytime."
          bestOffer={false}
          isSelected={selectedPlan === "Monthly Subscription"}
          onSelectPlan={handleSelectPlan}
        />
        <SubscriptionPlan
          css="two"
          title="Best offer"
          price="$100/year"
          details="Billed annually. Save 20%."
          bestOffer={true}
          isSelected={selectedPlan === "Best offer"}
          onSelectPlan={handleSelectPlan}
        />
        <SubscriptionPlan
          css="three"
          title="Yearly Subscription"
          price="$120/year"
          details="Billed annually. Cancel anytime."
          bestOffer={false}
          isSelected={selectedPlan === "Yearly Subscription"}
          onSelectPlan={handleSelectPlan}
        />
      </div>
    </div>
  );
};

export default SubscriptionPlans;
