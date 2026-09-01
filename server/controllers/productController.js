import { getProducts } from "../src/data/products.js";

export const GetProductsList = (req, res) => {
  const products = getProducts();
  res.json(products);
}