"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productLoading, setProductsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishList] = useState([]);

  const setProductsData = (products) => {
    setProducts(products);
    setProductsLoading(false);
  };

  const setIsProductsLoading = (loading) => {
    setProductsLoading(loading);
  };

  // UseEffects
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }

    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishList(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Methods
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const reduceAmount = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const setActiveCategory = (categorySelected) => {
    setCategories(
      categories.map((category) => ({
        ...category,
        active:
          category.name === categorySelected.name ? !category.active : false,
      }))
    );
  };

  const getActiveCategory = () => {
    return categories.find((category) => category.active);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addOrRemoveToWishlist = (product) => {
    const existingProduct = wishlist.find((item) => item.id === product.id);

    if (!existingProduct) {
      setWishList([...wishlist, product]);
    } else {
      const filteredWishlist = wishlist.filter(
        (wish) => wish.id !== existingProduct.id
      );

      setWishList(filteredWishlist);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        productLoading,
        setProductsData,
        setIsProductsLoading,
        cart,
        addToCart,
        reduceAmount,
        removeFromCart,
        clearCart,
        categories,
        setCategories,
        setActiveCategory,
        getActiveCategory,
        searchQuery,
        handleSearch,
        wishlist,
        addOrRemoveToWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
