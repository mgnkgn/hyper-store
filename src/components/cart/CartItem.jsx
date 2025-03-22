import React from "react";
import { Minus, Plus } from "lucide-react";
import { useShop } from "@/context/context";

const CartItem = ({ product }) => {
  const { addToCart, reduceAmount, removeFromCart, cart } = useShop();
  return (
    <div className="bg-gray-100 border-b py-4 px-3 flex justify-between items-center hover:bg-gradient-to-b font-mono max-sm:text-sm from-gray-50 to-zinc-50 rounded-4xl transition duration-300 mt-2 hover:cursor-pointer">
      {/* Image */}
      <div className="flex flex-row items-center gap-14">
        <img
          src={product.image}
          alt={product.title}
          className="h-20 w-20 object-contain max-sm:hidden"
        />

        {/* Title */}
        <p className="text-md font-semibold text-gray-800">{product.title}</p>
      </div>

      <div className="flex flex-row items-center gap-10">
        {/* Price */}
        <div className="max-sm:ml-3">
          <p className="text-sm font-medium text-gray-600">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <button
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300 hover:cursor-pointer"
            onClick={() => {
              addToCart(product);
            }}
          >
            <Plus size={16} color="#333" />
          </button>

          <div className="text-sm font-medium text-black">
            {product.quantity}
          </div>

          <button
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300 hover:cursor-pointer"
            onClick={() => {
              if (product.quantity > 1) {
                reduceAmount(product.id);
              } else {
                removeFromCart(product.id);
              }
            }}
          >
            <Minus size={16} color="#333" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
