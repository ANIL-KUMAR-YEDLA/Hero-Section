import React, { useState } from "react";
import "./SubscriptionPlans.css";

const SubscriptionPlan = ({
  title,
  price,
  details,
  bestOffer,
  isSelected,
  onSelectPlan,
}) => {
  const handleClick = () => onSelectPlan(title);

  return (
    <div
      className={`plan ${bestOffer ? "best-offer" : ""} ${
        isSelected ? "selected" : ""
      }`}
      style={{
        transform: isSelected ? "scale(1.2)" : "scale(0.9)",
        opacity: isSelected ? 1 : 0.8,
        zIndex: isSelected ? 1 : 0,
      }}
      onClick={handleClick}
      aria-label={`Select ${title} plan`}
    >
      <div className="plan-title">{title}</div>
      <div className="plan-price">{price}</div>
      <div className="plan-details">{details}</div>
    </div>
  );
};

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelectPlan = (planTitle) => {
    setSelectedPlan(planTitle);
  };

  return (
    <div className="subscription-container text-center p-0 bg-black text-white">
      <h1 className="heading ">
        SUBSCRIPTION <span className="blue-text">PLANS</span>
      </h1>
      <div className="subscription-plans">
        <SubscriptionPlan
          title="Monthly Subscription"
          price="$10/month"
          details="Billed monthly. Cancel anytime."
          bestOffer={false}
          isSelected={selectedPlan === "Monthly Subscription"}
          onSelectPlan={handleSelectPlan}
        />
        <SubscriptionPlan
          title="Best offer"
          price="$100/year"
          details="Billed annually. Save 20%."
          bestOffer={true}
          isSelected={selectedPlan === "Best offer"}
          onSelectPlan={handleSelectPlan}
        />
        <SubscriptionPlan
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
