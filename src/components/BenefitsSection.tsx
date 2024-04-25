import React from "react";
import Benefict from "./Benefict";
import trophy from "../assets/icon/trophy.svg";
import guarantee from "../assets/icon/guarantee.svg";
import shipping from "../assets/icon/shipping.svg";
import costumerSupport from "../assets/icon/customer-support.svg";

const BenefitsSection: React.FC = () => {
  return (
    <div className="flex justify-center gap-14 bg-secondary-200 py-24">
      <Benefict
        icone={trophy}
        title="High Quality"
        subtitle="crafted from top materials"
      />
      <Benefict
        icone={guarantee}
        title="Warranty Protection"
        subtitle="Over 2 years"
      />
      <Benefict
        icone={shipping}
        title="Free Shipping"
        subtitle="Order over 150 $"
      />
      <Benefict
        icone={costumerSupport}
        title="24 / 7 Support"
        subtitle="Dedicated support"
      />
    </div>
  );
};

export default BenefitsSection;
