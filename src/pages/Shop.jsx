import  Loading  from '../components/Loading'
import  Error  from '../components/Error'
import UseFetchProducts from '../hooks/UseFetchProducts'
import { useOutletContext } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'

const Shop = () => {
  const { cart, setCart } = useOutletContext();
  const { products, loading, error } = UseFetchProducts();
  const [showMessage, setShowMessage] = useState(false);

  function showSuccessMessage() {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <section className='max-w-7xl mx-auto px-4 py-10'>
      <h1 className='mb-2 text-4xl font-bold text-slate-800'>
        Shop Products
      </h1>
      <p className='mb-8 text-slate-600'>
        Browse our collection and add your favorite products to the cart.
      </p>

      {showMessage && (
        <div className='fixed top-24 right-6 z-50 rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg'>
          Product added to cart!
        </div>
      )}

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
            showSuccessMessage={showSuccessMessage}
          />
        ))}
      </div>
    </section>
  )
}

export default Shop