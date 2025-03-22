import React from "react";
import Head from "next/head";
import Wishlist from "@/components/wishlist/Wishlist";

const WishlistPage = () => {
  return (
    <div>
      <Head>
        <title>Wishlist</title>
      </Head>
      <Wishlist />
    </div>
  );
};

export default WishlistPage;
