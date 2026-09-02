
export const getProductsList = async (req, res) => {
  const response = await fetch("https://fakestoreapi.com/products")

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();
  res.json(products);
}

export const getProductDetails = async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  
  const products = await response.json();
  res.json(products);
}