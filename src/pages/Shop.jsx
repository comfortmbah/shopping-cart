import { Loading } from '../components/Loading'
import { Error } from '../components/Error'
import UseFetchProducts from '../hooks/UseFetchProducts'
import { useOutletContext } from 'react-router-dom'

const Shop = () => {
  const { cart, setCart } = useOutletContext();
  const { products, loading, error } = UseFetchProducts();

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

      <div>
        
      </div>
    </section>
  )
}

export default Shop