import { Loading } from '../components/Loading'
import { Error } from '../components/Error'
import UseFetchProducts from '../hooks/UseFetchProducts'
import { useOutletContext } from 'react-router-dom'

const Shop = () => {
  const { cart, setCart } = useOutletContext();
  const { products, loading, error } = UseFetchProducts();
  return (
    <div>Shop</div>
  )
}

export default Shop