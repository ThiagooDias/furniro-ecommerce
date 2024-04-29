import React from "react";
import { useNavigate } from "react-router-dom";

interface CardCategoryProps {
  id: number;
  category: string;
  imageLink: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  id,
  category,
  imageLink,
}: CardCategoryProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("shop", { state: id });
  };
  return (
    <div>
      <img
        className="iphone12:w-80 mb-7 rounded-lg shadow-lg transform transition duration-300
        hover:translate-y-1 hover:translate-x-1 hover:shadow-2xl cursor-pointer"
        src={imageLink}
        alt={`${category}`}
        onClick={handleClick}
      />

      <p
        className="text-center font-semibold text-2xl hover:underline cursor-pointer"
        onClick={handleClick}
      >
        {category}
      </p>
    </div>
  );
};

export default CardCategory;
