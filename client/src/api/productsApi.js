const API_URL = "http://localhost:4000/api";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  } 

  return response.json();
}

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  return handleResponse(response);
} 

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  
  return handleResponse(response);
}