import React from "react";

interface BenefictProps {
  icone: string;
  title: string;
  subtitle: string;
}

const Benefict: React.FC<BenefictProps> = ({
  icone,
  title,
  subtitle,
}: BenefictProps) => {
  return (
    <div className="flex gap-3">
      <img src={icone} alt="" />
      <div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-secondaryText text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default Benefict;
