import React, { useState } from "react";
import Rating from "./Rating";
import { CirclePlus, Heart, HeartIcon } from "lucide-react";
import { useShop } from "@/context/context";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const [addHovered, setAddHovered] = useState(false);
  const { addToCart, addOrRemoveToWishlist, wishlist } = useShop();

  const handleAddMouseEnter = () => {
    setAddHovered(true);
  };

  const handleAddMouseLeave = () => {
    setAddHovered(false);
  };

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div
      className={`bg-gray-200 bg-opacity-90 rounded-2xl p-4 hover:shadow-xl transition duration-300 flex flex-col h-full font-mono relative shadow-blue-700 `}
    >
      {/* Image */}
      <Image
        src={product.image}
        alt={product.title}
        width={80}
        height={80}
        className="h-50 w-full object-contain mb-4"
      />

      {/* Title*/}
      <div className="h-15">
        <p className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </p>
      </div>

      {/* Price */}
      <p className="text-gray-600 font-medium text-lg mt-3">
        ${product.price.toFixed(2)}
      </p>

      {/* Rating  */}
      <div className="mt-auto mb-3">
        <Rating rate={product.rating.rate} />
      </div>

      <div className="flex items-center justify-between w-full mt-auto">
        {/* Add to Cart Button */}
        <button
          onMouseEnter={handleAddMouseEnter}
          onMouseLeave={handleAddMouseLeave}
          onClick={() => {
            addToCart(product);
          }}
          className={`group h-10 ${
            addHovered ? "w-full" : "w-25"
          } mr-2 bg-black text-white py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:cursor-pointer hover:bg-blue-700 active:scale-95 active:bg-blue-400`}
        >
          <CirclePlus className="text-xl" />
          <span
            className={`transition-all duration-300 ease-in-out overflow-hidden font-bold whitespace-nowrap ${
              addHovered ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          >
            Add to Cart
          </span>
        </button>

        {/* Wishlist Button */}
        {!addHovered && (
          <button
            className={`text-red-500 rounded-full transition-all duration-300 hover:cursor-pointer flex items-center gap-2 p-2 active:bg-red-500/70  
            }`}
            onClick={() => {
              addOrRemoveToWishlist(product);
            }}
          >
            <HeartIcon
              size={24}
              className={`hover:text-red-700 ${
                isInWishlist ? "fill-current text-red-500" : ""
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
