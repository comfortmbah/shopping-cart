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
    <div>Shop</div>
  )
}

export default Shop