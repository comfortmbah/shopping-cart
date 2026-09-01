import { getProducts } from "../data/products.js";

export const GetProductsList = (req, res) => {
  const products = getProducts();
  res.json(products);
}