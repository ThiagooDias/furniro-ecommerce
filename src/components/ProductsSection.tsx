import React, { useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import Loading from "./Loading";
import CardProduct from "./CardProduct";

interface ProductSectionProps {
  page?: number;
  limit?: number;
  name?: string;
  category?: number;
  isNew?: boolean;
  maxPrice?: number;
  sortBy?: string;
  sortDirection?: string;
}

const ProductsSection: React.FC<ProductSectionProps> = (
  props: ProductSectionProps
) => {
  const { products, loading, error } = useProducts(props);

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-4 gap-8 mb-10">
        {loading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : error ? (
          <p>An error has occurred! Please reload the page</p>
        ) : (
          products.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              name={product.name}
              imageLink={product.imageLink}
              category={product.categoryId}
              price={product.price}
              discountPrice={product.discountPrice}
              discountPercent={product.discountPercent}
              isNew={product.isNew}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
