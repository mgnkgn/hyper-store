"use client";

import React, { useEffect } from "react";
import services from "@/services";
import ProductsList from "@/components/product/ProductList";
import { useShop } from "@/context/context";
import { findCategories } from "../utils/findCategories";
import Head from "next/head";

const Products = () => {
  const { setProductsData, setIsProductsLoading, setCategories } = useShop();

  useEffect(() => {
    services.getProducts().then((result) => {
      setIsProductsLoading(true);
      // Sleep for 2 second to simulate loading time
      setTimeout(() => {
        setProductsData(result);
        setIsProductsLoading(false);

        const foundCategories = findCategories(result);
        setCategories(foundCategories);
      }, 1500);
    });
  }, []);

  return (
    <div className="m-10">
      <Head>
        <title>Products</title>
      </Head>
      <ProductsList></ProductsList>
    </div>
  );
};

export default Products;
