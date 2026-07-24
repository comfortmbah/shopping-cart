import { useParams } from "react-router-dom"
import UseFetchProducts from "../hooks/UseFetchProducts"
import Loading from "../components/Loading"
import Error from "../components/Error"

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = UseFetchProducts();

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  const product = products.find((item) => item.id === Number(id))

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
        </div>
    </div>
  )
}

export default ProductDetails