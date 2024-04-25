import { useState, useEffect } from "react";
import { UseProductsResult } from "../interface/UseProductsResponse";
import { Product } from "../interface/Product";
import { fetchProducts } from "../api/products";
import { FetchProductsParams } from "../interface/FetchProductsParams";

export const useProducts = ({
  page,
  limit,
  name,
  category,
  isNew,
  maxPrice,
  sortBy,
  sortDirection,
}: FetchProductsParams): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts({
          page,
          limit,
          name,
          category,
          isNew,
          maxPrice,
          sortBy,
          sortDirection,
        });
        setProducts(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    loadProducts();
  }, []);

  return { products, error, loading };
};
