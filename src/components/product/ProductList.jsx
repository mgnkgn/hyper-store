import { useShop } from "@/context/context";
import React from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductList = () => {
  const { products, productLoading, getActiveCategory, searchQuery } =
    useShop();

  const activeCategory = getActiveCategory();

  const filteredProductsByCategory = activeCategory
    ? products.filter((product) => product.category === activeCategory.name)
    : products;

  const filteredProducts = filteredProductsByCategory.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productLoading
        ? Array.from({ length: 12 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : filteredProducts.map((product) => (
            <div key={product.id} className="min-h-full">
              <ProductCard product={product} />
            </div>
          ))}
    </div>
  );
};

export default ProductList;
