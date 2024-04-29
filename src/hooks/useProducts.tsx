import { useState, useEffect } from "react";
import { UseProductsResult } from "../interface/UseProductsResponse";
import { fetchProducts } from "../api/products";
import { FetchProductsParams } from "../interface/FetchProductsParams";
import { ProductQuery } from "../interface/ProductQuery";

export const useProducts = ({
  page,
  limit,
  name,
  category,
  isNew,
  withDiscount,
  maxPrice,
  sortBy,
  sortDirection,
}: FetchProductsParams): UseProductsResult => {
  const [productsQuery, setProductsQuery] = useState<ProductQuery | undefined>();
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
          withDiscount,
          maxPrice,
          sortBy,
          sortDirection,
        });
        setProductsQuery(data);
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
  }, [page, limit, name, category, isNew, maxPrice, sortBy, sortDirection, withDiscount]);

  return { productsQuery, error, loading };
};
