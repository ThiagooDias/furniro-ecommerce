import { API } from "./api";
import { Category } from "../interface/Category";

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await API.get<Category[]>("/category");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching categories:", error.message);
      throw new Error(`Failed to fetch categories: ${error.message}`);
    } else {
      console.error("An unknown error occurred while fetching categories.");
      throw new Error("An unknown error occurred while fetching categories.");
    }
  }
};

export const fetchCategoryById = async (id: string | undefined): Promise<Category> => {
  try {
    const response = await API.get<Category>(`/category/${id}`);
    
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching category by ID ${id}:`, error.message);
      throw error;
    } else {
      console.error(`Unknown error fetching category by ID ${id}.`);
      throw new Error("An unknown error occurred while fetching the category.");
    }
  }
};
