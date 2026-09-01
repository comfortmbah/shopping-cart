const API_URL = "http://localhost:4000/api";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  } 
  
  const products = await response.json();
  return products;
} 