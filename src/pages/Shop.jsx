import { Loading } from '../components/Loading'
import { Error } from '../components/Error'
import UseFetchProducts from '../hooks/UseFetchProducts'
import { useOutletContext } from 'react-router-dom'

const Shop = () => {
  const { cart, setCart } = useOutletContext();
  return (
    <div>Shop</div>
  )
}

export default Shop