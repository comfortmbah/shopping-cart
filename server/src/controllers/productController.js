
export const getProductsList = async (req, res) => {
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json();
  res.json(products);
}