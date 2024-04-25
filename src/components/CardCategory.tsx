import React from "react";

interface CardCategoryProps {
  category: string;
  imageLink: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  category,
  imageLink,
}: CardCategoryProps) => {
  const href = `/shop/${category.toLowerCase()}`;
  return (
    <div>
      <a href={href}>
        <img
          className="mb-7 rounded-lg shadow-lg transform transition duration-300
          hover:translate-y-1 hover:translate-x-1 hover:shadow-2xl"
          src={imageLink}
          alt={`${category}`}
        />
      </a>
      <a
        className="text-center font-semibold text-2xl hover:underline"
        href={href}
      >
        {category}
      </a>
    </div>
  );
};

export default CardCategory;
