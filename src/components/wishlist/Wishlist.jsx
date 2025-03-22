"use client";
import React from "react";
import { useShop } from "@/context/context";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const Wishlist = () => {
  const { wishlist, addOrRemoveToWishlist } = useShop();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-mono mb-4">Your Wishlist</h1>
      <div className="flex flex-col space-y-4">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow-md"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={80}
                height={80}
                className="h-24 w-24 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <p className="font-mono text-lg text-blue-700 max-sm:text-sm">
                  {product.title}
                </p>
                <p className="text-gray-600 font-mono">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => addOrRemoveToWishlist(product)}
                className="transform transition-all hover:scale-110 hover:bg-red-200 hover:cursor-pointer p-2 rounded-full flex items-center justify-center"
              >
                <Trash2 className="text-red-500" />
              </button>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-32">
            <p className="text-gray-600">Your wishlist is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
