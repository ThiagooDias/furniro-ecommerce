import { useState, useEffect } from "react";
import { Category } from "../interface/Category";
import { UseCategoryByIdResult } from "../interface/UseCategoryByIdResponse";
import { fetchCategoryById } from "../api/category";

export const useCategoryById = (
  id: string | undefined
): UseCategoryByIdResult => {
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const data = await fetchCategoryById(id);

        setCategory(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };

    loadCategory();
  }, [id]);

  return {category};
};
