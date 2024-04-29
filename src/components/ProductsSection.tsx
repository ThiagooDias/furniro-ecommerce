import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import Loading from "./Loading";
import CardProduct from "./CardProduct";
import { Product } from "../interface/Product";

interface ProductSectionProps {
  page?: number;
  limit?: number;
  name?: string;
  category?: number;
  isNew?: boolean;
  withDiscount?: boolean;
  maxPrice?: number;
  sortBy?: string;
  sortDirection?: string;
  onPagination?: (paginationInfo: {
    startIndex: number | undefined;
    endIndex: number | undefined;
    results: number | undefined;
  }) => void;
}

const ProductsSection: React.FC<ProductSectionProps> = (
  props: ProductSectionProps
) => {
  const { productsQuery, loading, error } = useProducts(props);
  const [products, setProducts] = useState<Product[]>([]);

  const [startIndex, setStartIndex] = useState<number | undefined>(
    productsQuery?.startIndex
  );
  const [endIndex, setEndIndex] = useState<number | undefined>(
    productsQuery?.endIndex
  );
  const [results, setResults] = useState<number | undefined>(
    productsQuery?.results
  );

  useEffect(() => {
    setEndIndex(productsQuery?.endIndex);
    setResults(productsQuery?.results);
    setStartIndex(productsQuery?.startIndex);
  }, [
    productsQuery?.endIndex,
    productsQuery?.results,
    productsQuery?.startIndex,
  ]);

  const { onPagination } = props;

  useEffect(() => {
    if (onPagination) {
      if (onPagination) {
        onPagination({ startIndex, endIndex, results });
      }
    }
  }, [startIndex, endIndex, results]);

  useEffect(() => {
    setProducts(productsQuery?.products ?? []);
  }, [productsQuery?.products]);

  return (
    <div className="flex justify-center ">
      {loading ? (
        <div className="flex justify-center m-10">
          <Loading />
        </div>
      ) : error ? (
        <p>An error has occurred! Please reload the page</p>
      ) : (
        <div className="iphone12:flex iphone12:flex-col md:grid grid-cols-4 gap-8 mb-10">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              name={product.name}
              imageLink={product.imageLink}
              category={product.categoryId}
              price={product.price}
              currentPrice={product.currentPrice}
              discountPercent={product.discountPercent}
              isNew={product.isNew}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
