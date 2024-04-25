import { useState, useEffect } from "react";
import { UseProductByIdResult } from "../interface/UseProductByIdResponse";
import { Product } from "../interface/Product";
import { fetchProductById } from "../api/products";

export const useProductsById = (id: number): UseProductByIdResult => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    loadProduct();
  }, [id]);

  return { product, error, loading };
};
