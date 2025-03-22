import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-gray-200 bg-opacity-90 rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 flex flex-col h-full animate-pulse">
      <div className="bg-gray-300 h-50 w-full rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-6 w-3/4 rounded-lg mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded-lg mb-2"></div>
      <div className="bg-gray-300 h-6 w-1/3 rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-10 w-20 rounded-lg"></div>
    </div>
  );
};

export default ProductCardSkeleton;
