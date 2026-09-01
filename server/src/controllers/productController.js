
export const getProductsList = async (req, res) => {
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json();
  res.json(products);
}

export const getProductDetails = async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await response.json();
  res.json(products);
}