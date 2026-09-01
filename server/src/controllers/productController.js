import { getProducts } from "../data/products.js";

export const getProductsList = (req, res) => {
  const products = getProducts();
  res.json(products);
}