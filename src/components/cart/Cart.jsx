"use client";
import { useShop } from "@/context/context";
import React from "react";
import { FastForward, ShoppingCart, Trash2 } from "lucide-react";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart } = useShop();

  let totalAmount = cart.reduce(
    (accumulator, product) => accumulator + product.quantity * product.price,
    0
  );

  return (
    <div className="flex flex-col ">
      <div className="flex flex-row align-middle justify-start gap-3">
        <div className="flex flex-row align-middle justify-start gap-3">
          <button className="relative p-3 max-sm:p-3 bg-gray-300  text-white rounded-full ">
            <ShoppingCart size={24} color="#1447E6" />
            <span className="absolute -top-2 -right-3 bg-zinc-100 text-black text-xs px-2 py-1 rounded-full">
              {cart.reduce(
                (accumulator, product) => accumulator + product.quantity,
                0
              )}
            </span>
          </button>
          <h2 className="text-lg mt-2 font-mono text-black max-sm:text-sm">
            Cart Summary
          </h2>
        </div>

        <button
          className="ml-auto flex items-center justify-center gap-2 rounded-2xl p-3 max-sm:p-0 hover:bg-red-100 hover:cursor-pointer active:bg-red-300 transition-all"
          onClick={clearCart}
        >
          <Trash2 color="red" />
          <span className="text-red-500 font-bold max-sm:text-sm">Clear</span>
        </button>
      </div>
      <div className="mt-3 flex-grow overflow-y-auto">
        {cart.length > 0 ? (
          cart.map((product) => <CartItem product={product} key={product.id} />)
        ) : (
          <div className="flex justify-center items-center h-32">
            <p className="text-gray-500">Your cart is empty.</p>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="bottom-0 left-0 bg-blue-700 py-3 shadow-lg flex justify-between items-center px-10 max-sm:px-1 rounded-2xl w-full mt-1">
          <span className="text-lg max-sm:text-sm font-bold text-white">
            Total Cost:
          </span>
          <span className="text-lg max-sm:text-sm font-semibold text-gray-200 ml-3 max-sm:ml-0">
            ${totalAmount.toFixed(2)}
          </span>

          <button className="flex flex-row items-center ml-auto bg-white text-blue-700 font-bold sm:text-sm px-6 max-sm:px-2 py-2 rounded-xl hover:bg-gray-200 active:bg-gray-400 transition-all hover:cursor-pointer ">
            <span className="">Pay</span>
            <FastForward color="#1447E6" className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
