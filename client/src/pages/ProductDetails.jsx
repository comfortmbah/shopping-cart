import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../components/Loading"
import Error from "../components/Error"
import { useCart } from "../context/CartContext"
import { getProductById } from "../api/productsApi"

const ProductDetails = () => {
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const { addToCart } = useCart();
  const { id } = useParams();
  
  useEffect(() => { 
    const fetchProduct = async () => { 
      try { 
        const data = await getProductById(id); 
        setProduct(data); 
      } catch (err) { 
        setError(err.message); 
      } finally { 
        setLoading(false); 
      } 
    }; 
    fetchProduct(); 
  }, [id]);

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  if (!product) {
    return <Error message={'Product not found.'} />
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2">
            <img 
              src={product.image}
              alt={product.title}
              className="h-96 w-full object-contain"
            />

            <div>
                <h1 className="text-3xl font-bold">
                    {product.title}
                </h1>

                <p className="mt-4 text-2xl font-semibold text-blue-600">
                    ${product.price}
                </p>

                <p className="mt-6 text-gray-700">
                    {product.description}
                </p>

                <p className="mt-6">
                    <span className="font-semibold">
                        Category:
                    </span>{" "}
                    {product.category}
                </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-6 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Add To Cart
            </button>
        </div>
    </div>
  )
}

export default ProductDetails