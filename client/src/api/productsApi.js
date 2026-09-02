const API_URL = "http://localhost:4000/api";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  } 
  
  const products = await response.json();
  return products;
} 

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const products = await response.json();
  return products;
}