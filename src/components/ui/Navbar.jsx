import Link from "next/link";
import React, { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useShop } from "@/context/context";

const Navbar = ({ setIsModalOpen, isOnProductsPage }) => {
  const { cart, searchQuery, handleSearch } = useShop();

  let totalAmount = cart.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );

  return (
    <nav className="bg-black text-white p-4 border-blue-700 border-b-2 font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-row justify-between items-center size-full mr-10">
          <div className="text-2xl font-extrabold text-blue-700 ml-10 max-sm:text-sm">
            <Link href="/">HyperStore</Link>
          </div>

          {/* Search filter */}
          {isOnProductsPage && (
            <div className="relative max-md:hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                className="bg-zinc-800 text-white text-sm p-2 pl-10 rounded-md border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:w-32 sm:w-64"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              />
            </div>
          )}
        </div>
        <div className="flex space-x-4 mt-3.5">
          <a
            href="/products"
            className=" hover:text-blue-700 hover:font-bold transition-all duration-300 max-sm:text-sm"
          >
            Products
          </a>
          <a
            href="/wishlist"
            className="hover:text-blue-700 hover:font-bold transition-all duration-300 max-sm:text-sm"
          >
            Wishlist
          </a>
          <div className="ml-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative rounded-full hover:bg-gray-800 p-1 transition hover:cursor-pointer shadow-lg"
            >
              <ShoppingCart className="text-blue-700 -mt-1" size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-zinc-100/75 text-blue-700 text-xs p-1 px-2  max-sm:px-2 rounded-full font-extrabold">
                  {totalAmount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
