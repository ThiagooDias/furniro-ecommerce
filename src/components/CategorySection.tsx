import React from "react";
import { useCategories } from "../hooks/useCategories";
import { UseCategoriesResult } from "../interface/UseCategoriesResponse";
import CardCategory from "./CardCategory";
import Loading from "./Loading";

const CategorySection: React.FC = () => {
  const { categories, error, loading }: UseCategoriesResult = useCategories();

  return (
    <div className="flex flex-col items-center pb-14">
      <h2 className="font-bold text-3xl py-24">Browse The Range</h2>
      <div className="flex gap-5 text-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <p>An error has occurred! Please reload the page</p>
        ) : (
          categories.map((category) => (
            <CardCategory key={category.id} category={category.name} imageLink={category.imageLink}/> 
          ))
        )}
      </div>
    </div>
  );
};

export default CategorySection;
