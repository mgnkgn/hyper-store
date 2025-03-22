import axios from "axios";

export async function getProducts() {
  const products = await axios.get("https://fakestoreapi.com/products");
  return products.data;
}
