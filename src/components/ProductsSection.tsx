import React from "react";
import { useProducts } from "../hooks/useProducts";
import { useProductsById } from "../hooks/useProductById";
import Loading from "./Loading";
import CardProduct from "./CardProduct";

interface ProductSectionProps {
  limit?: number
}

const ProductsSection: React.FC<ProductSectionProps> = ({limit}: ProductSectionProps) => {
  const { products, loading, error } = useProducts({limit});
  console.log(products);

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-4 gap-8 mb-10">
      {loading ? (
        <Loading />
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
